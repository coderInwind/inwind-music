import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../../../store/actionCreators";
import SongCover from "@/components/song-cover";

const HotRecommend = function HotRecommend() {
  //获取store
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch]);

  useEffect(() => {
    console.log(hotRecommends);
  });

  return (
    <HotRecommendWrapper>
      {hotRecommends.map((item) => {
        return <SongCover recommendItem={item} key={item.id}></SongCover>;
      })}
    </HotRecommendWrapper>
  );
};
export default memo(HotRecommend);
