export interface IExperienceProps {
  room: string;
  character: string;
}

export interface IModelProps {
  file: string;
}

export interface IQuestion {
  similar_question: string;
  similarity: number;
  response_index: number;
}
export interface IQuestionFormData {
  file: File | Blob | any;
}

export interface IVideoPlayerProps {}
