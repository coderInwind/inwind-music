import React, { memo } from "react";
import { RecommendLeftWrapper } from "./style";

import ThemeHeaderRcm from "@/components/theme-header-rcm/index";
import HotRecommend from "./child-cpns/hot-recommend";

const RecommendLeft = function RecommendLeft() {
  return (
    <RecommendLeftWrapper>
      <ThemeHeaderRcm
        title={"热门推荐"}
        tabs={["华语", "热门", "摇滚", "民谣", "电子"]}
        more={"更多"}
      ></ThemeHeaderRcm>
      <HotRecommend></HotRecommend>

      <ThemeHeaderRcm title={"新碟上架"} more={"更多"}></ThemeHeaderRcm>
      <ThemeHeaderRcm title={"榜单"} more={"更多"}></ThemeHeaderRcm>
    </RecommendLeftWrapper>
  );
};

export default memo(RecommendLeft);
