# SMS segment billing spec

## Decision

Limit included texting by **segments**, not by message count.

Default included allocation:
- **1,000 segments included**

## Why

This protects against:
- long messages
- emojis / UCS-2 encoding surprises
- hidden cost inflation
- fake simplicity that burns margin

## UX requirements

### 1. Live meter in composer
Show while typing:
- characters used
- characters per segment threshold
- segments used
- remaining included segments

Examples:
- `142 / 160 characters`
- `1 segment`
- `987 segments remaining`

If longer / non-GSM:
- `181 characters`
- `2 segments ⚠️`

### 2. Soft warning threshold
At ~80% of included segments used:
- show: `You're running low on text credits`
- do **not** hard stop yet
- guide behavior instead of punishing early

### 3. Product language
Use:
- `1,000 segments included`

Avoid:
- `1,000 texts included`

That wording is sloppy and creates billing confusion.

## Recommendation for integration

Use the segment counter directly in the SMS composer UI and surface segment usage in campaign analytics + billing views.
