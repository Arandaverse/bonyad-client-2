"use client";

import * as Yup from "yup";

export const signUpResolver = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  avatar_url: Yup.string().required("Avatar is required"),
  avatar_cover_url: Yup.string().required("Avatar is required"),
  avatar_id: Yup.string(),
});
