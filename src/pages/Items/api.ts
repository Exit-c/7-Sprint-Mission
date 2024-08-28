import { PostProduct } from "../../types/product";

export const getProductItem = async (
  currentPage: number = 1,
  pageSize: number,
  order: string
): Promise<any> => {
  try {
    const encodedPage = encodeURIComponent(currentPage);
    const encodedPageSize = encodeURIComponent(pageSize);
    const encodedOrder = encodeURIComponent(order);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrder}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product items:", error);
  }
};

export const getProductDetailItem = async (
  id: string | undefined
): Promise<any> => {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail item:", error);
  }
};

export const getProductDetailComments = async (
  id: string | undefined
): Promise<any> => {
  if (id === undefined) {
    console.log("Error: Product ID is undefined");
    return;
  }

  try {
    const encodedId = encodeURIComponent(id);

    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${encodedId}/comments?limit=3`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching product detail comments:", error);
  }
};

export const postAddItem = async (data: PostProduct) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Product POST 요청에 실패했습니다", error);
  }
};

export const postUploadImage = async (imgFile: FormData) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/images/upload`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: imgFile,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Image POST 요청에 실패했습니다", error);
  }
};

export const editItem = async (data: PostProduct, id: number) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Product PATCH 요청에 실패했습니다", error);
  }
};

export const deleteProduct = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Product DELETE 요청에 실패했습니다", error);
  }
};

export const postComment = async (id: number, content: string) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products/${id}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Comment POST 요청에 실패했습니다", error);
  }
};

export const editComment = async (id: number, content: string) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/comments/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Comment PATCH 요청에 실패했습니다", error);
  }
};

export const deleteComment = async (id: number) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/comments/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Comment Delete 요청에 실패했습니다", error);
  }
};
