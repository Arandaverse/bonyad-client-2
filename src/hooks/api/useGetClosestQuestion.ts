"use client";

import { useQuery } from "@tanstack/react-query";
import { useApi } from "./useApi";

export const useGetClosestQuestion = () => {
  const api = useApi();

  return useQuery({
    queryKey: ["GET_CLOSEST_QUESTION"],
    queryFn: async () => {
      try {
        const response = await api.get("/get-closest-question");
        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching rooms: ${error.message}`);
      }
    },
  });
};
