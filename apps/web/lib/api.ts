// // import { auth } from "@clerk/nextjs/server";

// export async function apiClient(endpoint: string, options: RequestInit = {}) {
//   const session = await auth();
//   const token = await session.getToken();

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//     ...options.headers,
//   };

//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
//     {
//       ...options,
//       headers,
//     }
//   );

//   if (!response.ok) {
//     throw new Error("API request failed");
//   }

//   return response.json();
// }
