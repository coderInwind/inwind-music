import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../../../store/actionCreators";
import ThemeHeaderRcm from "@/components/theme-header-rcm/index";
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

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        title={"热门推荐"}
        tabs={["华语", "热门", "摇滚", "民谣", "电子"]}
        more={"更多"}
      ></ThemeHeaderRcm>
      <div className="list">
        {hotRecommends.map((item) => {
          return <SongCover recommendItem={item} key={item.id}></SongCover>;
        })}
      </div>
    </HotRecommendWrapper>
  );
};
export default memo(HotRecommend);
