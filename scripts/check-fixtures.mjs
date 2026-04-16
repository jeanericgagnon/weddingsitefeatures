import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('features/partiful-like-comms/fixtures/comms-fixtures.json');
const raw = fs.readFileSync(file, 'utf8');
const parsed = JSON.parse(raw);

const requiredTopLevel = ['messageComposer', 'guestTimeline', 'inboundReview', 'campaignAnalytics'];
for (const key of requiredTopLevel) {
  if (!(key in parsed)) {
    throw new Error(`Missing fixture key: ${key}`);
  }
}

console.log('fixture check passed');
