const htmlRoutes = new Map([
  ["/", "/index.html"],
  ["/home", "/index.html"],
  ["/case-studies", "/case-studies.html"],
  ["/about", "/about.html"],
  ["/case-study-aussies-merch", "/case-study-aussies-merch.html"],
  ["/case-study-hardbody", "/case-study-hardbody.html"],
  ["/case-study-linen-tales", "/case-study-linen-tales.html"],
  ["/case-study-twinky", "/case-study-twinky.html"],
]);

export default {
  async fetch(request, env) {
    const requestUrl = new URL(request.url);
    const normalizedPath = requestUrl.pathname.length > 1
      ? requestUrl.pathname.replace(/\/$/, "")
      : requestUrl.pathname;
    const assetPath = htmlRoutes.get(normalizedPath) ?? requestUrl.pathname;
    const assetUrl = new URL(assetPath, requestUrl);
    const response = await env.ASSETS.fetch(new Request(assetUrl, request));

    if (response.status !== 404) return response;

    return new Response("Page not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  },
};
