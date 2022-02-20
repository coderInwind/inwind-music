import React, { memo } from "react";

import { AlbumCoverWrapper } from "./style";

function AlbumCover(props) {
  const { imgUrl, name, author } = props;
  return (
    <AlbumCoverWrapper>
      <img src={imgUrl} alt="" className="img" />
      <p className="name">{name}</p>
      <p className="author">
        {author.map((item) => {
          return (
            <span key={item.name}>
              <span>{item.name}</span>
              <span>/</span>
            </span>
          );
        })}
      </p>
      <div className="sprite-coverall cover"></div>
    </AlbumCoverWrapper>
  );
}

export default memo(AlbumCover);
