"use client";

import * as Yup from "yup";

export const signInResolver = Yup.object().shape({
  wallet: Yup.string().required("Wallet is required"),
  nickname: Yup.string().required("Nickname is required"),
});
