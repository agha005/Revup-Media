type Resource = { href: string; title: string; description: string };
type ServiceDetail = { heading: string; fit: string; deliverables: { title: string; text: string }[]; proof: Resource[]; guides: Resource[]; related: string[] };
const moments: Resource = { href: '/case-studies/moments-with-him', title: 'Moments With Him: email and SMS lifecycle work', description: 'See the flow, campaign, capture and SMS work, alongside $111,050.73 in attributed revenue for August 17–September 16, 2026. Attribution describes platform reporting; it does not establish incremental revenue.' };
const usBoot: Resource = { href: '/case-studies/us-boot', title: 'US Boot: flows, campaigns and subscriber capture', description: 'Explore the five-day implementation for a footwear brand preparing for a media feature, with the before-and-after Klaviyo dashboards and campaign examples.' };
const aussies: Resource = { href: '/case-studies/aussies-merch', title: 'Aussies Merch: lifecycle email and creative', description: 'See lifecycle flow work, branded campaign artwork and the supporting performance evidence for an ecommerce merchandise brand.' };
const hardbody: Resource = { href: '/case-studies/hardbody', title: 'HardBody: ecommerce campaign creative', description: 'Review product-focused email campaigns and the supporting Omnisend dashboard for a fitness ecommerce brand.' };

export const serviceDetails: Record<string, ServiceDetail> = {
  'services/klaviyo-email-marketing': {
    heading: 'Klaviyo strategy, production and account improvement',
    fit: 'For ecommerce teams using Klaviyo that need help connecting account strategy, lifecycle flows and regular campaigns. We can work from an existing setup, prioritising the gaps that matter before rebuilding a working customer journey.',
    deliverables: [
      { title: 'Account and lifecycle review', text: 'Review the current flow map, campaign activity, customer segments and signup journey. Identify missing messages, conflicting offers and unclear customer exits, then turn the findings into an ordered action plan.' },
      { title: 'Campaign and flow creative', text: 'Plan the audience, message and customer action before creating copy direction and brand-specific email designs. Keep promotions consistent with the store, product availability and the offer customers actually see.' },
      { title: 'Testing and performance review', text: 'Choose a clear question for each test and review delivery, clicks, orders and attributed revenue in context. Separate platform attribution from evidence of overall store growth when reporting results.' },
    ],
    proof: [moments, usBoot],
    guides: [
      { href: '/blog/klaviyo-flows-for-shopify', title: 'Which Klaviyo flows should a Shopify store build first?', description: 'Understand triggers, customer exits and the order of implementation.' },
      { href: '/blog/klaviyo-deliverability-checklist', title: 'Klaviyo deliverability checklist', description: 'Review authentication, subscriber quality and sending patterns before increasing volume.' },
      { href: '/blog/ecommerce-email-marketing-metrics', title: 'How to read ecommerce email marketing metrics', description: 'Understand attribution, revenue per recipient and retention reporting.' },
    ], related: ['services/shopify-email-marketing', 'services/email-automation-flows', 'services/email-campaign-management'],
  },
  'services/shopify-email-marketing': {
    heading: 'Connect your store journey with email and SMS',
    fit: 'For Shopify brands whose retention messages need to reflect what happens in the store: product discovery, checkout, purchase and repeat buying. The plan begins with the store and its customer data rather than a generic sending schedule.',
    deliverables: [
      { title: 'Store and signup journey review', text: 'Review how visitors discover products, subscribe and become customers. Check whether signup benefits, store promotions and first-order messages agree, and identify where the experience loses context.' },
      { title: 'Lifecycle messaging plan', text: 'Map welcome, abandonment and post-purchase messages to the events available in your account. Consider product choice, purchase history and the point where promotional reminders should stop after an order.' },
      { title: 'A campaign calendar tied to the store', text: 'Plan sends around launches, collections, stock and approved offers. Coordinate campaigns with live flows so a customer receives a coherent experience across the channels included in the project.' },
    ], proof: [usBoot, moments],
    guides: [
      { href: '/blog/klaviyo-flows-for-shopify', title: 'Klaviyo flows for Shopify', description: 'A practical guide to choosing and checking your first automations.' },
      { href: '/blog/klaviyo-abandoned-cart-flow', title: 'Klaviyo abandoned cart flow', description: 'Distinguish cart and checkout events, and verify purchase exits.' },
      { href: '/blog/post-purchase-email-flow', title: 'Post-purchase email flow planning', description: 'Plan education and repeat-purchase messages around the product experience.' },
    ], related: ['services/klaviyo-email-marketing', 'services/email-list-growth', 'services/email-automation-flows'],
  },
  'services/email-automation-flows': {
    heading: 'Build flows around customer actions and buying questions',
    fit: 'For brands with missing lifecycle messages or existing flows that need a clearer sequence. We review the trigger, audience, offer and intended next action for each journey, then prioritise the work against the account evidence.',
    deliverables: [
      { title: 'Lifecycle audit and priority map', text: 'Document the current welcome, browse, cart, post-purchase and win-back journeys. Identify missing coverage, repetitive messages and conditions that can keep a customer in an inappropriate sequence.' },
      { title: 'Message and creative planning', text: 'Give each step one purpose, such as delivering a signup benefit, answering a product question or helping an existing customer use a purchase. Align the copy direction, design and destination with that purpose.' },
      { title: 'Flow launch and review', text: 'For the agreed implementation scope, check entries, splits, purchase exits, dynamic products, links and offer rules before launch. Review real flow activity afterwards to find routing or delivery problems before changing the creative.' },
    ], proof: [usBoot, aussies],
    guides: [
      { href: '/blog/klaviyo-welcome-flow', title: 'Klaviyo welcome flow guide', description: 'Connect the signup promise with the first-purchase journey.' },
      { href: '/blog/klaviyo-abandoned-cart-flow', title: 'Abandoned cart flow setup and checks', description: 'Review the trigger, timing, dynamic content and purchase exit.' },
      { href: '/blog/ecommerce-email-automation-audit', title: 'Audit ecommerce email automation', description: 'Find the most useful improvements without rebuilding every flow.' },
    ], related: ['services/klaviyo-email-marketing', 'services/email-list-growth', 'services/shopify-email-marketing'],
  },
  'services/email-campaign-management': {
    heading: 'From campaign planning to the next useful test',
    fit: 'For ecommerce teams that want ongoing campaigns to connect with product launches, audience needs and their existing lifecycle program. The campaign plan gives each send a commercial purpose and a clear customer benefit.',
    deliverables: [
      { title: 'Campaign calendar and audience direction', text: 'Organise launches, seasonal moments and approved promotions into a practical calendar. Identify the audience, customer benefit, main message and exclusions before a campaign moves into production.' },
      { title: 'Copy direction and custom email design', text: 'Create a message hierarchy, product story and main call to action that fit the brand. Keep links, offer terms and the landing page consistent with what the email promises.' },
      { title: 'Campaign checks and learning', text: 'Review mobile layouts, product availability, audience overlap and approved deadlines. Compare campaign outcomes in context and use the findings to choose the next test rather than increasing frequency by default.' },
    ], proof: [hardbody, moments],
    guides: [
      { href: '/blog/ecommerce-retention-email-calendar', title: 'Plan an ecommerce retention email calendar', description: 'Coordinate campaigns and customer-triggered messages.' },
      { href: '/blog/black-friday-email-calendar', title: 'Black Friday email calendar for 2026', description: 'Plan preparation, launches, reminders and post-sale follow-up.' },
      { href: '/blog/black-friday-email-subject-lines', title: 'Black Friday subject lines and testing plan', description: 'Choose a message angle and evaluate more than opens.' },
    ], related: ['services/klaviyo-email-marketing', 'services/ecommerce-sms-marketing', 'services/email-automation-flows'],
  },
  'services/ecommerce-sms-marketing': {
    heading: 'Give SMS a distinct role in the retention program',
    fit: 'For ecommerce brands that want to coordinate SMS with email while respecting channel permission and subscriber attention. We focus on the moments where a short message adds value to the customer journey.',
    deliverables: [
      { title: 'Capture and customer journey review', text: 'Review the current SMS signup experience, the benefit promised and the channel information available in the account. Map messaging only to customers eligible for that channel and the markets in the agreed scope.' },
      { title: 'Lifecycle and campaign message direction', text: 'Choose a small number of useful SMS touchpoints, with clear audience rules and an accurate reason to act. Distinguish each text message from the longer story or product education delivered by email.' },
      { title: 'Email and SMS coordination', text: 'Review timing and overlap across both channels. Connect the message, approved offer and destination so customers receive consistent information without an unnecessary repeat of every campaign.' },
    ], proof: [moments],
    guides: [
      { href: '/blog/black-friday-email-marketing-strategy', title: 'Black Friday retention planning', description: 'Coordinate the offer, audiences and customer journey before peak season.' },
      { href: '/blog/ecommerce-email-segmentation', title: 'Customer segmentation strategy', description: 'Choose customer context that meaningfully changes the message.' },
    ], related: ['services/email-campaign-management', 'services/email-list-growth', 'services/shopify-email-marketing'],
  },
  'services/email-list-growth': {
    heading: 'Earn signups and deliver the value you promised',
    fit: 'For brands that want to improve subscriber capture without treating every signup as equally valuable. We connect the form experience, approved offer and welcome journey so the next message makes sense to the visitor.',
    deliverables: [
      { title: 'Capture experience review', text: 'Review forms, placement, timing and the reason to subscribe across mobile and desktop. Look for unclear terms, competing promotions or unnecessary interruption of the shopping experience.' },
      { title: 'Offer and welcome alignment', text: 'Connect the signup promise with the right list and first message. Plan appropriate expectations for new subscribers, existing subscribers and customers who may not qualify for a first-order benefit.' },
      { title: 'Subscriber quality and conversion review', text: 'Measure more than the number of signups. Review whether subscribers receive the benefit, engage with relevant messages and progress towards a first purchase, then use the evidence to guide the next form test.' },
    ], proof: [usBoot, moments],
    guides: [
      { href: '/blog/klaviyo-popup-list-growth', title: 'Klaviyo popup strategy for list growth', description: 'Improve the signup experience and measure subscriber quality.' },
      { href: '/blog/klaviyo-welcome-flow', title: 'Connect list growth with your welcome flow', description: 'Deliver the signup promise and guide an appropriate first purchase.' },
    ], related: ['services/email-automation-flows', 'services/klaviyo-email-marketing', 'services/ecommerce-sms-marketing'],
  },
};
