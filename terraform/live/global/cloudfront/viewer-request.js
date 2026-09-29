function handler(event) {
    const request = event.request;
    const headers = request.headers;

    // If there is no www., append that and return 301
    if (headers.host.value === "jqchau.com") {
        return buildRedirectResponse(request)
    }

    // Rewrite /page to /page/index.html
    if (!request.uri.includes(".")) {
        request.uri = request.uri.replace(/\/?$/, "/index.html");
    }

    return request
}

function buildRedirectResponse(request) {
    let redirectUrl = `https://www.jqchau.com${request.uri}`

    if (Object.entries(request.querystring).length > 0) {
        let queries = []
        for (const key in request.querystring) {
            queries.push(`${key}=${request.querystring[key].value}`)
        }

        redirectUrl = `${redirectUrl}?${queries.join("&")}`
    }
    
    return {
        statusCode: 301,
        statusDescription: "Moved Permanently",
        headers: {
            location: {
                value: redirectUrl
            }
        }
    }
}