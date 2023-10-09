import React from "react";
import {
  StyleColumnFlexBox,
  StyleFlameFlexBox,
  StyleReviewAndPointFlexbox,
  StyleReviewContents,
  StyleReviewTitle,
} from "./style";
import NoPhoto from "../NoPhoto";
import ShopName from "../ShopName";
import HeartsAndPoints from "../../01atoms/HeartsAndPoint";

const ReviewShopCard = () => {
  return (
    <StyleFlameFlexBox justifyContent="space-between">
      <NoPhoto />
      <StyleColumnFlexBox flexDirection="column">
        <ShopName margin="0 0 15px">{"店舗名をここに表示"}</ShopName>
        <StyleReviewAndPointFlexbox justifyContent="space-between">
          <StyleReviewTitle tag="h5" fontSize="14px" textDecoration="underline">
            {
              "口コみの見出し口コミの見出しだだダダダだだdだダダダだダダダだダダダだ"
            }
          </StyleReviewTitle>
          <HeartsAndPoints points={3} />
        </StyleReviewAndPointFlexbox>
        <StyleReviewContents fontSize="12px">
          飛び込みで入ったのですが笑顔で出迎えてくれました！とか
          とりあえず口コミっぽいのを3行ぐらいで表示させておく。
          3行以上の場合は途中で省略点を入れることほらこんな…
        </StyleReviewContents>
      </StyleColumnFlexBox>
    </StyleFlameFlexBox>
  );
};

export default ReviewShopCard;
