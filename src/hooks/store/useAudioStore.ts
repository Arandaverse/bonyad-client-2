import { create } from "zustand";

export interface IAudioStore {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;

  mediaStream?: MediaStream;
  setMediaStream: (mediaStream: MediaStream) => void;

  mediaRecorder?: MediaRecorder;
  setMediaRecorder: (mediaRecorder: MediaRecorder) => void;
}

export const useAudioStore = create<IAudioStore>((set) => ({
  isRecording: false,
  setIsRecording: (isRecording: boolean) => {
    set({ isRecording });
  },

  setMediaStream: (mediaStream: MediaStream) => {
    set({ mediaStream });
  },

  setMediaRecorder: (mediaRecorder: MediaRecorder) => {
    set({ mediaRecorder });
  },
}));
