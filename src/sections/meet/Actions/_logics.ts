"use client";

import { usePostClosestQuestion } from "@/hooks/api/usePostClosestQuestion";
import { useAudioStore } from "@/hooks/store/useAudioStore";
import { MouseEventHandler, useCallback, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";

export const useLogics = () => {
  const { mutate } = usePostClosestQuestion();

  const { setIsRecording, setMediaRecorder, setMediaStream } = useAudioStore(
    useShallow((state) => ({
      setIsRecording: state.setIsRecording,
      setMediaStream: state.setMediaStream,
      setMediaRecorder: state.setMediaRecorder,
    }))
  );

  const { isRecording, mediaRecorder, mediaStream } = useAudioStore(
    useShallow((state) => ({
      isRecording: state.isRecording,
      mediaRecorder: state.mediaRecorder,
      mediaStream: state.mediaStream,
    }))
  );

  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleMuteMicrophone = useCallback(() => {
    if (mediaStream) {
      setIsRecording(false);
      mediaStream.getAudioTracks().forEach((track) => (track.enabled = false));
      mediaRecorder?.stop();
    }
  }, [mediaStream, setIsRecording, mediaRecorder]);

  const handleUnmuteMicrophone = useCallback(() => {
    if (mediaStream) {
      mediaStream.getAudioTracks().forEach((track) => (track.enabled = true));
    }
  }, [mediaStream]);

  const handleStartRecording = useCallback(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: { sampleRate: 16000 } })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          setMediaStream(stream);
          setMediaRecorder(mediaRecorder);
          audioChunksRef.current = []; // Reset the ref's value

          mediaRecorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
              audioChunksRef.current.push(event.data);
            }
          };

          mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, {
              type: "audio/mpeg",
            });

            mutate({ file: audioBlob });
            setAudioChunks(audioChunksRef.current); // Update state with the latest chunks
          };

          mediaRecorder.start();
          setIsRecording(true);
        })
        .catch((e) => {
          alert(e.message);
        });
    }
  }, [setIsRecording, setMediaRecorder, setMediaStream, mutate]);

  const handleMicrophone: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      if (isRecording) return handleMuteMicrophone();

      handleUnmuteMicrophone();
      handleStartRecording();
    },
    [isRecording, handleMuteMicrophone, handleStartRecording]
  );

  return { handleMicrophone, isRecording };
};
