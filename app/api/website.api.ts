// website.api.ts

import axios from "axios";

export const websiteApi =
  axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_API_URL,

  });



export const getAllGallery = async () => {
  const response = await websiteApi.get("/gallery");
  return response.data;
};