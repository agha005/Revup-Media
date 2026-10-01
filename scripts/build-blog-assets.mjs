import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const diagrams = [
  ['black-friday-email-marketing-strategy', 'BLACK FRIDAY 2026', 'A plan beyond the sale', 'Plan the offer. Match the message. Earn the next order.', ['Prepare', 'Segment', 'Launch', 'Retain'], ['Offer + margin', 'Customer context', 'Clear next step', 'Product value']],
  ['black-friday-email-calendar', 'CAMPAIGN CALENDAR', 'The Black Friday timeline', 'Prepare in October. Make every November message useful.', ['October', 'Early access', 'Nov 27', 'Nov 30'], ['Audit + test', 'Eligible audience', 'Black Friday', 'Cyber Monday']],
  ['black-friday-klaviyo-segments', 'KLAVIYO AUDIENCES', 'Context changes the message', 'Start with eligibility, then choose a useful customer angle.', ['Prospects', 'Loyal buyers', 'High intent', 'Recent buyers'], ['Help choose', 'Meaningful access', 'Remove friction', 'Support + educate']],
  ['black-friday-email-subject-lines', 'SUBJECT LINE TESTING', 'Test the promise, not the noise', 'Compare clear messages. Read clicks and orders in context.', ['Hypothesis', 'Version A', 'Version B', 'Review'], ['One question', 'Offer-led', 'Product-led', 'Clicks + orders']],
  ['klaviyo-flows-for-shopify', 'SHOPIFY + KLAVIYO', 'Connect the customer journey', 'Accurate events and exits make useful automation possible.', ['Signup', 'Checkout', 'Purchase', 'Return'], ['Welcome', 'Recovery', 'Product guidance', 'Relevant reorder']],
  ['klaviyo-welcome-flow', 'WELCOME AUTOMATION', 'Make the signup promise real', 'Deliver the benefit, then help a new subscriber choose.', ['Promise', 'Deliver', 'Guide', 'Purchase'], ['Clear form', 'Useful first email', 'Resolve questions', 'Change the journey']],
  ['klaviyo-abandoned-cart-flow', 'CHECKOUT RECOVERY', 'Remind the right shopper', 'Before each reminder, check whether the customer bought.', ['Checkout', 'Delay', 'Order check', 'Remind'], ['Correct event', 'Time to finish', 'Buyer exits', 'Useful next step']],
  ['klaviyo-deliverability-checklist', 'DELIVERABILITY', 'Check the foundations first', 'Sender setup and customer expectations work together.', ['Authenticate', 'Qualify', 'Pace', 'Monitor'], ['Domain + alignment', 'Wanted messages', 'Gradual volume', 'Provider evidence']],
  ['klaviyo-popup-list-growth', 'EMAIL LIST GROWTH', 'From signup to real interest', 'A good form starts a useful journey, not just a bigger list.', ['Visitor', 'Benefit', 'Welcome', 'Outcome'], ['Relevant context', 'Clear signup', 'Keep the promise', 'Qualified orders']],
  ['post-purchase-email-flow', 'POST-PURCHASE', 'Help the customer get value', 'The next purchase starts with a better first experience.', ['Order', 'Arrival', 'Product use', 'Next order'], ['Clear expectations', 'Right timing', 'Care + education', 'Relevant product']],
  ['ecommerce-email-marketing-metrics', 'EMAIL MEASUREMENT', 'Read beyond attributed revenue', 'A useful report connects the message with a decision.', ['Delivery', 'Engagement', 'Attribution', 'Retention'], ['Receiver accepted', 'Qualified interest', 'Model + window', 'Customer outcome']],
];

const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const output = path.resolve('public/assets/blog');
await fs.mkdir(output, { recursive: true });
for (const [slug, label, title, subtitle, nodes, details] of diagrams) {
  const tiles = nodes.map((node, i) => {
    const x = 64 + i * 278;
    const arrow = i < 3 ? `<path d="M${x+251} 385h21m-7-6 7 6-7 6" fill="none" stroke="#c8cd35" stroke-width="2"/>` : '';
    return `<g><rect x="${x}" y="292" width="242" height="188" rx="18" fill="#161816" stroke="#3a3e2a"/><circle cx="${x+35}" cy="329" r="16" fill="#c8cd35"/><text x="${x+35}" y="335" text-anchor="middle" fill="#111" font-size="16" font-weight="700">${i+1}</text><text x="${x+22}" y="385" fill="#f6f6ee" font-size="26" font-weight="700">${esc(node)}</text><text x="${x+22}" y="427" fill="#babdad" font-size="18">${esc(details[i])}</text></g>${arrow}`;
  }).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><defs><radialGradient id="glow"><stop stop-color="#424818" stop-opacity=".48"/><stop offset="1" stop-color="#090b09" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="630" fill="#090b09"/><ellipse cx="1010" cy="40" rx="450" ry="340" fill="url(#glow)"/><g font-family="Segoe UI,Arial,sans-serif"><text x="64" y="69" fill="#c8cd35" font-size="19" font-weight="700" letter-spacing="2">${esc(label)}</text><text x="64" y="154" fill="#fff" font-size="46" font-weight="700" letter-spacing="-1">${esc(title)}</text><text x="64" y="211" fill="#b8bcad" font-size="23">${esc(subtitle)}</text>${tiles}<path d="M64 544h1072" stroke="#343929"/><text x="64" y="583" fill="#f4f5ed" font-size="20" font-weight="700">REVUP MEDIA</text><text x="1136" y="583" text-anchor="end" fill="#a6aa99" font-size="18">Practical ecommerce retention</text></g></svg>`;
  await fs.writeFile(path.join(output, `${slug}.svg`), svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(output, `${slug}.png`));
  console.log(`Created ${slug}`);
}
