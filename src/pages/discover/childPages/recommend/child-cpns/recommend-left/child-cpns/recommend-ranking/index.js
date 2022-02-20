import ThemeHeaderRcm from "@/components/theme-header-rcm/index";
import { RecommendRankingWrapper } from "./style";
import TopList from "@/components/topList";

import { getTopListAction } from "../../../../store/actionCreators";

import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function RecommendRanking() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    console.log("23", originRanking);
  });
  return (
    <RecommendRankingWrapper>
      <ThemeHeaderRcm title={"榜单"} more={"更多"}></ThemeHeaderRcm>
      <div className="ranking index_bill">
        <TopList ranking={upRanking}></TopList>
        <TopList ranking={newRanking}></TopList>
        <TopList ranking={originRanking}></TopList>
      </div>
    </RecommendRankingWrapper>
  );
}
export default memo(RecommendRanking);
