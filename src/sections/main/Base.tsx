"use client";

import { BrandLogo } from "@/components";
import { motion } from "framer-motion";
import Link from "next/link";
import { mo_content, mo_footer } from "./Base.motion";
import {
  BaseStyled,
  ImageContainerStyled,
  ListStyled,
  PaperStyled,
} from "./Base.styled";
import Image from "next/image";

export const Base = () => {
  return (
    <BaseStyled>
      <motion.div {...mo_content}>
        <ListStyled>
          <Link href={"/play"}>
            <PaperStyled>
              <ImageContainerStyled>
                <Image
                  src="/images/interface/thumb.jpg"
                  alt="Image"
                  fill
                  objectFit="cover"
                />
              </ImageContainerStyled>
            </PaperStyled>
          </Link>
        </ListStyled>
      </motion.div>
      <motion.div {...mo_footer}>
        <BrandLogo />
      </motion.div>
    </BaseStyled>
  );
};
