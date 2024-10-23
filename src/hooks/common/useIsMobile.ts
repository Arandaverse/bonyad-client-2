"use client";

import { useCallback } from "react";

export const useIsMobile = () => {
  const isTouchDevice = useCallback(() => {
    if (typeof window === "undefined") return false;

    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      // @ts-ignore
      navigator.msMaxTouchPoints > 0
    );
  }, []);

  const isMobileDevice = useCallback(() => {
    if (typeof window === "undefined") return false;

    // @ts-ignore
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent.toLowerCase(),
    );
  }, []);

  return isMobileDevice() || isTouchDevice();
};
