import React from "react";
import * as S from "./style";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";

interface Iprops {
  AvatarPic: string;
  avatarName: string;
}

const MenuAvatar = ({ avatarName, AvatarPic }: Iprops) => {
  const avatarNameSize = () => {
    if (avatarName && avatarName.length < 15) return avatarName;

    return avatarName && avatarName.substring(0, 15) + "...";
  };

  return (
    <S.GridContainer textAlign="center" justifyContent="center">
      <S.GridItem2>
        <Avatar
          src={AvatarPic}
          alt="User profile picture"
          style={{ marginLeft: -10 }}
          sx={{ width: 65, height: 65 }}
        />
      </S.GridItem2>

      <S.GridItem>{avatarNameSize()}</S.GridItem>

      <S.GridItem>
        <Divider color="white" variant="fullWidth" />
      </S.GridItem>
    </S.GridContainer>
  );
};

export default MenuAvatar;
