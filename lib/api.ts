const API = process.env.NEXT_PUBLIC_API_URL;

export const apiFetch = async (
    url: string,
    options: RequestInit = {}
) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
            ...options.headers,
        },
    });

    if (!res.ok) {
        throw new Error("API error");
    }

    return res.json();
};
