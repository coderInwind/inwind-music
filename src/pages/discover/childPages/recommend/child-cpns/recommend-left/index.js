import React, { memo } from "react";
import { RecommendLeftWrapper } from "./style";

import HotRecommend from "./child-cpns/hot-recommend";
import NewAlbum from "./child-cpns/new-album";
import RecommendRanking from "./child-cpns/recommend-ranking";

const RecommendLeft = function RecommendLeft() {
  return (
    <RecommendLeftWrapper>
      <HotRecommend></HotRecommend>

      <NewAlbum></NewAlbum>

      <RecommendRanking></RecommendRanking>
    </RecommendLeftWrapper>
  );
};

export default memo(RecommendLeft);
