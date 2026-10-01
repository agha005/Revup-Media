import type { BlogArticle } from './article-types';

const published = '2026-10-01';

export const growthArticles: BlogArticle[] = [
  {
    slug: 'black-friday-email-marketing-strategy',
    title: 'Black Friday email marketing strategy: a practical 2026 playbook for ecommerce',
    seoTitle: 'Black Friday Email Marketing Strategy for 2026',
    description: 'Plan your 2026 Black Friday email strategy with offer math, Klaviyo segments, campaign sequencing, flow checks and a post-sale retention plan.',
    label: 'Black Friday', datePublished: published, dateModified: published,
    image: '/assets/blog/black-friday-email-marketing-strategy.png',
    imageAlt: 'Black Friday strategy diagram connecting preparation, segmentation, sale campaigns and repeat purchases',
    intro: 'A strong Black Friday email marketing strategy gives each subscriber a useful reason to buy, each campaign a clear audience, and each offer a margin you can live with. Start with the customer journey, then build the sending calendar around it.',
    takeaway: 'Plan the offer and exclusions before writing emails. Black Friday is November 27, 2026; Cyber Monday is November 30. Your campaign dates can differ, but your deadlines must be explicit.',
    sections: [
      { heading: 'Define the outcome before choosing the discount', body: `Write down the commercial goal in one sentence. Are you trying to acquire first-time buyers, increase average order value, move a specific inventory group, or give existing customers a reason to reorder? A campaign trying to do all four usually becomes a generic sale announcement.

Build an offer sheet with the eligible products, audience, minimum spend, discount rules, shipping terms and expiration time. Include the time zone. Then calculate contribution per order after product cost, discount, fulfilment, payment fees and any gift. A large attributed-revenue number does not tell you whether the offer is healthy.

For an illustrative order worth $100 before discount, a 20% reduction leaves $80. If product cost is $35 and variable fulfilment and payment costs total $12, contribution is $33 before acquisition costs and overhead. Changing the headline discount changes that contribution immediately. Use your actual costs and returns assumptions before approving the campaign.`, bullets: ['Choose one primary commercial goal and one customer benefit.', 'Confirm stock, coupon exclusions and whether offers stack.', 'Assign an owner for offer changes and a person who can pause a send.'] },
      { heading: 'Build audiences that change the message', body: `Start with consent and eligibility, then add customer context. A subscriber who has never ordered needs help choosing. A repeat buyer may value early access or a relevant bundle. A recent purchaser may need reassurance and product guidance rather than another acquisition discount.

Use clicks, purchases and available site activity alongside engagement history. Opens alone can be noisy because inbox privacy features may pre-load tracking pixels. Document exactly what each segment includes and what it excludes. Check overlap before you schedule multiple campaigns.

Create one shared suppression approach for unsubscribed contacts, people who are not eligible for the channel, and customers whose current situation makes the message inappropriate. A customer waiting on an unresolved delivery issue may need service first. Segment size should be checked again near send time because a dynamic audience can change.`, table: { headers: ['Audience', 'Useful angle', 'Avoid'], rows: [['New, engaged subscribers', 'Best starting products and clear sale terms', 'Assuming they know the range'], ['Repeat buyers or VIPs', 'Early access, relevant bundles, replenishment', 'The same introduction every send'], ['Recent purchasers', 'Useful onboarding and complementary products', 'An immediate repeat of the first-order offer']] } },
      { heading: 'Give the sequence a beginning, middle and real ending', body: `Use October to confirm the plan, test creative and check subscriber quality. In early November, help people choose through product education, wishlists or gift guides. Introduce early access only when there is a genuine access advantage. During the sale, make the offer easy to understand on a phone.

Think in campaign jobs rather than a required number of emails: announce access, launch the offer, answer a buying objection, surface relevant products, and explain the actual deadline. A small store with limited audience data may need fewer messages than a large brand with distinct buyer groups.

Frequency should follow the audience response and the purpose of the next send. Review complaints, unsubscribes and clicks before increasing volume. Avoid sending the same creative repeatedly with a slightly louder subject line. Once someone buys, decide whether the next sale reminder still helps them.`, source: { title: 'Klaviyo: when to send Black Friday emails', url: 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails', note: 'Klaviyo’s current seasonal guide supports early preparation and coordinating campaign timing with automated messages. The sequence here is RevUp Media’s planning framework, rather than a universal sending schedule.' } },
      { heading: 'Make your automated flows agree with the sale', body: `Review welcome, checkout abandonment, browse abandonment and post-purchase messages together. A welcome email offering 10% off can undermine a public 25% sale if it fails to explain which benefit applies. An abandoned checkout email can mention a code that has already expired. A post-purchase cross-sell can push an item that just sold out.

Record every temporary change in a rollback sheet. Include the normal message, seasonal replacement, live date and restoration date. Preview messages with realistic customer profiles and a mix of sale and excluded items. Test coupons in the actual cart instead of relying on the editor preview.

Check customer exits as carefully as customer entry. Checkout reminders should stop after a qualifying purchase. A first-order incentive should not continue as though a converted subscriber is still a prospect. Coordinate SMS independently according to the customer’s consent and the relevance of the message.`, bullets: ['Preview new subscribers, existing customers and recent purchasers.', 'Test dynamic product blocks, destination URLs and discount application.', 'Restore standard content and timing when the sale ends.'] },
      { heading: 'Build emails for a fast decision on mobile', body: `Put the benefit, products and primary action near the beginning. Explain whether the discount is automatic or requires a code, what is excluded, and when the offer ends. Important terms should be readable text, not tiny writing embedded in a graphic.

Use imagery to help people understand the product: a clear scale reference, a useful detail, or a simple bundle comparison. Give images descriptive alternative text and keep the email understandable when images do not load. Link the main button to the relevant collection or product rather than a homepage that requires another search.

Before scheduling, compare the email against its landing page. A mismatch in price, stock or offer terms creates friction precisely when the shopper is ready. Send a test to a phone, check the cart, and ask someone outside the build process to explain the offer back to you.` },
      { heading: 'Measure the sale and the customers it creates', body: `Track delivered messages, clicks, orders, attributed revenue per recipient, unsubscribes and complaints for each send. Compare like audiences with like audiences. Your final deadline campaign and your early-access campaign answer different questions, so they should not be judged only by the same headline total.

Reconcile email attribution with store sales and margins. Platform-attributed revenue is a reporting model, not a direct measurement of revenue that would disappear without email. For a stronger incrementality estimate, consider a carefully designed holdout when audience size makes it feasible.

Plan the first useful message after the sale before the sale starts. Explain delivery expectations, help customers use their purchase, then introduce a sensible second product when the timing fits. Review the Black Friday acquisition cohort after enough time has passed for your typical repeat-purchase cycle. A healthier second order is part of the strategy, not an optional December task.` },
    ],
    faqs: [
      { question: 'When should an ecommerce store start Black Friday email planning?', answer: 'Begin several weeks before the sale so you can test offers, verify tracking, review flows and prepare creative. On October 1, 2026, there is still time for a structured preparation cycle before November 27.' },
      { question: 'How many Black Friday emails should I send?', answer: 'There is no universal count. Map each message to a distinct job, review audience overlap and monitor subscriber response. Add a send only when it provides useful new information to an eligible audience.' },
      { question: 'Should I email my entire list on Black Friday?', answer: 'Use consent, eligibility and recent behaviour to define recipients. Do not reactivate a long-dormant audience simply because it is a major sale. Broad eligibility still needs deliberate exclusions.' },
    ],
    related: ['black-friday-email-calendar', 'black-friday-klaviyo-segments', 'klaviyo-deliverability-checklist'],
    service: { title: 'Explore ecommerce campaign management', href: '/services/email-campaign-management' },
  },
  {
    slug: 'black-friday-email-calendar',
    title: 'Black Friday email calendar for 2026: what to send from October through Cyber Monday',
    seoTitle: 'Black Friday Email Calendar 2026',
    description: 'Build a Black Friday 2026 email calendar with preparation tasks, early-access campaigns, sale reminders, Cyber Monday and post-sale follow-up.',
    label: 'Black Friday', datePublished: published, dateModified: published,
    image: '/assets/blog/black-friday-email-calendar.png',
    imageAlt: '2026 Black Friday email calendar with preparation in October, early access, November 27 launch and November 30 Cyber Monday',
    intro: 'A useful Black Friday email calendar tells your team why each message exists, who receives it, and what must be ready before it sends. The following schedule is a planning template you can adapt to your actual sale dates and customer behaviour.',
    takeaway: 'Black Friday falls on November 27, 2026, and Cyber Monday on November 30. Mark the exact opening and closing times of your own promotion, including the time zone.',
    sections: [
      { heading: 'Start with the offer calendar, then the email calendar', body: `Your promotion may open before Black Friday or end before Cyber Monday. Put those decisions on the calendar first. Record product eligibility, stock allocation, discount rules and fulfilment commitments next to each promotional period. Email production is much easier when the offer is no longer moving.

For every proposed send, write the audience, primary benefit, landing page, exclusion rules, approval owner and intended decision. “Black Friday reminder” is too vague. “Help engaged first-time shoppers choose one of three entry products before the public offer closes” is useful direction for copy and design.

Separate a customer’s automated messages from the campaign calendar. A subscriber can receive a welcome message, a checkout reminder and a scheduled promotion on the same day. Your team needs to see that combined experience before agreeing to another broadcast.` },
      { heading: 'October: make the system ready for extra attention', body: `Use the first half of October for a focused audit. Confirm store events, sender setup, signup routing and purchase exits. Review last year’s campaigns if you have comparable data, but account for changes in price, inventory and acquisition mix. If this is your first Black Friday, treat early decisions as hypotheses rather than proven rules.

In the second half, test one meaningful creative or offer question at a time. You could compare a bundle explanation against an individual-product explanation for the same eligible audience. Keep the landing experience consistent with each version, and define success before you send.

Collect early-access interest with a clear promise. Do not make people subscribe to a vague “VIP” list if everyone will receive the same offer at the same moment. Route signup sources correctly and let the welcome message explain what happens next.`, table: { headers: ['Period', 'Work to complete', 'Exit condition'], rows: [['October 1–11', 'Audit flows, tracking, eligibility and offers', 'Critical errors assigned and corrected'], ['October 12–25', 'Test creative, capture interest, draft campaigns', 'Offer and audience decisions documented'], ['October 26–November 8', 'Build, approve and preview the core sequence', 'Links, codes and customer paths verified']] } },
      { heading: 'Early November: help people choose before asking them to rush', body: `Education, product comparison and gift guidance can reduce uncertainty ahead of the sale. Choose one question customers already ask: Which size should I buy? Which bundle is the best starting point? What is suitable for a first-time user? Answer it with clear products and practical details.

Do not assume every subscriber shops for gifts. If you can reliably distinguish self-purchase from gifting interest, use different examples. Otherwise, give customers an easy way to choose the relevant collection. Avoid adding several preference questions simply to enrich a database.

When you tease the sale, be precise about what is confirmed. Explain the opening date and what early-access subscribers will receive. Avoid promising the “lowest price ever” unless you have the evidence and operational approval to support it. A useful teaser creates a reason to return without making claims you may need to retract.` },
      { heading: 'Sale week: use a sequence with distinct jobs', body: `Build the week around the actual customer decisions. Early access rewards an eligible group. Launch explains the full offer. A product-led follow-up helps people choose. A deadline reminder explains a real ending. Cyber Monday needs its own customer reason, even if the commercial terms are similar.

Treat the following dates as a worksheet, not a requirement to send every row. Adjust sending times using your audience history and recipient time zones where appropriate. A deadline tied to one store time zone must be stated consistently, even if messages arrive at different local times.

Review overlapping campaigns before scheduling. If you send one message to VIPs and another to all engaged subscribers, decide whether VIPs should receive both. If a customer purchases, determine which subsequent messages remain relevant rather than automatically removing them from every sale-related communication.`, table: { headers: ['Date', 'Possible campaign job', 'Main audience decision'], rows: [['November 23–26', 'Genuine early access or final preparation', 'Is this useful to me before the public sale?'], ['November 27', 'Black Friday launch', 'What is the offer and what should I buy?'], ['November 28–29', 'Product guidance or objection resolution', 'Which option fits my need?'], ['November 30', 'Cyber Monday and a true closing reminder', 'Does this offer close at the stated time?'], ['December 1 onward', 'Delivery guidance and product onboarding', 'What happens after my order?']] }, source: { title: 'Klaviyo’s Black Friday sending guide', url: 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails', note: 'The seasonal guide discusses staged preparation and send timing. The dated worksheet above is an original planning example; it is not a forecast of the best-performing send times for your store.' } },
      { heading: 'Leave operating space between approval and sending', body: `Build a short release checklist into the calendar. Confirm the exact price and code, preview dynamic products, test every destination, check recent-purchaser handling and send a mobile test. The person approving the creative should see the landing page too.

Create contingency copy for stock changes or a paused product. Decide who can update a collection, stop a queued campaign or answer customer questions. If fulfilment capacity changes, revise the message before continuing to promote a delivery promise the operations team cannot support.

Keep a record of what actually sent, not only what was planned. Add final recipient count, exclusions, send time and any last-minute changes. That record makes the performance review useful and prevents next year’s planning from relying on incomplete memory.` },
      { heading: 'Put the review and flow restoration on the calendar', body: `Reserve time to restore evergreen flow content, standard timing and signup offers after the promotion. Check scheduled reminders for stale deadlines and verify that expired codes cannot accidentally appear in a new subscriber’s experience.

Review results in stages. First identify delivery, link or stock problems. Then compare message performance using consistent definitions and attribution settings. Later, review repeat orders from the Black Friday cohort, allowing enough time for your product’s buying cycle.

Document what you will keep, change and stop. A calendar becomes an operating asset when it captures decisions and evidence, not when it merely gets fuller each year. If a product guide generated meaningful buying activity with fewer complaints than another reminder, that is a useful lesson for the next seasonal event.` },
    ],
    faqs: [
      { question: 'What day is Black Friday in 2026?', answer: 'Black Friday is Friday, November 27, 2026. Cyber Monday is Monday, November 30, 2026. Your store can choose its own promotional window.' },
      { question: 'Should I schedule all Black Friday campaigns in advance?', answer: 'Prepare and approve the core sequence early, but preserve the ability to pause or adjust messages if stock, fulfilment or audience response changes.' },
    ],
    related: ['black-friday-email-marketing-strategy', 'black-friday-email-subject-lines', 'post-purchase-email-flow'],
    service: { title: 'Plan your campaigns with RevUp Media', href: '/services/email-campaign-management' },
  },
  {
    slug: 'black-friday-klaviyo-segments',
    title: '7 Klaviyo segments to plan before Black Friday, with message ideas and exclusions',
    seoTitle: '7 Klaviyo Segments for Black Friday',
    description: 'Plan seven useful Black Friday Klaviyo segments around purchase history, engagement, product interest and recent buyers, with practical exclusions.',
    label: 'Klaviyo segmentation', datePublished: published, dateModified: published,
    image: '/assets/blog/black-friday-klaviyo-segments.png',
    imageAlt: 'Audience segmentation diagram separating new subscribers, loyal buyers, product-interest shoppers and recent purchasers',
    intro: 'The best reason to create a Klaviyo segment is that it changes what a customer receives. These seven Black Friday audiences help ecommerce teams make that connection without building dozens of lists that all get the same sale email.',
    takeaway: 'Every audience below starts with channel eligibility. The lookback windows and spend thresholds are examples to adapt, not universal Klaviyo settings or guaranteed winners.',
    sections: [
      { heading: 'Set a common eligibility base before adding conditions', body: `Begin with customers who are eligible to receive marketing on the selected channel. Exclude suppressed profiles and honour consent and customer preferences. Then layer behaviour and purchase context on top. An email address appearing in your account is not, by itself, a reason to send a campaign.

For engagement, use reliable clicks, purchase activity and available site events alongside opens. Decide the lookback window based on your normal sending frequency and purchase cycle. A brand that sends weekly needs a different interpretation of “quiet” from a store that sends once a month.

Document your logic in plain language before building it. Pay attention to AND and OR groups: an OR condition placed outside the eligibility group can unintentionally admit an audience you meant to exclude. Preview members and inspect a few representative profiles before using a new segment.` },
      { heading: '1–2. New prospects and first-time customers', body: `An engaged prospect has shown interest but has not bought. Use product guidance, a clear entry point and trustworthy buying information. The campaign should answer why this product is appropriate, not simply repeat the discount. One possible definition is eligible subscribers with zero orders and a recent click or tracked product interaction.

A first-time customer needs a different message. They already understand something about the product but may not have received or used it yet. Consider a relevant accessory, a guide or the benefits of a complementary range. Define recent first-time purchasers separately from older one-time buyers so you do not rush the same message to both.

For both groups, check the collision with automated flows. A prospect in a welcome sequence may receive similar content elsewhere. A new customer should stop receiving prospect-only acquisition messaging. Use exclusions or content changes deliberately rather than assuming campaign and flow eligibility always match.`, bullets: ['Prospects: show a best starting product, useful proof and exact sale terms.', 'First-time customers: build confidence and introduce a relevant next step.', 'Exclude purchases after the audience decision when the offer is explicitly prospect-only.'] },
      { heading: '3–4. Loyal buyers and customers with category interest', body: `Define loyal buyers using a measure you can explain: repeat orders, spend above a store-specific threshold, or a loyalty status your integration reliably supplies. Do not copy another brand’s VIP threshold without checking your own distribution. The benefit might be early access, an exclusive product, or a useful bundle rather than a larger discount.

Category-interest shoppers need evidence of interest that affects the offer. That could be a purchase in the category or recent browsing events where tracking is available. Avoid treating one accidental visit as a permanent preference. A recent skincare purchase, for example, can support a relevant routine message, while a broad bestsellers campaign may be less useful.

If someone qualifies for both VIP and category-interest audiences, decide which message wins. You can combine the context in one message or exclude the VIP segment from a category broadcast. The objective is a coherent experience, not more sends per qualified profile.`, table: { headers: ['Segment', 'Example evidence', 'Message difference'], rows: [['Loyal buyers', 'Repeat orders or verified loyalty status', 'Meaningful access or relevant member benefits'], ['Category interest', 'Category purchase or recent tracked interest', 'Specific product guidance and collection link']] } },
      { heading: '5–6. High-intent shoppers and lapsed customers', body: `High-intent shoppers may have recently clicked a product email, added a product to cart or started checkout. Confirm which events your integration actually records. These signals are not interchangeable. A checkout-start event indicates a different stage from a collection-page visit.

This group is especially likely to overlap with abandonment flows. Review timing and purchase exits before layering a campaign on top. A useful broadcast might clarify shipping or product suitability, while the flow reminds the customer of their own cart. Identical reminders from both systems create unnecessary repetition.

Lapsed customers should be defined relative to a realistic repurchase cycle. Someone who bought a durable product three months ago may not be lapsed at all. If an old buyer is still eligible and has shown recent interest, a relevant product update may help. Do not use Black Friday to blast every long-inactive profile with an aggressive discount.`, source: { title: 'Klaviyo Academy: BFCM segmentation strategies', url: 'https://academy.klaviyo.com/en-us/quick-guides/use-winning-segmentation-strategies-for-bfcm', note: 'Klaviyo’s seasonal training supports using behavioural context to shape messages. The seven audiences and prioritisation process here are a practical planning framework rather than preconfigured platform segments.' } },
      { heading: '7. Recent purchasers: a segment for protecting the experience', body: `A recent-purchaser audience is useful even when you are not planning to send it another promotion. It can help you suppress an irrelevant final-hours reminder, explain a customer service policy, or provide onboarding. Use the order window that fits the offer and your fulfilment reality.

Do not automatically promise price adjustments or additional discounts. If your brand has an approved policy for purchases just before the sale, explain it accurately and link to the correct terms. If there is no such policy, offer support rather than inventing one in the email.

Separate customers who bought during the current sale from those who purchased shortly before it when that distinction changes the next message. During-sale buyers may need delivery guidance; earlier buyers may still have a sensible reason to shop for a different product. The message should reflect that context.` },
      { heading: 'Test segment value without losing the comparison', body: `Assign each segment a distinct hypothesis. For example: “A category-specific product guide will improve orders per recipient among recent category buyers compared with a general sale creative.” Keep the offer, send conditions and measurement window comparable if those are not the variables you are testing.

Track audience size, delivered count, clicks, placed-order activity, attributed revenue per recipient and negative feedback. Small segments can swing sharply from one or two orders, so avoid declaring a winner from an unstable result. If groups overlap, a raw side-by-side report may not describe a clean test.

After the sale, retain only segments that keep helping the customer or the team. Delete neither data nor history simply to make the workspace look tidy; retire unused campaign audiences through your normal account process. Your everyday segmentation strategy should be understandable to the next person who runs the channel.` },
    ],
    faqs: [
      { question: 'Should Black Friday segments use a 30-, 60- or 90-day engagement window?', answer: 'Use a window suited to your usual cadence and buying cycle. Check size and representative profiles, then validate performance. There is no single window that suits every store.' },
      { question: 'Are lists and segments the same in Klaviyo?', answer: 'A list is a collection of profiles; a segment is defined by conditions and updates as profiles meet or stop meeting them. Use the appropriate structure for subscriber collection versus behaviour-based targeting.' },
    ],
    related: ['black-friday-email-marketing-strategy', 'klaviyo-abandoned-cart-flow', 'ecommerce-email-segmentation'],
    service: { title: 'Explore Klaviyo email marketing services', href: '/services/klaviyo-email-marketing' },
  },
  {
    slug: 'black-friday-email-subject-lines',
    title: '40 Black Friday email subject lines, with a testing plan that goes beyond opens',
    seoTitle: '40 Black Friday Email Subject Lines to Test',
    description: 'Get 40 original Black Friday subject line ideas for early access, launch, product guidance and deadlines, plus a practical ecommerce testing plan.',
    label: 'Email copy and testing', datePublished: published, dateModified: published,
    image: '/assets/blog/black-friday-email-subject-lines.png',
    imageAlt: 'Subject line testing diagram comparing a clear offer with a product-led message and evaluating clicks and orders',
    intro: 'A Black Friday subject line should help the right subscriber recognise a useful message. The examples below are original starting points, not a list of proven winners. Adapt every claim to your actual offer, inventory and deadline.',
    takeaway: 'Test a meaningful difference in promise, not just punctuation. Evaluate clicks and buying activity alongside opens, and keep the subject line consistent with the email and landing page.',
    sections: [
      { heading: 'Use subject lines as a promise the email can keep', body: `A subject line earns attention by naming something useful: a product, an offer, an access advantage or a genuine deadline. If the email does not fulfil that promise quickly, the extra open is unlikely to become a good customer experience.

Lead with the information the reader needs. Mobile inboxes can truncate long lines, so do not put the only important detail at the end. A shorter line can help, but there is no magic character count that makes an offer compelling. Check the actual inbox preview on a phone.

Use the preview text to add context rather than repeat the same sentence. A subject that mentions the offer can pair with a preview explaining eligibility, a featured product or the end time. Keep sender identity recognisable. Fake reply prefixes, invented order notifications and unsupported exclusivity can create distrust.` },
      { heading: '10 early-access subject lines', body: `Use these only when subscribers receive a real benefit before public access. If the sale is already open to everyone, call it a sale announcement rather than early access.

Personalise the product reference only when you have reliable information. A general subscriber should not receive “your favourites” simply because they viewed one item months ago. Explain the exact access window in the body and make the destination available when the message arrives.`, bullets: ['Your Black Friday first look is here', 'A little head start on Black Friday', 'Early access starts now', 'Shop the sale before the public launch', 'Your early-access window is open', 'First access to our Black Friday bundles', 'The Black Friday edit, before everyone else', 'A thank-you before the sale opens', 'Your member preview is ready', 'Black Friday starts early for this list'] },
      { heading: '10 launch and offer subject lines', body: `These lines work as structures for a confirmed commercial message. Replace generic terms with your actual range where that makes the benefit clearer. If the discount applies to selected products, do not imply it is sitewide.

For a percentage or spend-based offer, add the real value only after checking the terms. The subject, preview and hero should tell the same story. If the coupon must be entered manually, make it easy to find without forcing the shopper to read a long promotional introduction.`, bullets: ['Black Friday is live: find your next favourite', 'The sale is open. Start with the essentials.', 'Our Black Friday bundles are here', 'A better moment to build your routine', 'Your Black Friday shopping shortcut', 'The products you wanted, in our sale', 'The weekend offer starts here', 'Black Friday: clear offers, useful picks', 'Build your bundle for Black Friday', 'Your guide to our Black Friday sale'] },
      { heading: '10 product-led and objection-solving subject lines', body: `Not every sale email needs to lead with price. Product guidance can be more useful for someone who is interested but unsure which option to choose. Match the line to a specific explanation in the email: fit, setup, compatibility, gifting or bundle contents.

Do not label products bestsellers unless your sales data supports it. Avoid claims about guaranteed delivery, universal suitability or product outcomes without evidence. A good product-led subject helps the shopper make a decision you can actually support.`, bullets: ['Not sure where to start? Try this edit.', 'Three ways to choose your Black Friday bundle', 'The gift guide for your kind of shopper', 'A closer look at what is inside the bundle', 'Find the right fit before you check out', 'One product question, answered', 'Small upgrades worth considering this weekend', 'Compare your options before the sale ends', 'The essentials, explained in one email', 'Buying your first one? Start here.'] },
      { heading: '10 real-deadline and Cyber Monday subject lines', body: `Urgency is useful when it tells customers something true. State the actual end time in the email and landing page, including the time zone. If the promotion is extended later for a legitimate reason, explain the change instead of pretending the earlier deadline never existed.

Distinguish a sale deadline from a shipping cutoff. The sale can end Monday while a delivery promise ends earlier. Do not merge those two events into “last chance” unless the email clearly explains what the customer is about to lose.`, bullets: ['Black Friday ends tonight', 'Your final look before the offer closes', 'A quick reminder: the sale closes today', 'Last day for this Black Friday bundle', 'Before the weekend offer ends', 'Cyber Monday is here: explore the edit', 'A fresh pick for Cyber Monday', 'One more look at the sale collection', 'The Cyber Monday offer closes tonight', 'The final hours, with the details inside'] },
      { heading: 'Design a test that can answer a real question', body: `Choose a hypothesis such as “Naming the product will attract more qualified clicks than naming the sale.” Send comparable versions to comparable audiences. Keep the main offer and creative consistent if the subject is the variable. Do not change subject, discount and product order together and then attribute the result to the subject line.

Define your primary metric and minimum observation period before launch. Opens can be affected by privacy features, and a high open rate does not prove the subject attracted buyers. Clicks, orders per recipient and attributed revenue per recipient can add useful context, while complaints and unsubscribes reveal cost to the audience.

Small samples and short deadline windows make confident conclusions harder. Record sample size, timing, measurement window and limitations. If the data is inconclusive, keep the clearer message and test again under better conditions rather than labelling a minor difference a breakthrough.`, table: { headers: ['Test', 'Version A', 'Version B'], rows: [['Offer clarity versus product interest', 'Black Friday bundles are live', 'Find your next everyday essential'], ['Access framing', 'Early access starts now', 'Your member preview is ready'], ['Deadline versus guidance', 'The sale closes tonight', 'Compare your options before the sale ends']] } },
    ],
    faqs: [
      { question: 'Which Black Friday subject line has the highest open rate?', answer: 'There is no reliable universal winner. Audience, sender reputation, offer, timing and inbox behaviour all affect results. Treat these examples as hypotheses and measure your own sends.' },
      { question: 'Should I use emojis in Black Friday subject lines?', answer: 'Use an emoji only if it fits the brand and remains clear in the inbox. Test it against a comparable version if the audience is large enough to support a useful comparison.' },
    ],
    related: ['black-friday-email-calendar', 'ecommerce-email-marketing-metrics', 'black-friday-email-marketing-strategy'],
    service: { title: 'See RevUp Media’s email campaign work', href: '/services/email-campaign-management' },
  },
  {
    slug: 'klaviyo-flows-for-shopify',
    title: 'Klaviyo flows for Shopify: which automations to build first and how to check them',
    seoTitle: 'Klaviyo Flows for Shopify: A Practical Setup Guide',
    description: 'Prioritise Shopify Klaviyo flows, understand triggers and customer exits, and test welcome, abandonment, post-purchase and winback journeys.',
    label: 'Shopify automation', datePublished: published, dateModified: published,
    image: '/assets/blog/klaviyo-flows-for-shopify.png',
    imageAlt: 'Shopify lifecycle map connecting signup, checkout, purchase, product use and repeat order to Klaviyo flows',
    intro: 'Klaviyo flows for Shopify should cover the customer moments that matter before they cover every possible automation. A smaller set of accurate, well-timed journeys is easier to manage and usually more useful than a large library of conflicting messages.',
    takeaway: 'Verify event sync and customer exits first. A flow is ready when it sends the right content to a qualified customer and stops when the message no longer applies.',
    sections: [
      { heading: 'Confirm the integration before designing a flow', body: `Check that the correct Shopify store is connected and that the events you plan to use appear in Klaviyo. Inspect a few real profiles and event timestamps. A visually complete flow cannot work correctly if the underlying purchase or checkout event is missing or delayed.

Inventory existing messages in Shopify, Klaviyo and any other apps. Note which tool sends order confirmations, shipping updates, cart reminders and subscription messages. Duplicate automations can make the brand seem disorganised, and they can be difficult to diagnose from one account alone.

Review signup routing too. A form should add a qualified subscriber to the intended audience and deliver the promised benefit. Test that path with a new profile. Avoid assuming that a form submission, a profile creation and an email subscription always mean the same thing.`, bullets: ['Verify the store, metric names and event timestamps.', 'Record overlapping Shopify and third-party messages.', 'Check consent, suppression and signup-list routing before sending.'] },
      { heading: 'Build the first four around clear customer decisions', body: `Start by considering welcome, checkout abandonment, post-purchase and winback. Klaviyo identifies these as useful first flows, but your actual priority depends on store volume and the gaps already present. A store with a functioning welcome journey and poor product onboarding may need post-purchase work first.

Define the purpose of each journey in ordinary language. Welcome helps a new subscriber understand and choose. Checkout recovery helps someone finish an interrupted purchase. Post-purchase helps a buyer get value. Winback gives a genuinely overdue customer a relevant reason to return.

For each one, agree on the entry event, eligibility, first message, delays and stop condition. That one-page plan prevents a common problem: starting with a design template and adding timing rules only after the content is finished.`, table: { headers: ['Flow', 'Common starting trigger', 'Critical check'], rows: [['Welcome', 'Addition to the chosen subscriber list', 'Signup promise and customer status'], ['Checkout abandonment', 'Started Checkout event', 'Exit after a qualifying order'], ['Post-purchase', 'Placed Order or a relevant fulfilment event', 'Content timing relative to delivery'], ['Winback', 'Purchase event followed by a buying-cycle delay', 'No newer qualifying purchase']] }, source: { title: 'Klaviyo: getting started with flows', url: 'https://help.klaviyo.com/hc/en-us/articles/115002774932', note: 'Klaviyo’s setup guide explains trigger types, profile filters and message status, and identifies welcome, abandoned cart, post-purchase and winback as initial priorities. The planning and QA method here expands on those mechanics for store operations.' } },
      { heading: 'Add browse abandonment only when the data and message justify it', body: `Browse abandonment responds to product interest earlier in the journey than checkout recovery. It can help customers remember an item or understand it better, but it should not imply they had a checkout in progress when they did not.

Confirm that available tracking identifies eligible visitors and sends the product information your template needs. Review the conditions under which a profile is known, and test the experience in the context of your store’s consent setup. Do not expect every anonymous visitor to receive a follow-up email.

Prevent browse messages from colliding with stronger intent. If someone later starts checkout or buys, an earlier product reminder may no longer be the right message. Use the appropriate filters and inspect representative profiles. Keep the content focused on the viewed product rather than turning it into a broad promotion.` },
      { heading: 'Treat timing as a customer question, not a copied number', body: `The right delay depends on the product, the event and the next decision. A subscriber waiting for a promised code needs a prompt response. A customer buying a product with a long delivery time may need education later. A replenishment reminder belongs near expected consumption, not on an arbitrary day after order placement.

Use library defaults as a starting point, then compare them with event sync and customer behaviour. Document why each delay exists. If you shorten delays for a seasonal sale, record the restoration date and check whether the change creates extra collisions with campaigns.

Review frequency controls deliberately. A frequency rule may skip a useful flow message after a recent campaign, while turning it off everywhere can overwhelm a subscriber. Preview the combined customer journey and decide where urgency or service relevance actually justifies an exception.` },
      { heading: 'Preview the branches that are easiest to forget', body: `Test new subscribers, returning customers, purchasers after entry, sale products and products with missing data. A dynamic block can render perfectly for one example and fail for a different cart. Check fallback text for missing names and optional profile properties.

Verify that every important link goes where its label suggests. Test discount eligibility in Shopify and confirm any minimum spend or exclusions. Use the actual mobile experience, including the product page and cart, instead of approving only the email editor screenshot.

Before enabling a message, inspect its status and the status of surrounding steps. Use draft or review modes for controlled verification where appropriate. Know who owns the live flow and how to stop a problematic message if a product, integration or offer changes.`, bullets: ['Place a test order after entering recovery and verify subsequent exclusion.', 'Preview empty and mixed-product data where your templates support it.', 'Test links, codes, fallback text and mobile readability.', 'Record the flow owner, objective and last meaningful review date.'] },
      { heading: 'Improve one journey with evidence before adding another', body: `Review entry counts, skipped recipients, delivered messages, clicks and orders together. A high skip count can mean the flow is correctly excluding people who purchased; it can also reveal a mistake. Read the skip reason before treating it as a failure.

Compare performance over similar periods and with consistent attribution settings. If a message generates clicks but few purchases, inspect product fit and landing-page friction. If a later step rarely reaches qualified people, reconsider its timing or purpose rather than immediately redesigning it.

Keep a change log. Record the trigger or content change, the hypothesis and the review window. Build the next flow when there is a real customer gap and enough operational capacity to maintain it. Automation should reduce confusion for both the customer and the team.` },
    ],
    faqs: [
      { question: 'How many Klaviyo flows does a Shopify store need?', answer: 'There is no fixed number. Cover meaningful lifecycle gaps with journeys you can test and maintain. Welcome, checkout recovery, post-purchase and winback are common starting points.' },
      { question: 'Do Klaviyo flows replace Shopify transactional notifications?', answer: 'Not automatically. Inventory what Shopify and other apps already send, then assign ownership deliberately. Marketing journeys and essential order notifications serve different purposes.' },
    ],
    related: ['klaviyo-welcome-flow', 'klaviyo-abandoned-cart-flow', 'post-purchase-email-flow'],
    service: { title: 'Explore Shopify email marketing support', href: '/services/shopify-email-marketing' },
  },
  {
    slug: 'klaviyo-welcome-flow',
    title: 'Klaviyo welcome flow: how to turn a signup promise into a useful first-purchase journey',
    seoTitle: 'Klaviyo Welcome Flow: Strategy and Setup Checklist',
    description: 'Build a Klaviyo welcome flow with clear signup routing, offer delivery, product guidance, customer splits and a practical mobile QA checklist.',
    label: 'Welcome automation', datePublished: published, dateModified: published,
    image: '/assets/blog/klaviyo-welcome-flow.png',
    imageAlt: 'Welcome flow diagram from signup promise to offer delivery, product selection, questions and first purchase',
    intro: 'A Klaviyo welcome flow begins before the first email. The signup form creates an expectation, and the sequence should fulfil it while helping a new subscriber decide whether the brand and product fit their needs.',
    takeaway: 'Deliver the promised benefit promptly, then reduce buying uncertainty. A welcome journey needs a clear customer exit and offer rules as much as it needs good design.',
    sections: [
      { heading: 'Write down the exact promise made by your signup form', body: `List what the visitor saw: discount, early access, product guide, launch updates or another benefit. Record eligibility and any stated deadline. The first email should deliver that value clearly rather than bury it below a long founder story.

If the form promises a first-order discount, explain excluded products, minimum spend and whether the code can combine with other offers. If it promises a guide, provide the actual guide. If it collects early-access interest, explain when access opens and how the subscriber will hear about it.

Different signup sources can create different expectations. A sale form and an evergreen footer form may not need identical first-message framing. Use source data only when it is reliable and affects the experience; do not build elaborate branches around information you cannot consistently collect.` },
      { heading: 'Choose the entry list and verify the new-subscriber path', body: `A common Klaviyo email welcome series starts when someone is added to the chosen subscriber list. Ensure your forms route to the intended list and that the opt-in experience works as expected. A profile imported from elsewhere may not represent the same customer intent as a fresh storefront signup.

Test with a genuinely new email profile, including the confirmation path if your list uses double opt-in. Record how long it takes to receive the benefit. Then test an existing subscriber so you understand what happens when they submit the form again.

Keep email and SMS subscription experiences clear. A subscriber can be eligible for one channel and not the other. Avoid assuming an email signup authorises text messages or that one channel’s welcome journey should silently deliver the other channel’s promise.`, source: { title: 'Klaviyo: creating an email welcome series', url: 'https://help.klaviyo.com/hc/en-us/articles/115002775172', note: 'Klaviyo documents the subscriber-list trigger and immediate first-message option. Verify your own form routing and opt-in behaviour before enabling the sequence.' } },
      { heading: 'Give each message one useful buying question', body: `Plan the content around decisions rather than a predetermined email count. The first message delivers the benefit and explains what to do next. Another can help the subscriber choose a starting product. Later content can explain suitability, care, fit or another common objection.

Use credible evidence where it reduces uncertainty. A review should be genuine, relevant to the featured product and used with the appropriate permission. If you do not have a supported customer result, explain the product instead of inventing a claim. Brand story is useful when it clarifies why the product exists or how it is made.

A founder note can add a human voice, but it should still help the reader. Keep it concrete: what problem the founder noticed, what choice the brand made and where a new buyer can start. Avoid a long biography that delays the subscriber’s actual decision.`, table: { headers: ['Message job', 'What the subscriber learns', 'Primary next step'], rows: [['Deliver the promise', 'The benefit and exact terms', 'Use the benefit or access the resource'], ['Help choose', 'The best starting options for their need', 'Visit the relevant product or collection'], ['Resolve uncertainty', 'Fit, use, quality or delivery information', 'Make an informed buying decision'], ['Explain a real deadline', 'When a genuine benefit expires', 'Act before the actual expiry']] } },
      { heading: 'Change the journey when the subscriber becomes a customer', body: `Decide which messages should stop after the first purchase and which remain useful. A first-order reminder should not continue as though the customer has never bought. A product-care message may still be relevant, but it might belong in post-purchase instead.

Use purchase data to support a split or an exit where appropriate. Preview both paths. If a returning customer can subscribe through your form, ensure they do not receive an ineligible first-order offer. Explain an appropriate alternative only when the brand has actually approved one.

During Black Friday, compare the welcome offer with the public promotion. Choose the message that accurately explains the customer’s options. Do not leave an evergreen sequence promising a weaker benefit without context, or an expired seasonal benefit after the sale closes.` },
      { heading: 'Choose timing around urgency and attention', body: `Deliver time-sensitive signup value promptly. Subsequent messages can be spaced according to buying consideration, product complexity and subscriber response. A long-consideration product may benefit from education before another offer, while a simple consumable may need fewer steps.

Review the combined frequency across campaigns and flows. A person who signs up during a launch can be eligible for both. Decide whether the campaign offers new information or merely repeats the welcome message. Frequency settings should support a deliberate plan rather than substitute for one.

If you test the number or timing of messages, compare more than the final email’s revenue. Watch conversions across the journey, complaints, unsubscribes and buying behaviour. A longer sequence is not automatically a better welcome experience.` },
      { heading: 'Use a release checklist and an improvement queue', body: `Preview on mobile with images enabled and disabled. Make the benefit readable as text, use a clear main button and confirm that the landing page matches. Check names, optional profile fields, unsubscribe links, offer terms and product availability.

Place a test order after entering the flow and verify the intended exit. Test the discount in the actual cart with included and excluded products. Save the date of the review and the person responsible for maintaining the offer.

After launch, inspect entry, skip and delivery activity before redesigning anything. If qualified signups are missing, investigate routing. If customers click but do not order, inspect product choice and landing-page friction. If unsubscribes increase later in the sequence, evaluate whether those messages still provide a distinct benefit.`, bullets: ['New signup receives the promised value.', 'Existing customers see appropriate terms and content.', 'Purchase behaviour updates the journey correctly.', 'Links, codes and mobile layouts work together.'] },
    ],
    faqs: [
      { question: 'How many emails should a Klaviyo welcome flow include?', answer: 'Use the number needed to deliver the signup promise and answer meaningful buying questions. Begin with a manageable sequence, then add a step only when it has a distinct purpose and evidence supports it.' },
      { question: 'Should every welcome flow offer a discount?', answer: 'No. Early access, guidance or product relevance can be the benefit. If a discount is promised at signup, deliver it accurately and explain the conditions.' },
    ],
    related: ['klaviyo-popup-list-growth', 'klaviyo-flows-for-shopify', 'black-friday-email-marketing-strategy'],
    service: { title: 'Explore lifecycle flow planning', href: '/services/email-automation-flows' },
  },
  {
    slug: 'klaviyo-abandoned-cart-flow',
    title: 'Klaviyo abandoned cart flow: triggers, timing and the checks that prevent wrong sends',
    seoTitle: 'Klaviyo Abandoned Cart Flow: Setup and QA Guide',
    description: 'Understand cart versus checkout events, plan Klaviyo recovery emails, choose timing and verify purchase exits, dynamic products and offer rules.',
    label: 'Cart recovery', datePublished: published, dateModified: published,
    image: '/assets/blog/klaviyo-abandoned-cart-flow.png',
    imageAlt: 'Checkout recovery diagram with an event, delay, purchase check and reminder, showing purchasers exiting before another email',
    intro: 'An abandoned cart flow should help a qualified shopper resume an interrupted decision. It becomes frustrating when it reminds someone who already bought, shows the wrong products, or sends an offer that cannot be used.',
    takeaway: 'Confirm your exact event before building. Added to Cart and Started Checkout describe different customer actions, and your template, timing and exclusions must match the chosen trigger.',
    sections: [
      { heading: 'Separate cart interest from checkout intent', body: `Stores often use “abandoned cart” as a broad label, but the trigger matters. A cart event records a product being added. A checkout event records a later action. Check the metrics available through your Shopify or other ecommerce integration rather than assuming the flow name proves what starts it.

Inspect event data from representative profiles. Confirm product names, variants, quantities and any recovery URL the template needs. Check sync timing. If an integration updates less frequently, a very short flow delay may not correspond to the customer experience you imagine.

Inventory reminders already sent by Shopify or other apps. Decide which system owns recovery and how you will verify the handover. Do not disable functioning customer messages until the replacement is tested, but do not knowingly leave duplicate recovery journeys running either.` },
      { heading: 'Create a purchase exit that is checked throughout the flow', body: `The essential question before every reminder is whether the customer has already made the qualifying purchase. Klaviyo’s standard guidance uses a profile filter that requires zero Placed Order events since entering the flow. The exact metric must match the integrated store and order path.

Test this behaviour rather than only reading the filter label. Enter the flow, place an order before a later step and inspect whether the message is skipped for the expected reason. If multiple store integrations or order channels are involved, confirm that the relevant purchases reach the logic.

Also decide how frequently a customer can re-enter. Someone who repeatedly opens checkout should not automatically receive a new full sequence each time. Choose a repeat-entry rule suited to your store and inspect its effect on real eligible profiles.`, source: { title: 'Klaviyo: creating an abandoned cart flow', url: 'https://help.klaviyo.com/hc/en-us/articles/115002779411', note: 'Klaviyo documents checkout event sync, delays, dynamic products and purchase filters, including the zero-orders-since-entry filter. Match these mechanics to your integration and validate them with a test purchase.' } },
      { heading: 'Use timing as a starting hypothesis', body: `Allow time for the customer to complete the purchase normally before sending a recovery message. For an evergreen checkout flow, Klaviyo’s guide discusses a first message roughly two to four hours after checkout and a later follow-up. That is a starting range, not proof of the best timing for your store.

Review product consideration and event latency. A complex purchase may require more time. A short seasonal offer can make earlier clarity useful, but a faster send should still be supported by reliable data and a real customer benefit. Do not accelerate every step simply because the sale is busy.

Keep the initial sequence manageable. Decide whether each additional message answers a new question. Review combined campaign and flow frequency, including SMS where the person is separately eligible. Record seasonal timing changes so they can be restored afterwards.` },
      { heading: 'Build content around the actual unfinished purchase', body: `The first reminder can simply show the selected items, a clear return link and a way to ask for help. Later content can answer an objection: shipping terms, size guidance, compatibility or the returns process. Use the specific information customers ask your support team for.

Keep the product block accurate and focused. Test variants, long names, different quantities and mixed carts. A template preview with a single ideal product is not enough. If a recovery link is unavailable or expired, provide an appropriate fallback instead of sending a broken primary button.

Avoid implying inventory is reserved if it is not. Do not say an item is almost sold out without a current basis for that claim. Clear assistance often provides a better reason to return than invented urgency. A genuine sale ending can be explained precisely when it applies to the items and recipient.`, table: { headers: ['Message purpose', 'Useful content', 'Check before sending'], rows: [['Reminder', 'Selected products and return-to-checkout link', 'Correct cart data and destination'], ['Decision support', 'Fit, shipping, use or returns information', 'Accurate policy and product context'], ['Eligible incentive', 'An approved offer with exact terms', 'Margin, stacking, expiry and customer eligibility']] } },
      { heading: 'Decide whether a discount is actually needed', body: `A discount should solve a commercial problem, not be the default response to every interrupted checkout. Some shoppers were distracted, checking delivery costs or comparing options. Offering a reduction immediately can reward behaviour that did not require one.

If you test an incentive, define eligibility and evaluate the margin after it. Consider customer status, product economics and overlap with public offers. An existing sale may already provide the relevant benefit. Make terms easy to understand and avoid telling a customer to use an incompatible code.

Compare recovery performance across the whole flow and the store. Attributed orders are useful evidence, but some customers would have returned without the email. If volume supports it, a controlled holdout can help estimate the added effect. At a minimum, do not describe attributed revenue as guaranteed incremental profit.` },
      { heading: 'Diagnose the flow in the order the customer experiences it', body: `When results disappoint, check entry and data first. Are qualified checkout events appearing? Are customers skipped for a valid purchase exit? Are messages delivered? A design change cannot repair a missing event or an incorrect exclusion.

Then inspect the message and landing experience. A high click count with few orders can point toward unexpected shipping, a poor mobile cart, unavailable items or an offer mismatch. Ask support whether people are reporting a recurring checkout issue.

Keep a review sheet with the event, filters, delays, templates, destinations and last test date. After a platform, offer or checkout change, repeat the checks that could be affected. This makes cart recovery an operational system you can trust rather than an automation you hope is still working.`, bullets: ['Verify event sync and customer identity.', 'Confirm order exits and repeat-entry behaviour.', 'Preview products, recovery links and discount rules.', 'Check mobile checkout and the customer’s combined message frequency.'] },
    ],
    faqs: [
      { question: 'Why do customers receive abandoned cart emails after purchasing?', answer: 'Investigate order-event sync, the selected purchase metric and the profile filter. The flow should check qualifying purchases before later messages; a test order can show whether the intended exit works.' },
      { question: 'Should the first cart recovery email include a discount?', answer: 'Not automatically. Start by helping the customer resume and resolving uncertainty. Test an approved incentive only when eligibility and contribution margin justify it.' },
    ],
    related: ['klaviyo-flows-for-shopify', 'black-friday-klaviyo-segments', 'ecommerce-email-marketing-metrics'],
    service: { title: 'Get help with ecommerce automation flows', href: '/services/email-automation-flows' },
  },
  {
    slug: 'klaviyo-deliverability-checklist',
    title: 'Klaviyo deliverability checklist: what ecommerce stores should check before peak season',
    seoTitle: 'Klaviyo Deliverability Checklist for Ecommerce',
    description: 'Review authentication, audience quality, volume changes, unsubscribes and delivery evidence before increasing ecommerce email volume in Klaviyo.',
    label: 'Email deliverability', datePublished: published, dateModified: published,
    image: '/assets/blog/klaviyo-deliverability-checklist.png',
    imageAlt: 'Deliverability checklist covering authentication, audience quality, sending pace and inbox-provider monitoring',
    intro: 'Klaviyo deliverability work is a combination of sender setup, recipient expectations and consistent sending behaviour. Before Black Friday or another volume increase, check the foundations and the evidence of trouble before rewriting every subject line.',
    takeaway: 'Delivered means the receiving server accepted the message; it does not guarantee inbox placement. Authentication is necessary, but it cannot compensate for unwanted email or an abrupt volume spike.',
    sections: [
      { heading: 'Verify the sender setup with the person who manages DNS', body: `Confirm the sending domain, From address and authentication configuration using your provider’s current instructions. Review SPF, DKIM and DMARC rather than assuming the setup is correct because messages have sent before. Domain alignment matters as well as the existence of a record.

For bulk traffic to personal Gmail accounts, Google requires SPF, DKIM and DMARC, with a minimum DMARC policy of none, and alignment of the From domain with SPF or DKIM. Requirements also cover infrastructure and unsubscribe support. Consult the current provider guidance for the exact scope and implementation.

Have the responsible domain administrator review changes across all services that send for the brand. Do not paste a generic DNS example into production or overwrite another service’s records. Test a representative message and inspect authentication results after an approved change.`, source: { title: 'Google: email sender guidelines', url: 'https://support.google.com/mail/answer/81126?hl=en', note: 'Google’s current guidelines define authentication and other requirements for personal Gmail recipients. Use the full document and your email provider’s setup process; this article is an operational review checklist, not a replacement for those instructions.' } },
      { heading: 'Review who receives email and why they expect it', body: `Document every subscriber source: storefront forms, checkout opt-ins, events, imports and other systems. Confirm the promise and permission attached to each source. A bigger account profile count does not necessarily mean a bigger eligible audience.

Look for poor-quality acquisition patterns such as sudden signups from an unfamiliar source, invalid addresses or a cohort that generates complaints after the first message. Pause the source while investigating if the evidence warrants it. Do not buy lists or treat an old business contact spreadsheet as a seasonal marketing audience.

Define engagement with more than opens. Reliable clicks, purchases and available browsing activity can provide useful context. A quiet recipient may need fewer messages or a carefully designed re-engagement approach; they do not become more interested simply because your sale calendar needs another send.` },
      { heading: 'Increase volume gradually and with a reason', body: `Compare your proposed peak volume against your recent normal volume. A store that has sent rarely should not suddenly contact every stored profile several times a day. Plan expansion from the most engaged eligible audiences and watch receiver feedback as volume changes.

Google recommends consistent sending and gradual increases rather than abrupt bursts. A domain change, new infrastructure or a long pause can affect the plan too. Ask your provider how to handle the specific situation rather than applying a generic warm-up schedule.

Keep the operational goal concrete: reach qualified customers with useful messages while identifying deterioration early. If deferrals, bounces or complaints rise, reduce or pause affected sends and investigate the source. More volume is not a recovery strategy for deteriorating delivery.`, source: { title: 'Klaviyo: warming a sending domain', url: 'https://help.klaviyo.com/hc/en-us/articles/20413890435355', note: 'Klaviyo explains warming considerations and the use of engaged audiences. Follow the current guidance for your account history and infrastructure rather than copying a fixed daily-volume ladder.' } },
      { heading: 'Check unsubscribe behaviour and sender clarity', body: `Confirm that marketing messages provide a working, visible unsubscribe option and that suppression is respected across relevant systems. Bulk Gmail requirements include one-click unsubscribe support as well as an in-message link. These are separate checks.

Test the unsubscribe experience with an appropriate test profile. Make sure the recipient does not immediately qualify for another promotional journey because one system has not received the update. Review preference options carefully so they do not make leaving unnecessarily difficult.

Keep sender identity stable and subject lines honest. Do not disguise a promotion as an order problem or a reply. A recipient should recognise the brand and understand why they received the message. Customer expectations and technical authentication work together.` },
      { heading: 'Monitor delivery evidence by provider and acquisition source', body: `A blended campaign average can hide a problem affecting one inbox provider or one subscriber source. Review rejection and bounce information where available, along with complaints, unsubscribes and changes in click activity. Read the actual error information instead of treating every bounce as the same event.

Where eligible and available, use Google Postmaster Tools to review domain and spam information for Gmail traffic. Missing or limited dashboard data is not proof that delivery is healthy. Use the evidence your volume and provider make available.

Keep open rates in context. Google explicitly notes that it does not verify third-party open-rate accuracy, and inbox privacy behaviour can distort the signal. A message accepted by the recipient’s server may still land outside the inbox. Use multiple indicators rather than describing a good open rate as a deliverability guarantee.`, table: { headers: ['Signal', 'What to investigate', 'Avoid concluding'], rows: [['Provider-specific rejections', 'Authentication, policy or rate errors', 'Every provider is affected equally'], ['Complaint increase', 'Acquisition source, relevance and frequency', 'More sends will fix engagement'], ['Clicks decline after volume increase', 'Audience mix, delivery and creative', 'The subject line is the only cause'], ['Limited Postmaster data', 'Whether enough traffic is visible', 'No data means no issue']] } },
      { heading: 'Make a pre-peak review repeatable', body: `Create a concise record of the sending domain, authentication review, audience sources, normal volume, planned expansion and response owner. List the conditions that would cause you to stop a scheduled send. Use your normal baseline and provider evidence, not an invented universal safe number.

Review campaign and flow collisions too. The same customer may receive several eligible messages, each reasonable in isolation. Evaluate the combined experience, especially around a sale launch or signup event. A shared calendar can make unnecessary duplication visible.

After the peak, inspect which cohorts stayed engaged and which should receive a lower frequency. Deliverability improves through sustained relevant sending and sound operations. A one-time cleanup or successful authentication check does not finish the work.`, bullets: ['Authentication reviewed against current provider requirements.', 'Subscriber sources and channel eligibility documented.', 'Sending expansion tied to recent history and engaged audiences.', 'Unsubscribe, suppression and response procedures tested.'] },
    ],
    faqs: [
      { question: 'Does a branded sending domain guarantee inbox placement?', answer: 'No. It supports sender identity and authentication, but audience quality, complaints, infrastructure and sending behaviour also matter.' },
      { question: 'Can a deliverability problem be fixed by changing subject lines?', answer: 'Sometimes relevance needs improvement, but first inspect authentication, provider errors, audience sources and volume changes. A subject-line edit will not repair a broken technical setup.' },
    ],
    related: ['black-friday-email-marketing-strategy', 'klaviyo-popup-list-growth', 'ecommerce-email-marketing-metrics'],
    service: { title: 'Discuss your Klaviyo email program', href: '/services/klaviyo-email-marketing' },
  },
  {
    slug: 'klaviyo-popup-list-growth',
    title: 'Klaviyo popup strategy: grow an ecommerce email list without sacrificing the shopping experience',
    seoTitle: 'Klaviyo Popup Strategy for Ecommerce List Growth',
    description: 'Improve Klaviyo signup forms with clear offers, mobile-friendly timing, welcome-flow routing and tests that measure subscriber quality as well as signups.',
    label: 'Email list growth', datePublished: published, dateModified: published,
    image: '/assets/blog/klaviyo-popup-list-growth.png',
    imageAlt: 'Email signup funnel from qualified visitor to relevant popup, welcome message and first order',
    intro: 'A Klaviyo popup earns its place when it offers something useful and makes subscribing easy. The objective is a qualified audience that wants to hear from the brand, not the highest possible form-submit rate at any cost.',
    takeaway: 'Evaluate the journey after the form: eligible signups, delivery of the promised benefit, clicks, orders and unsubscribes. Form conversion alone cannot tell you whether list growth is valuable.',
    sections: [
      { heading: 'Choose a benefit that fits the visitor’s decision', body: `Discounts can work, but they are only one signup promise. Early access, a useful buying guide, product education or a relevant launch update may fit the brand better. Choose a benefit the team can deliver consistently and afford commercially.

Make the offer concrete. “Get updates” gives a visitor little reason to exchange an email address. “Get the guide to choosing your first kit” explains the value, provided that guide exists. If a discount is available only for a first order, say so before submission rather than hiding the eligibility later.

For Black Friday, distinguish an interest list from genuine early access. If subscribers get access before the public sale, state the window. If they only receive a notification, describe that accurately. A clear promise attracts people whose expectations you can meet.` },
      { heading: 'Use timing and targeting to respect the page experience', body: `Do not assume an immediate full-screen interruption is right for every visitor. Someone arriving from a product ad may need to see the product first. A content reader may want the article before deciding whether the brand is relevant. A returning subscriber may not need the same signup request at all.

Review the conditions available in your form setup and test them on real devices. Decide where the form appears, which visitors are eligible and how often it can reappear after dismissal. Confirm that your conditions behave as intended rather than relying only on the editor’s explanation.

Avoid trapping the visitor. The close control should be visible and usable. On mobile, account for the keyboard and screen height. Important product details, checkout controls and accessibility should remain usable. A popup that produces signups by preventing normal browsing creates the wrong kind of growth.` },
      { heading: 'Keep the form simple and the channel choices explicit', body: `Ask for information that changes the experience or is needed for subscription. Email may be enough for the first step. Product preferences can help when they meaningfully change recommendations, but every extra field adds effort and another promise about how the data will be used.

If you collect phone numbers, make the SMS signup experience distinct and accurate. Do not infer SMS permission from email subscription or make the channel choice confusing. Use the platform’s appropriate consent components and current guidance for the markets you serve.

Write buttons that explain the action: receiving the benefit, joining the relevant list or requesting the guide. Use a confirmation state that tells people what happens next. A visitor should understand whether they need to check email, confirm subscription or copy a code before returning to shopping.` },
      { heading: 'Connect the form to a matching welcome experience', body: `The form and welcome flow are one customer journey. Check the destination list, signup-source data and first email before publishing the form. A successful submission that routes to the wrong list can silently leave the subscriber waiting.

Test the complete path with a new profile. Confirm that the message arrives under the intended opt-in conditions and that the benefit works. For a code, test qualifying and excluded products in the cart. For a guide, open the resource on a phone. For early access, verify the expected campaign audience.

Review existing-subscriber behaviour. If a subscriber submits again, the experience should not promise an email sequence that will not restart under your flow settings. The success state can help provide a clear next step, but it must remain consistent with offer eligibility.` },
      { heading: 'Run one-variable tests and measure downstream quality', body: `Choose a hypothesis that matters: a product guide will attract more qualified prospects than a generic discount, or a delayed display will reduce shopping interruption without materially reducing useful signups. Begin with a manageable number of variations and keep other conditions consistent.

Klaviyo supports form A/B testing and recommends isolating a variable so the result is interpretable. Record which audience saw each version. If traffic source changes halfway through the test, take that into account rather than treating the comparison as perfectly controlled.

Track form views and submissions, then follow the resulting cohorts through the welcome journey. Compare clicks, first orders, unsubscribes and contribution where you can reliably link outcomes. A higher signup rate can still be a worse commercial result if it attracts people interested only in a benefit they never use.`, table: { headers: ['Test variable', 'Question', 'Useful outcome beyond signups'], rows: [['Offer', 'Guide versus discount for a relevant visitor', 'Qualified clicks and first orders'], ['Timing', 'Earlier versus later display', 'Shopping behaviour and subscriber quality'], ['Copy', 'Specific benefit versus general updates', 'Welcome engagement and unsubscribes'], ['Fields', 'Email only versus a relevant preference', 'Completion and usefulness of personalisation']] }, source: { title: 'Klaviyo: how to A/B test a signup form', url: 'https://help.klaviyo.com/hc/en-us/articles/360045462071', note: 'Klaviyo documents form variations and recommends testing one variable at a time. The downstream quality checks here add a store-level view beyond the form result.' } },
      { heading: 'Maintain forms as offers and campaigns change', body: `Assign each live form an owner and review date. Check its promise, eligibility, destination audience and suppression conditions. Seasonal forms need an end date and a planned replacement so a December visitor does not see a Black Friday promise.

Review performance by device and traffic source. A healthy desktop average can hide a poor mobile experience. A sudden change in submissions may come from a new traffic mix, a display-rule change or a technical problem rather than the headline copy.

Keep the strongest learning in a simple record. Document what changed, what happened and what remains uncertain. Build list growth around clear customer value and reliable follow-through. That makes the audience more useful for campaigns, flows and long-term retention.`, bullets: ['Benefit is specific and deliverable.', 'Dismissal and mobile keyboard behaviour work.', 'New and existing subscriber paths have been checked.', 'Seasonal offers have a restoration date and owner.'] },
    ],
    faqs: [
      { question: 'What is a good Klaviyo popup conversion rate?', answer: 'Compare a consistent definition against your own device, traffic and offer mix. A broad benchmark can provide context, but subscriber quality and later buying behaviour determine whether the form helps your store.' },
      { question: 'Should I collect email and SMS in the same signup experience?', answer: 'You can design a coordinated experience, but each channel needs clear eligibility and consent handling. Test the complete journey and avoid treating one channel’s signup as permission for the other.' },
    ],
    related: ['klaviyo-welcome-flow', 'klaviyo-deliverability-checklist', 'black-friday-email-calendar'],
    service: { title: 'Explore ecommerce email list growth', href: '/services/email-list-growth' },
  },
  {
    slug: 'post-purchase-email-flow',
    title: 'Post-purchase email flow: a practical path from the first order to a relevant second purchase',
    seoTitle: 'Post-Purchase Email Flow for Ecommerce Retention',
    description: 'Plan ecommerce post-purchase emails around fulfilment, product education, review timing and relevant second orders, with practical Klaviyo checks.',
    label: 'Customer retention', datePublished: published, dateModified: published,
    image: '/assets/blog/post-purchase-email-flow.png',
    imageAlt: 'Post-purchase journey showing order, delivery, product education, feedback and a relevant next purchase',
    intro: 'A post-purchase email flow should help the customer get value from what they just bought before asking them to buy again. Good timing depends on fulfilment, product use and the next genuinely relevant purchase.',
    takeaway: 'Build around customer readiness. Order placement, dispatch, delivery and product use are different moments, and your emails should not treat them as interchangeable.',
    sections: [
      { heading: 'Separate essential order messages from marketing', body: `Inventory confirmation, payment, shipping and delivery messages already sent by Shopify, carriers, subscription tools or other systems. These messages provide essential service information. A promotional journey should complement them rather than duplicate or contradict them.

Decide which system owns each step and which messages require marketing eligibility. Do not casually label a promotional message transactional to send it to more people. Follow the provider’s process and applicable channel rules when configuring message type.

Sketch the customer’s first days after ordering. What do they know? What are they waiting for? What can they do before the product arrives? That map is a better starting point than a list of cross-sell products.` },
      { heading: 'Use the event that matches the message', body: `Placed Order can start a thank-you or preparation journey. Product-use education may need to follow delivery or an appropriate delay. A review request should arrive after the customer has had a realistic chance to experience the product.

Check what your integration actually provides. If you do not have reliable delivery events, do not write copy that assumes delivery is confirmed. Use careful language and a delay informed by fulfilment history, or route the customer to their order status for specifics.

Klaviyo supports post-purchase journeys with purchase triggers, delays and customer splits. Preview first-time and repeat-buyer paths, and consider fulfilment messages elsewhere in the stack. The mechanics should support the customer stage rather than determine it by convenience.`, source: { title: 'Klaviyo: creating a post-purchase flow', url: 'https://help.klaviyo.com/hc/en-us/articles/360028872611', note: 'Klaviyo documents purchase triggers, time delays and customer splits. Match your own content to available fulfilment data and the customer’s realistic time to use the product.' } },
      { heading: 'Make education specific to the product', body: `Useful onboarding removes a practical source of friction. A linen product may need care guidance. A supplement may need accurate directions taken from approved product information. A device may need setup and compatibility help. The question is what makes the customer more confident using their purchase.

Keep each message focused. A short guide to one common problem can be easier to act on than a full manual reproduced inside the email. Link to a complete resource when needed, and make the key instruction readable without depending entirely on images.

Use product-level context only when it is reliable. Test mixed orders and category overlap. If the customer buys two products, a single appropriate education path may be better than several simultaneous messages. Add fallback content for purchases that do not fit a specialised branch.`, table: { headers: ['Stage', 'Useful message', 'Readiness check'], rows: [['After order', 'Thank-you and accurate next steps', 'Order accepted and message ownership clear'], ['After arrival or suitable delay', 'Setup, care or first-use guidance', 'Delivery evidence or careful timing'], ['After enough use', 'Feedback or review invitation', 'Realistic chance to experience the product'], ['At a relevant next moment', 'Complementary item or replenishment', 'Product fit and purchase-cycle evidence']] } },
      { heading: 'Ask for feedback when it can be meaningful', body: `A review request arriving before delivery is both unhelpful and a sign that the brand is not paying attention. Align the request with actual experience. For a product that takes longer to evaluate, allow more time than you would for a simple item used immediately.

Make it easy to ask for help as well as leave feedback. A customer with an issue may need a service route rather than a promotional follow-up. Coordinate open support concerns where your tools and data support that approach.

Do not invent reviews, imply every customer is delighted or conceal genuine limitations. If you offer an incentive for feedback, use an approved approach and describe it honestly. The goal is to learn and provide useful support, not force a positive rating.` },
      { heading: 'Choose the second-order angle from the first purchase', body: `A relevant next product should have a clear connection to what the customer owns or wants to do. An accessory that improves use, a complementary category or a replenishment item can make sense. A generic catalogue sale is less useful when the brand already knows the purchase context.

Avoid recommending the same item again without a reason. Durable products and consumables have different repeat-order patterns. Use observed time between orders and category behaviour to plan timing; do not assume every product needs a 30-day reminder.

For Black Friday buyers, check whether the next order is likely to depend on another discount. Education and product fit can create a reason to return without extending seasonal price expectations indefinitely. If a benefit is included, calculate its contribution and explain the terms clearly.` },
      { heading: 'Measure retention on a realistic horizon', body: `Inspect delivery, clicks and attributed orders for the messages, then evaluate customer outcomes over time. Track the share of eligible first-time buyers who place another order within a period suited to your product. Compare cohorts with similar acquisition and seasonal context where possible.

A short-term email revenue report will not fully describe the value of education or service. Support contacts, product returns and later repeat buying can add context, although those changes cannot automatically be attributed to one email. Be explicit about what is observed and what remains uncertain.

Use the results to change the journey. If review requests arrive too early, adjust the event or delay. If cross-sells receive clicks but poor orders, inspect recommendation fit and landing pages. If several messages crowd the first week, reduce overlap. Retention work is strongest when it improves the customer’s experience of the product.`, bullets: ['Confirm order and fulfilment ownership across tools.', 'Test first-time, returning and mixed-product paths.', 'Align review and cross-sell timing with actual readiness.', 'Review second-order behaviour beyond the immediate sale window.'] },
    ],
    faqs: [
      { question: 'When should I send a post-purchase cross-sell?', answer: 'When the next product is relevant and the customer is ready to consider it. Use fulfilment, product use and buying-cycle evidence rather than a universal day count.' },
      { question: 'Should Black Friday buyers receive a different post-purchase flow?', answer: 'Only when their offer, expectations or onboarding needs differ meaningfully. You can adapt content without creating a separate journey for every seasonal customer.' },
    ],
    related: ['klaviyo-flows-for-shopify', 'black-friday-email-marketing-strategy', 'ecommerce-email-marketing-metrics'],
    service: { title: 'Build a connected automation strategy', href: '/services/email-automation-flows' },
  },
  {
    slug: 'ecommerce-email-marketing-metrics',
    title: 'Ecommerce email marketing metrics: how to read Klaviyo reports without confusing attribution with growth',
    seoTitle: 'Ecommerce Email Marketing Metrics Explained',
    description: 'Understand email clicks, orders, revenue per recipient, attribution and retention metrics, with formulas and a practical Klaviyo review framework.',
    label: 'Measurement', datePublished: published, dateModified: published,
    image: '/assets/blog/ecommerce-email-marketing-metrics.png',
    imageAlt: 'Email measurement diagram separating delivery, qualified engagement, attributed orders and store-level retention outcomes',
    intro: 'Ecommerce email marketing metrics are useful when they answer a decision. A report should help you understand who received a message, what they did, and whether the customer and commercial outcome justify the work.',
    takeaway: 'Keep definitions and attribution settings consistent. Attributed revenue is useful reporting evidence, but it is not the same as incremental revenue, profit or a guaranteed share of store growth.',
    sections: [
      { heading: 'Start with the question, then choose the metric', body: `A campaign launch, a welcome flow and a product-education email have different jobs. Before opening the dashboard, write the question: Did qualified people receive the message? Did it lead to relevant product interest? Did customers order? Did first-time buyers return later?

Keep the audience and period attached to every result. A small VIP audience can have a high revenue per recipient while producing a lower total than a broad launch. That does not make one automatically better. It shows that the campaigns reached different groups for different reasons.

Record any changes to offer, traffic source, inventory or attribution settings. Comparing a full-price education email with a major sale only by revenue obscures the context that produced the number. Useful reporting makes those differences visible.` },
      { heading: 'Read delivery and negative feedback before celebrating reach', body: `Distinguish attempted sends from delivered messages and from inbox placement. Delivered generally indicates receiver acceptance; it does not prove the recipient saw the email in the primary inbox. Read bounce or rejection information when there is a sudden change.

Review unsubscribes and complaints alongside audience growth. A larger list that generates more unwanted mail may be a worse asset than a smaller qualified audience. Compare the acquisition sources and recipient groups involved rather than attributing the problem immediately to design.

Use open rate as a contextual signal. Privacy-related preloading can inflate recorded opens, and reporting definitions vary. Clicks and purchase activity can add evidence, but clicks may also need bot-filtering context. No single engagement metric provides a complete picture.` },
      { heading: 'Use clear formulas and the right denominator', body: `Agree on definitions before comparing reports. A click rate can mean unique clickers divided by delivered emails, while click-through measures elsewhere may use different denominators. Label your own worksheet rather than assuming every exported field means the same thing.

For an illustrative campaign with 10,000 delivered messages, 180 unique clickers, 40 attributed purchasers and $3,200 attributed revenue, the unique click rate is 1.8%, purchasers per delivered recipient is 0.4%, and attributed revenue per delivered recipient is $0.32. Those figures describe the selected reporting model and period; they do not establish causation.

When using a platform’s built-in revenue per recipient, check whether its denominator and filters match your worksheet. Differences can be legitimate if one report includes a different recipient count, attribution window or order metric. Reconcile the definitions before calling either result wrong.`, table: { headers: ['Metric in a labelled worksheet', 'Formula', 'Useful question'], rows: [['Unique click rate', 'Unique clickers ÷ delivered × 100', 'Did the message generate relevant interest?'], ['Purchasers per delivered recipient', 'Attributed purchasers ÷ delivered × 100', 'How much buying activity is credited to the send?'], ['Attributed revenue per delivered recipient', 'Attributed revenue ÷ delivered', 'How does value compare across similar sends?'], ['Repeat-purchase rate for a defined cohort', 'Repeat purchasers ÷ eligible cohort customers × 100', 'Are first-time buyers returning in the chosen period?']] } },
      { heading: 'Treat attribution as a model with settings', body: `An email platform assigns credit according to its attribution rules, eligible interactions and time windows. A purchase credited to email may also appear in another platform’s report. Adding channel-reported revenue totals can therefore exceed actual store revenue.

Write the current settings next to your review and check them before comparing periods. A change to the window or interaction treatment can alter reported revenue even if customer behaviour stays similar. Review the selected order metric and any exclusions too.

Use attributed revenue to understand performance within a consistent framework. For incremental impact, a controlled holdout or other appropriate experiment provides stronger evidence than a dashboard percentage alone. If a clean test is not feasible, be honest about the limit and reconcile with overall store behaviour.`, source: { title: 'Klaviyo: attribution documentation', url: 'https://help.klaviyo.com/hc/en-us/articles/1260804504250', note: 'Consult Klaviyo’s current attribution documentation and your actual account settings when interpreting credited orders. Platform credit should not be presented as proof that email independently caused every attributed purchase.' } },
      { heading: 'Connect email results with contribution and retention', body: `Revenue does not account for product cost, discounts, fulfilment, returns or marketing costs. Work with the store’s actual contribution model when comparing offers. A deeper discount can increase attributed sales while reducing the value retained per order.

For retention, define a cohort and allow time for repeat buying. First-time customers from a Black Friday promotion may behave differently from full-price subscribers acquired through a product guide. Compare similar cohorts and document differences in product, channel and season.

Track the customer outcome the journey was designed to improve. A post-purchase guide may support product use; a replenishment reminder may support a timely reorder. These outcomes are worth examining even when the immediate message revenue is modest, while avoiding unsupported claims that one email caused all downstream improvement.` },
      { heading: 'Turn the weekly review into a short decision log', body: `Use a small dashboard with audience, delivered count, meaningful clicks, attributed orders, revenue per recipient and negative feedback. Add the commercial context and one next action. A useful review ends with a decision, not a screenshot collection.

Inspect outliers before making broad changes. A missing product, broken link or stockout can explain poor conversion. A different acquisition mix can explain changes in engagement. If a result rests on very few orders, note the uncertainty rather than presenting a precise percentage as a stable trend.

Maintain one experiment queue. Choose a hypothesis, a primary measure, a comparable audience and a review window. Record what changed and what you learned. Over time, that process gives the team stronger evidence than repeatedly chasing an industry average that may describe a very different store.`, bullets: ['Record audience, timeframe and metric definitions.', 'Keep attribution settings attached to reported revenue.', 'Reconcile campaigns with store sales and contribution.', 'Turn each review into a specific action or a clearly stated uncertainty.'] },
    ],
    faqs: [
      { question: 'What percentage of ecommerce revenue should email generate?', answer: 'There is no universal target that proves a healthy program. Store maturity, product cycle, paid acquisition, promotions and attribution settings affect the reported share. Review contribution and customer outcomes as well as attributed revenue.' },
      { question: 'Is open rate still useful?', answer: 'It can provide context, but privacy behaviour and reporting differences limit its accuracy. Combine it with reliable clicks, purchases, delivery evidence and negative feedback.' },
    ],
    related: ['klaviyo-deliverability-checklist', 'black-friday-email-subject-lines', 'post-purchase-email-flow'],
    service: { title: 'Discuss ecommerce email reporting and strategy', href: '/services/klaviyo-email-marketing' },
  },
];
