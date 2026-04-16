# PR-sized execution plan

This plan is written for the future integrating agent working in `wedding-site-Bolt`.

## PR 1 — custom audience truth
- patch `send-bulk-message` to honor `recipient_filter.guestIds`
- add tests/smoke coverage
- hide custom audience UI until merged

## PR 2 — SMS segment truth
- add segment estimation helper in main repo
- switch SMS usage validation/deduction to segment counts
- persist segment metadata on usage transactions
- update billing/product copy to `segments included`

## PR 3 — composer integration
- integrate composer into Messages dashboard
- wire send-now flow
- add live segment meter for SMS
- add 80% soft warning copy

## PR 4 — guest workflow layer
- integrate guest timeline
- add invite/reminder/contact-request guest actions
- add inbound review queue entry point

## PR 5 — contact capture lifecycle
- add tokenized contact capture request flow
- persist request lifecycle
- update guest record + audit event on submit

## PR 6 — analytics/template polish
- integrate campaign analytics panels
- integrate template manager
- surface carrier/delivery failures clearly

## Rule of thumb
Keep each PR scoped enough to verify with smoke tests and real UI review.
Do not jam the entire comms system into one monster PR.
