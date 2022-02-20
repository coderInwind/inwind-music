import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../../../store/actionCreators";

import { NewAlbumWrapper } from "./style";
import ThemeHeaderRcm from "@/components/theme-header-rcm/index";
import { Carousel } from "antd";
import AlbumCover from "@/components/album-cover/index";

function NewAlbum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const bannersRef = useRef();

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm title={"新碟上架"} more={"更多"}></ThemeHeaderRcm>
      <div className="banners">
        <Carousel dots={false} ref={bannersRef}>
          {[0, 1, 2].map((item) => {
            return (
              <div key={item} className="page">
                {newAlbums.slice(item * 4, (item + 1) * 4).map((iten) => {
                  return (
                    <AlbumCover
                      key={iten.id}
                      imgUrl={iten.picUrl}
                      name={iten.name}
                      author={iten.artists}
                    ></AlbumCover>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
        <div className="sprite-index left" onClick={(e) => bannersRef.current.prev()}></div>
        <div className="sprite-index right" onClick={(e) => bannersRef.current.next()}></div>
      </div>
    </NewAlbumWrapper>
  );
}
export default memo(NewAlbum);
