"use client";

import { useMutation } from "@tanstack/react-query";
import { useApi } from "./useApi";
import { IQuestion, IQuestionFormData } from "@/types/app/play/play.types";
import { useVideoPlayerStore } from "../store/useVideoPlayerStore";

export const usePostClosestQuestion = () => {
  const api = useApi();
  const { setActiveVideoIndex } = useVideoPlayerStore();

  return useMutation({
    mutationKey: ["POST_CLOSEST_QUESTION"],
    mutationFn: async (data: IQuestionFormData) => {
      try {
        const formData = new FormData();
        formData.append("file", data.file);

        const response = await api.post<IQuestion>(
          "/get-closest-question",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        return response.data;
      } catch (error: any) {
        throw new Error(`Error fetching meet: ${error.message}`);
      }
    },
    onSuccess: (res) => {
      setActiveVideoIndex(res?.response_index || 0);
    },
  });
};
