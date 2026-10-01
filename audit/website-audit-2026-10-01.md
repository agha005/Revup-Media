# RevUp Media website and organic-content audit

Audit date: October 1, 2026. Website: https://www.revupmedia.co. Repository: https://github.com/agha005/Revup-Media. Deployed branch observed before changes: `react-nextjs`, commit `29457ed`.

## Outcome

Prepared 11 new long-form articles with 11 original, brand-matched planning diagrams. The existing three strategy notes are preserved, bringing the journal to 14 posts. New content contains approximately 11,500 words across the 11 articles, including reference tables and FAQs. Each new article has a distinct search purpose, source context where platform mechanics are discussed, related reading, and a relevant service destination.

The topics were selected for relevance to the agency, current seasonal opportunity and observable search-result coverage. No paid keyword-volume dataset, Search Console performance report or site analytics was available. They should be described as search-intent opportunities, not verified highest-volume keywords or already best-performing posts.

## Findings and changes

| Area | Evidence before changes | Action and status |
| --- | --- | --- |
| Blog depth | The blog had three brief notes, each with three short paragraphs, despite displayed reading times of five or six minutes. | Added 11 substantial guides; calculate reading time from article content. Preserved old URLs and copy. |
| Seasonal coverage | No Black Friday article appeared in the live blog. | Added a strategy pillar, 2026 calendar, segmentation guide and 40-subject-line testing article. |
| Platform intent | No dedicated welcome, cart-recovery, popup or deliverability guide appeared in the live blog. | Added seven evergreen Shopify, Klaviyo and retention guides. |
| Blog sharing metadata | `/blog` had the homepage Open Graph title, description and URL. Its canonical and ordinary page title were already correct. | Added blog-specific Open Graph and Twitter metadata; article-specific image, URL and type. |
| Other page sharing | Root social metadata could be inherited by pages with their own ordinary titles. | Resolve sharing titles, descriptions and URLs from each route, retaining article-specific data. |
| Article schema | Existing articles used a basic Article object with a fixed date and no article image. | New articles use BlogPosting with image, dates, publisher identity and canonical page; added breadcrumb schema. Old publication dates remain September 23, 2026. |
| Discovery | Three manually listed blog URLs in sitemap; sparse cross-article navigation. | Sitemap derives post routes from the content registry; added related posts and service links. Added Blog and Services to legacy page footers. |
| Reading experience | Text-only cards and no in-page navigation on existing posts. | Image cards, topic navigation, readable article layout, contents links, reference tables, FAQs and a footer. |
| Mobile blog navigation | Blog header used desktop navigation hidden on small screens without a visible alternative. | Added an accessible native disclosure menu to journal pages. |
| Rendering | Catch-all routes rendered on demand. | Generate known public routes at build time, including articles and service pages. Unknown paths still return 404. |
| Sitemap dates | Every URL received the current generation time, regardless of actual content changes. | Use documented article dates; omit unverifiable modification dates on other routes. |
| Crawl access | Home, Blog, Services, About, robots.txt and sitemap.xml returned HTTP 200. Robots allowed crawling and pointed to the sitemap. | Retained the working crawl setup. No new restriction introduced. |

## What the public audit cannot establish

- A `site:revupmedia.co` search returned no results through the research tool, and the text web reader could not fetch the site. The website did load normally in the browser and through HTTP checks. This is not proof of deindexing or a server outage. Verify indexing in Google Search Console.
- No Core Web Vitals field data or Lighthouse score was collected. Static route generation and small image files are implementation improvements, not a claimed performance-score increase.
- No organic traffic, search impressions, conversion rate or attributable lead baseline was available. Publication cannot establish ranking or traffic growth immediately.
- Authentication, consent and deliverability checks discussed in the articles apply to merchant email accounts. This audit did not inspect or change a client Klaviyo account.

## Content and intent map

| New URL | Primary query intent | Reader benefit | Service destination |
| --- | --- | --- | --- |
| `/blog/black-friday-email-marketing-strategy` | Black Friday email marketing strategy | Offer economics, campaign jobs, audience and flow coordination | Campaign management |
| `/blog/black-friday-email-calendar` | Black Friday email calendar 2026 | Dated planning worksheet from October through Cyber Monday | Campaign management |
| `/blog/black-friday-klaviyo-segments` | Klaviyo segments for Black Friday | Seven customer groups with message angles and exclusions | Klaviyo email marketing |
| `/blog/black-friday-email-subject-lines` | Black Friday email subject lines | 40 original examples with truthful usage conditions and test design | Campaign management |
| `/blog/klaviyo-flows-for-shopify` | Klaviyo flows for Shopify | Prioritisation, triggers, timing, exits and release checks | Shopify email marketing |
| `/blog/klaviyo-welcome-flow` | Klaviyo welcome flow | Signup promise, routing, buying questions and purchase handling | Automation flows |
| `/blog/klaviyo-abandoned-cart-flow` | Klaviyo abandoned cart flow | Cart versus checkout events, recovery content and purchase exits | Automation flows |
| `/blog/klaviyo-deliverability-checklist` | Klaviyo deliverability | Sender setup, audience quality, volume and provider monitoring | Klaviyo email marketing |
| `/blog/klaviyo-popup-list-growth` | Klaviyo popup strategy | Offer relevance, mobile behaviour, welcome routing and cohort quality | Email list growth |
| `/blog/post-purchase-email-flow` | Post-purchase email flow | Delivery-aware education, reviews and relevant repeat buying | Automation flows |
| `/blog/ecommerce-email-marketing-metrics` | Ecommerce email marketing metrics | Labelled formulas, attribution context, contribution and retention | Klaviyo email marketing |

## Next priorities for traffic and qualified leads

1. In Search Console, verify the domain property, submit `https://www.revupmedia.co/sitemap.xml`, and inspect representative article URLs. Check Google's selected canonical and whether any pages are excluded. This was not done without account access.
2. Record the pre-publication baseline: organic impressions, clicks, non-branded queries, indexed pages and audit bookings. Check article discovery after one to two weeks; assess query and lead patterns over the following months rather than expecting instant rankings.
3. Use page-level query data to refine titles and expand answers people actually need. Avoid producing near-duplicate posts solely to target slight wording variations.
4. Add verified, permission-cleared examples from agency work when they directly explain a guide. Current guides use original planning diagrams and labelled illustrative maths, not invented merchant results.
5. Strengthen service conversion copy with concrete deliverables, onboarding expectations and supported project evidence. Some homepage wording describes portfolio/reporting mechanics rather than the customer benefit; refine this separately when agency positioning is agreed.
6. Track journal-to-service navigation and audit-booking intent using the site's approved analytics setup. Do not install new tracking without deciding consent and data handling.
7. Refresh year-specific calendars before the next season. Retain evergreen slugs, and update publication/modification dates only when the article actually changes.

## Research references

- [Klaviyo Black Friday sending guide](https://www.klaviyo.com/blog/when-to-send-black-friday-emails)
- [Klaviyo getting started with flows](https://help.klaviyo.com/hc/en-us/articles/115002774932)
- [Klaviyo welcome-series setup](https://help.klaviyo.com/hc/en-us/articles/115002775172)
- [Klaviyo abandoned-cart setup](https://help.klaviyo.com/hc/en-us/articles/115002779411)
- [Klaviyo post-purchase setup](https://help.klaviyo.com/hc/en-us/articles/360028872611)
- [Klaviyo form A/B testing](https://help.klaviyo.com/hc/en-us/articles/360045462071)
- [Klaviyo message attribution](https://help.klaviyo.com/hc/en-us/articles/1260804504250)
- [Google email sender guidelines](https://support.google.com/mail/answer/81126?hl=en)
- [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Article structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/article)

## Validation

- Production build and TypeScript checks passed.
- Automated verification covers all 11 article responses, one H1 per page, canonical URL, description, Open Graph/Twitter data, JSON-LD, table-of-contents targets, related links, service links, graphics and sitemap membership.
- Existing blog articles, service destinations, home, about and case-study routes are smoke-checked; an unknown URL must return 404.
- Local article word counts: 974–1,163 words; combined 11,456 words under the verification script's definition. The count excludes source notes and other layout copy.
- All 11 PNG diagrams together total approximately 630 KB, with individual files around 55–61 KB.
- Desktop and 390-pixel mobile layouts reviewed visually. Mobile menu, contents links, horizontal table region and page overflow checked.
- Local evidence: `audit/local-verification.json`. Live checks are recorded in `audit/live-verification.json` after production publication.

## Maintenance

Article content: `app/content/growth-articles.ts`. Original notes and shared registry: `app/components/blog-page.tsx`. Rendering: `app/components/blog-views.tsx`. Diagram source and renderer: `scripts/build-blog-assets.mjs`. Run `npm ci`, `npm run build`, start the site, then run `node scripts/verify-blog.mjs <origin>` to repeat the release checks.
