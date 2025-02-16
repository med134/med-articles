export async function mutateData(
  method: string,
  path: string,
  payload?: Record<string, unknown>
) {
  const baseUrl = "http://localhost:1337/api";
  const url = new URL(path, baseUrl);

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload }),
    });

    if (method === "PUT") {
      return response.ok;
    }

    const data = await response?.json();
    return data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
