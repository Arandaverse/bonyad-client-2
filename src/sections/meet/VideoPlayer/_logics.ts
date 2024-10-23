import { useVideoPlayerStore } from "@/hooks/store/useVideoPlayerStore";
import { useCallback, useEffect, useRef } from "react";

export const useLogics = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { activeVideoIndex, setActiveVideoIndex } = useVideoPlayerStore();

  useEffect(() => {
    if (videoRef.current) {
      console.log(videoRef.current);
      videoRef.current.pause();
      videoRef.current.src = `/videos/${activeVideoIndex}.mp4`;
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [activeVideoIndex]);

  const handleVideoEnd = useCallback(() => {
    setActiveVideoIndex(0);
  }, [activeVideoIndex]);

  return { videoRef, handleVideoEnd, activeVideoIndex };
};
