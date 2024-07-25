const BASE_URL = "https://panda-market-api.vercel.app";

async function fetchWithErrorHandling(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}

export async function getArticles(
  page: number = 1,
  pageSize: number,
  orderBy: string,
  keyword = ""
) {
  const encodedPage = encodeURIComponent(page);
  const encodedPageSize = encodeURIComponent(pageSize);
  const encodedOrderBy = encodeURIComponent(orderBy);
  const encodedKeyword = encodeURIComponent(keyword);

  const url = `${BASE_URL}/articles?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrderBy}&keyword=${encodedKeyword}`;

  return await fetchWithErrorHandling(url);
}

export async function getArticleDetail(id: string | undefined): Promise<any> {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  const encodedId = encodeURIComponent(id);
  const url = `${BASE_URL}/articles/${encodedId}`;

  return await fetchWithErrorHandling(url);
}

export async function getComments(
  id: string | undefined,
  limit: number = 3
): Promise<any> {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  const encodedId = encodeURIComponent(id);
  const encodedLimit = encodeURIComponent(limit);
  const url = `${BASE_URL}/articles/${encodedId}/comments?limit=${encodedLimit}`;

  return await fetchWithErrorHandling(url);
}
