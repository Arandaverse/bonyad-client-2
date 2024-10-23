import { IVideoPlayerProps } from "@/types/app/play/play.types";
import React from "react";
import { useLogics } from "./_logics";
import { ContainerStyled, OverStyled } from "./VideoPlayer.styled";
import { mo_over, mo_player } from "./VideoPlayer.motion";
import { motion } from "framer-motion";

const VideoPlayer = () => {
  const { videoRef, handleVideoEnd, activeVideoIndex } = useLogics();

  return (
    <motion.div {...mo_player}>
      <ContainerStyled>
        {/* <motion.div {...mo_over}>
          <OverStyled></OverStyled>
        </motion.div> */}
        <video
          ref={videoRef}
          loop={false}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            // display: activeVideoIndex ? "flex" : "none",
          }}
          onEnded={handleVideoEnd}
        >
          Your browser does not support the video tag.
        </video>
          <video
              src={'/videos/0.mp4'}
              autoPlay={true}
              style={{
                  width: "100vw",
                  height: "100vh",
                  objectFit: "cover",
              }}
          >
              Your browser does not support the video tag.
          </video>
      </ContainerStyled>
    </motion.div>
  );
};

export default VideoPlayer;
