import React, { memo } from "react";

import { RecommendWrapper } from "./style";
import TopBanners from "./child-cpns/topBanners";

function Recommend() {
  return (
    <RecommendWrapper>
      <TopBanners></TopBanners>
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
