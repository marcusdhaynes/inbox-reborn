import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const html = readFileSync('index.html');
const hash = createHash('sha256').update(html).digest('hex');
console.log('Current legacy HTML SHA-256:', hash);
console.log('Bytes:', html.length);
if (!html.toString().includes('Inbox Reborn')) throw Error('Legacy application entry is missing');
