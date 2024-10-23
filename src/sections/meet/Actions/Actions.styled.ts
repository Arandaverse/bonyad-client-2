import { IconButton, styled } from "@mui/material";

export const ActionsStyled = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  gap: "20px",
  right: 0,
  bottom: 0,
  padding: theme.spacing(1),
  margin: theme.spacing(4),
}));

export const IconButtonStyled = styled(IconButton)<{ red?: boolean }>(
  ({ theme, red }) => ({
    padding: theme.spacing(2),
    borderRadius: "100px",
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    ...(red && {
      backgroundColor: "rgba(255, 40, 10, 0.4)",
      color: "#ffffff",
    }),
  })
);
