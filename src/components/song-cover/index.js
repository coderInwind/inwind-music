import React, { memo } from "react";
import { SongCoverWrapper } from "./style";

import { formatCount, formatImg } from "@/utils/format-utils";

const SongCover = function SongCover(props) {
  const { recommendItem } = props;
  const { picUrl, name, copywriter, playCount } = recommendItem;

  return (
    <SongCoverWrapper>
      <img src={formatImg(picUrl, 140)} alt={name} />
      <div className="sprite-coverall cover"></div>
      <div className="bottom sprite-coverall ">
        <span className="sprite-iconall headset"></span>
        <span className="nb">{formatCount(playCount)}</span>
        <a href="/#" className="sprite-iconall play"></a>
      </div>

      <p className="name">{name}</p>
      <p className="source">
        <span>by </span>
        <span>{copywriter}</span>
      </p>
    </SongCoverWrapper>
  );
};
export default memo(SongCover);
