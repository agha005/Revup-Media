# RevUp Media search visibility audit — October 17, 2026

Website: https://www.revupmedia.co

## Public technical checks

- The live sitemap returns HTTP 200 and lists 34 URLs. All 34 returned HTTP 200 during this audit and had a page title, meta description, one H1, and a canonical link. No duplicate titles were found in the sitemap set.
- `robots.txt` returns HTTP 200 and points to the sitemap. The prior sitemap-date and page metadata fixes remain live.
- Search results observed during the audit included the homepage, About page, service pages and several journal articles. This is evidence that at least some pages are discoverable; it does not establish that every sitemap URL is indexed.
- The official LinkedIn company page links back to `https://www.revupmedia.co/` and identifies RevUp Media as a Karachi ecommerce email and SMS agency.
- A separate Kansas City agency uses a very similar name. Clear connections between the website and the agency's own social profiles help distinguish the two businesses.

## Social profile changes published

- Added the user-confirmed Instagram profile `https://www.instagram.com/revup_media_00/` to the site's `Organization.sameAs` data alongside the existing Facebook and LinkedIn company pages.
- Added visible Instagram, Facebook and LinkedIn links to the About page and the site footers.
- Published the changes to production and verified the live homepage, About page and a journal article return HTTP 200 and contain the three social links in the organization data.
- In Search Console, requested recrawling of the updated homepage and About page on October 17. The interface completed its live URL check and returned to the URL Inspection view with “Request submitted.” Google still controls recrawl timing and search appearance.

Google's Organization documentation says social profile URLs in `sameAs` can help it understand and distinguish an organization. Google still controls whether and how the profiles appear together in search results; markup and links do not guarantee a specific search layout.

## Search Console findings and remaining limits

- Google Search Console reports 141 impressions, 5 clicks, 3.5% click-through rate and average position 47.4 for September 22–October 14. The past seven days (October 8–14) show 61 impressions, 2 clicks and average position 55.7. The small sample and young reporting window make trends uncertain, but the principal current constraint is low search visibility, not broad deindexing.
- The highest-impression reported query was “shopify email marketing agency” (14 impressions, 0 reported clicks). The only reported brand-like query was “revup” (1 impression). Search Console may omit or anonymize low-volume queries, so the visible query list is not a complete count of brand searches.
- The pages with the most reported impressions include Shopify email marketing (19), post-purchase email flow (17), Klaviyo welcome flow (14), and the strategy guide (14). These have 0 reported clicks in this window. The homepage had 13 impressions and 1 click.
- Page Indexing (last updated October 12) reports 35 indexed URLs and 2 excluded. Both exclusions are expected homepage redirects (`https://revupmedia.co/` and `http://revupmedia.co/`) to the preferred www HTTPS address. The sitemap was submitted October 7, last read October 13, and shows Success with 35 discovered pages.
- The indexed URL list still includes older Linen Tales and Moments With Him case study URLs. The live Linen Tales URL now returns 404; Moments With Him redirects to the case studies page. Exact-URL temporary removal requests for both were submitted October 17 and were processing at the time of this report. The current sitemap omits both. Search Console's indexing report can take time to reflect these changes.
- Search Console's Links report shows 0 external links at this time. This report can lag behind live pages linking to the site; it is not proof that no backlinks exist.
- Core Web Vitals reports no data for mobile or desktop, so no field performance conclusion is available.
- The Instagram profile did not surface in the research search results for its exact handle at audit time. This is a limited observation, not proof that Google has not indexed it.
- The Instagram account is publicly viewable and its bio links to the case studies page. The Facebook page also links to the case studies page, while LinkedIn links to the homepage. Each connection points to the same website, though profile discovery in Google is still at Google's discretion.

## Next priorities

1. Track the Performance report weekly as the recently published pages mature. Compare brand queries and high-intent service queries, especially the Shopify agency page. Prioritize visibility and useful evidence before changing copy based on single-impression terms.
2. Keep the Instagram, Facebook and LinkedIn names, logos, descriptions and website links consistent as the profiles develop. All three already link back to the site.
3. Review Search Console queries and pages after recrawling. Update titles or content only where impressions, position and click-through rate show a specific opportunity.

Google reference: https://developers.google.com/search/docs/appearance/structured-data/organization
Search Console reference: https://support.google.com/webmasters/answer/10268906?hl=en
