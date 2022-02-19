import React, { memo } from "react";

import { RecommendWrapper } from "./style";
import TopBanners from "./child-cpns/topBanners";
import RecommendLeft from "./child-cpns/recommend-left";
import RecommendRight from "./child-cpns/recommend-right";

function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanners></TopBanners>
      <div className="content">
        <RecommendLeft></RecommendLeft>
        <RecommendRight></RecommendRight>
      </div>
    </RecommendWrapper>
  );
}

//不使用HOOKS
// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

export default memo(Recommend);
