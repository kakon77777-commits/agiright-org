#!/usr/bin/env bash
# Build + deploy + verify + notify agiright.org in one gated step.
#   1. npm run build      -> fresh dist/
#   2. npx wrangler deploy -> pushes dist/ + worker/index.js live
#   3. smoke test          -> confirms the live domain is actually responding
#      (homepage, /zh, and /llms.txt — the machine-readable governance layer
#      this site specifically advertises) before telling anyone it worked
#   4. scripts/notify_beacon.py -> tells the Continuous Discovery Beacon
#      (beacon.evemiss.com) this build is real and live. Non-fatal if it
#      fails or BEACON_SUBMIT_TOKEN_AGIRIGHT isn't set: this site's own
#      deploy must never depend on the Beacon being reachable.
set -euo pipefail

npm run build
npx wrangler deploy

echo "== smoke test =="
for path in / /zh /llms.txt; do
  code=$(curl -sL -o /dev/null -w '%{http_code}' "https://agiright.org$path")
  if [ "$code" -lt 200 ] || [ "$code" -ge 300 ]; then
    echo "FATAL: $path returned HTTP $code"
    exit 1
  fi
  echo "$path -> $code"
done

python scripts/notify_beacon.py || echo "[warn] Beacon notification failed - deploy itself succeeded, this is non-fatal"
