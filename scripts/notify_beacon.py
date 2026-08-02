#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Notify the Continuous Discovery Beacon after a verified deploy.

Run AFTER deploy.sh's own smoke test confirms the live site is actually
responding — never notify about a deploy that isn't confirmed live.

Missing BEACON_SUBMIT_TOKEN_AGIRIGHT is not an error — it means the
integration isn't configured locally yet, matching the Beacon's own
IndexNow adapter, which reports 'skipped' rather than failing when it has
nothing to work with.

Usage: python scripts/notify_beacon.py
"""
from __future__ import annotations

import json
import os
import subprocess
import sys
import urllib.error
import urllib.request

BEACON_URL = "https://beacon.evemiss.com/api/v1/events"
SITE_ID = "agiright_org"
SITE_URL = "https://agiright.org/"


def git_commit_sha() -> str:
    return subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()


def main() -> int:
    token = os.environ.get("BEACON_SUBMIT_TOKEN_AGIRIGHT")
    if not token:
        print("[skipped] BEACON_SUBMIT_TOKEN_AGIRIGHT not set - not notifying the Beacon.")
        return 0

    commit = git_commit_sha()
    payload = {
        "site_id": SITE_ID,
        "url": SITE_URL,
        "event_type": "updated",
        "content_hash": f"git-{commit}",
        "title": "AGIRight.org",
        "summary": f"Verified deploy at commit {commit}",
        "auto_dispatch": True,
    }
    req = urllib.request.Request(
        BEACON_URL,
        data=json.dumps(payload).encode("utf-8"),
        # Explicit User-Agent required: Cloudflare's bot protection in front
        # of beacon.evemiss.com blocks urllib's default "Python-urllib/x.y"
        # signature with a 403 (Cloudflare error 1010) before the request
        # ever reaches the app. curl's default UA passes through fine.
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
            "User-Agent": "agiright-org-deploy-notify/1.0",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = resp.read().decode("utf-8")
            print(f"[ok] Beacon notified: {resp.status} {body[:200]}")
            return 0
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")
        print(f"[FAILED] Beacon returned {exc.code}: {detail}")
        return 1
    except urllib.error.URLError as exc:
        print(f"[FAILED] Could not reach Beacon: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
