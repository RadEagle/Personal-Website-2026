function handler(event) {
    let request = event.request;

    // Rewrite /page to /page/index.html
    if (!request.uri.includes(".")) {
        request.uri = request.uri.replace(/\/?$/, "/index.html");
    }

    return request
}