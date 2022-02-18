import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { TopBannersWrapper } from "./style";
import { Carousel } from "antd";

function TopBanners() {
  //使组件和redux关联
  //拿到state，但默认不会进行浅层比较，意思是当组件的state没有更新还是会刷新组件
  //传入浅层比较的shallowEqual
  //拿到state
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );

  //hooks
  const bannerRef = useRef();
  const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    console.log(topBanners);
  });
  //派发action
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  //图片切换的回调(useCallback,进行缓存，提高性能)
  const bannersChange = useCallback((from, to) => {
    setcurrentIndex(to);
  }, []);

  //其他逻辑
  const bgImage =
    topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <TopBannersWrapper bgImage={bgImage}>
      <div className="banner">
        <div className="left">
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannersChange}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.encodeId}>
                  <img className="img" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="right">
          <div className="sprite03 download"></div>
        </div>
        <div className="btn btnleft" onClick={(e) => bannerRef.current.prev()}></div>
        <div className="btn btnright" onClick={(e) => bannerRef.current.next()}></div>
      </div>
    </TopBannersWrapper>
  );
}

export default memo(TopBanners);
