import React, { memo } from "react";

import { TopListWrapper } from "./style";

function TopList(props) {
  const { tracks = [], coverImgUrl, name } = props.ranking;

  return (
    <TopListWrapper>
      <div className="title">
        <img src={coverImgUrl} alt="" className="img" />
        <div className="s-title">
          <h3>{name}</h3>
          <div className="play sprite-index"></div>
          <div className="collect sprite-index"></div>
        </div>
        <a href="/#" className="sprite-coverall cover">
          {" "}
        </a>
      </div>
      <ul className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <li key={item.id} className="item">
              <span className="index">{index + 1}</span>
              <a href="#/" className="name">
                {item.name}
              </a>
              <div className="oper">
                <a href="/#" className="sprite-index oper1">
                  {""}
                </a>
                <a href="/#" className="icon-sprite  oper2">
                  {""}
                </a>
                <a href="/#" className="sprite-index oper3">
                  {""}
                </a>
              </div>
            </li>
          );
        })}
        <li className="item-all">{"查看全部>"}</li>
      </ul>
    </TopListWrapper>
  );
}
export default memo(TopList);
