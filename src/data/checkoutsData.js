const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((r) => r.json());
};

export const returnCheckouts = (id) => {
    return fetch(`${_apiUrl}/return/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    });
};