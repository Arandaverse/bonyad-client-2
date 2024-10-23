declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC__PROJECT_NAME: string;
    NEXT_PUBLIC__PROJECT_DESCRIPTION: string;
    NEXT_PUBLIC__API_URL: string;
    NEXT_PUBLIC__IS_EDITOR: boolean;
  }
}
declare global {
  interface Window {
    localStream: MediaRecorder;
  }
}
