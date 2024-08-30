// import { PostProduct } from "../../types/product";

// export const getProductItem = async (
//   currentPage: number = 1,
//   pageSize: number,
//   order: string
// ) => {
//   try {
//     const encodedPage = encodeURIComponent(currentPage);
//     const encodedPageSize = encodeURIComponent(pageSize);
//     const encodedOrder = encodeURIComponent(order);

//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products?page=${encodedPage}&pageSize=${encodedPageSize}&orderBy=${encodedOrder}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching product items:", error);
//   }
// };

// export const getProductDetailItem = async (id: string | undefined) => {
//   if (id === undefined) {
//     console.log("Error: Product ID is undefined");
//     return;
//   }

//   try {
//     const encodedId = encodeURIComponent(id);

//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${encodedId}`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching product detail item:", error);
//   }
// };

// export const getProductDetailComments = async (id: string | undefined) => {
//   if (id === undefined) {
//     console.log("Error: Product ID is undefined");
//     return;
//   }

//   try {
//     const encodedId = encodeURIComponent(id);

//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${encodedId}/comments?limit=3`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error("Error fetching product detail comments:", error);
//   }
// };

// export const postAddItem = async (data: PostProduct) => {
//   const token = localStorage.getItem("accessToken");

//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Product POST 요청에 실패했습니다", error);
//   }
// };

// export const postUploadImage = async (imgFile: FormData) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/images/upload`,
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: imgFile,
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Image POST 요청에 실패했습니다", error);
//   }
// };

// export const editItem = async (data: PostProduct, id: number) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(data),
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Product PATCH 요청에 실패했습니다", error);
//   }
// };

// export const deleteProduct = async (id: number) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Product DELETE 요청에 실패했습니다", error);
//   }
// };

// export const postComment = async (id: number, content: string) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/products/${id}/comments`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ content }),
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Comment POST 요청에 실패했습니다", error);
//   }
// };

// export const editComment = async (id: number, content: string) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/comments/${id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ content }),
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Comment PATCH 요청에 실패했습니다", error);
//   }
// };

// export const deleteComment = async (id: number) => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch(
//       `https://panda-market-api.vercel.app/comments/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       if (response.status === 401) {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("userId");
//         alert("다시 로그인해 주세요.");
//         window.location.href = "/login";
//       }
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Comment Delete 요청에 실패했습니다", error);
//   }
// };
import { PostProduct } from "../../types/product";

interface RequestOptions {
  method: string;
  headers?: HeadersInit;
  body?: string | FormData;
}

const fetchRequest = async (
  url: string,
  options: RequestOptions
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body,
    });

    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        alert("로그인이 만료되었습니다. 다시 로그인해 주세요.");
        window.location.href = "/login";
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("HTTP 요청에 실패했습니다:", error);
    throw error;
  }
};

export const getProductItem = (
  currentPage = 1,
  pageSize: number,
  order: string
) => {
  const url = `https://panda-market-api.vercel.app/products?page=${encodeURIComponent(
    currentPage
  )}&pageSize=${encodeURIComponent(pageSize)}&orderBy=${encodeURIComponent(
    order
  )}`;
  return fetchRequest(url, { method: "GET" });
};

export const getProductDetailItem = (id: string | undefined) => {
  if (!id) {
    console.error("Error: Product ID is undefined");
    return;
  }
  const url = `https://panda-market-api.vercel.app/products/${encodeURIComponent(
    id
  )}`;
  return fetchRequest(url, { method: "GET" });
};

export const getProductDetailComments = (id: string | undefined) => {
  if (!id) {
    console.error("Error: Product ID is undefined");
    return;
  }
  const url = `https://panda-market-api.vercel.app/products/${encodeURIComponent(
    id
  )}/comments?limit=3`;
  return fetchRequest(url, { method: "GET" });
};

export const postAddItem = (data: PostProduct) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/products`;
  return fetchRequest(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const postUploadImage = (imgFile: FormData) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/images/upload`;
  return fetchRequest(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: imgFile,
  });
};

export const editItem = (data: PostProduct, id: number) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/products/${id}`;
  return fetchRequest(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export const deleteProduct = (id: number) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/products/${id}`;
  return fetchRequest(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postComment = (id: number, content: string) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/products/${id}/comments`;
  return fetchRequest(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
};

export const editComment = (id: number, content: string) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/comments/${id}`;
  return fetchRequest(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ content }),
  });
};

export const deleteComment = (id: number) => {
  const token = localStorage.getItem("accessToken");
  const url = `https://panda-market-api.vercel.app/comments/${id}`;
  return fetchRequest(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
