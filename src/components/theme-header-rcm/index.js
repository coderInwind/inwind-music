import React, { memo } from "react";
//除了给默认值的方法，还能用PropType做传值的校验
// import PropTypes from "react";

import { ThemeHeaderWrapper } from "./style";

const ThemeHeaderRCM = function ThemeHeaderRCM(props) {
  const { title, tabs = [], more } = props;
  return (
    <ThemeHeaderWrapper>
      <div className="left sprite-index">
        <div className="title">{title}</div>
        <div className="tabs">
          {tabs.map((item, index) => {
            return (
              <a href="todo" key={index}>
                {item}
                <span>|</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="right">
        <span>{more}</span>
        <div className="sprite-index r-icon"></div>
      </div>
    </ThemeHeaderWrapper>
  );
};
export default memo(ThemeHeaderRCM);
