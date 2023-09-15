import React from "react";
import {
  StyleBar,
  StyleCenterFlexBox,
  StyleFlameFlexBox,
  StyleColumnFlexBox,
  StyleMapAndDetailFlexBox,
  StyleReviewFlexBox,
} from "./style";
import ShopName from "../ShopName";
import NoPhoto from "../NoPhoto";
import { StyleRegularText } from "./style";
import NavAction from "../../01atoms/NavAction";
import PageLink from "../../01atoms/PageLink";
import RegularText from "../../01atoms/RegularText";

const PickUpShopCard = () => {
  return (
    <StyleFlameFlexBox flexDirection="column">
      <ShopName margin="0 0 8px">{"店舗名"}</ShopName>
      <StyleBar />
      <StyleCenterFlexBox justifyContent="space-between">
        <NoPhoto />
        <StyleColumnFlexBox
          flexDirection="column"
          justifyContent="space-between"
        >
          <StyleRegularText fontSize="12px">
            {"ここああああああ"}
          </StyleRegularText>
          <StyleMapAndDetailFlexBox
            flexDirection="column"
            justifyContent="space-between"
          >
            <NavAction
              to={"/"}
              fontSize="12px"
              textDecoration="underline"
              color="#AAAAAA"
            >
              地図で位置を確認
            </NavAction>
            <PageLink
              to="/"
              fontSize="12px"
              textDecoration="underline"
              color="#AAAAAA"
            >
              店舗詳細を見る
            </PageLink>
          </StyleMapAndDetailFlexBox>
        </StyleColumnFlexBox>
      </StyleCenterFlexBox>
      <StyleReviewFlexBox>
        <RegularText fontSize="12px">
          口コミ：{"この店舗はあああaaaaaaaaaaaaaaaaaああああああああ"}
        </RegularText>
      </StyleReviewFlexBox>
    </StyleFlameFlexBox>
  );
};

export default PickUpShopCard;
