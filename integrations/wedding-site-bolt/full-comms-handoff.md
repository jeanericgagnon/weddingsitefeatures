# Full comms handoff — `wedding-site-Bolt`

## What the feature repo now contains

The `partiful-like-comms` package now includes:
- message composer
- starter templates
- send adapter
- guest timeline shell
- custom audience patch spec
- reminder automation
- contact capture shell
- inbound SMS review queue
- campaign analytics
- template manager
- event aggregation utilities
- schema/API contracts
- screen integration map

## Main repo integration priorities

### Highest priority
1. patch `send-bulk-message` for custom guest targeting
2. wire composer + send flow into Messages dashboard
3. expose guest timeline in Guests dashboard
4. add inbound review queue for SMS exceptions

### Next priority
5. add template manager
6. add campaign analytics panels
7. add reminder automation workflows
8. add contact capture lifecycle

## Warning

Do not expose fake custom targeting before the backend patch is live.
That would be sloppy as hell.
