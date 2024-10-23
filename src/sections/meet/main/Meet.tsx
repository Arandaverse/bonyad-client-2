"use client";

import { BrandLogo, LoadingScreen } from "@/components";
import { useGetUserMeets } from "@/hooks/api/useGetUserMeets";
import { useGetUserProfile } from "@/hooks/api/useGetUserProfile";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mo_content } from "./Meet.motion";
import { MeetItemStyled, MeetStyled, PStyled } from "./Meet.styled";

export const Meet = () => {
  const router = useRouter();
  const { data: userMeets, isLoading, isError } = useGetUserMeets();
  const { data: userProfile } = useGetUserProfile();

  if (isLoading) return <LoadingScreen />;

  return (
    <MeetStyled>
      <motion.div {...mo_content}>
        {userMeets?.length ? (
          userMeets.map((userMeet, userMeet_i) => (
            <Link href={`/meet/${userMeet.meet.uid}`} key={userMeet_i}>
              <MeetItemStyled>
                <PStyled>{userMeet.meet.uid}</PStyled>
                <PStyled onlineNumber>ONLINE: {userMeet.online_people}</PStyled>
              </MeetItemStyled>
            </Link>
          ))
        ) : (
          <></>
        )}
      </motion.div>
      <Button
        disabled={!!userMeets?.length}
        startIcon={<AddIcon />}
        onClick={() => router.push(process.env.NEXT_PUBLIC__ROUTE_ROOMS)}
      >
        {!!userMeets?.length ? "YOU HAVE A MEET" : "CREATE ROOM"}
      </Button>
      <BrandLogo />
    </MeetStyled>
  );
};
