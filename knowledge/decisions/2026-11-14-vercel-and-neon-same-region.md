# Vercel functions and Neon share a region

## Context
Pages on the live Vercel app felt slow to load. Nothing in the repo sets a Vercel function region (`vercel.json` only has `buildCommand`), so a region mismatch with Neon (Singapore, `ap-southeast-1`) was the first suspect.

## Options
- **A (chosen):** leave the region alone. The Vercel runtime logs for production show `region=sin1` on every function invocation checked (15 requests, 3 deployments), so functions already run next to Neon.
- B: add `"regions": ["sin1"]` to `vercel.json`. Rejected: it changes nothing while the project is already on `sin1`, and it would pin a region that the dashboard sets.

## Decision
Option A. No region change. Region was ruled out as the cause of slow loads.

## Consequences
- Still unmeasured suspects, in rough order: the Neon production compute waking from suspend (about 1-3 s on the first request after idle); a Vercel function cold start; `getUserId()` in `lib/auth/server.ts` calling `auth.getSession()` again in the layout and each page because it isn't wrapped in React `cache()`.
- The runtime logs carry no request durations, and a signed-in page can't be timed without the owner's session. Timing needs the owner to note the page and time of a slow load, then match it against the logs.
- If the Vercel project's Function Region is ever changed in the dashboard, recheck this.
