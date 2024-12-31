const baseUrl = '';

const tokenFetch = async <T = unknown>(
    url: string,
    body?: Record<string, any>,
    init?: RequestInit,
) => {
    const allUrl = new URL(url, baseUrl);
    const allInit: RequestInit = {
        ...init,
        method: init?.method ?? 'GET',
    };
    if (['GET', 'DELETE'].includes(allInit.method!)) {
        const searchParams = new URLSearchParams(body);
        searchParams.forEach(([key, value]) => {
            allUrl.searchParams.append(key, value);
        });
    } else {
        allInit.body = JSON.stringify(body);
    }
    const headers = new Headers(allInit.headers);
    headers.set('X-QW-Api-Key', 'af301a0b191f4497a6a283db365ddc38');
    allInit.headers = headers;
    const response = await fetch(allUrl.toString(), allInit);
    const responseJson: T = await response.json();
    return responseJson;
};
