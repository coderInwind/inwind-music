import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "@/common/local-data";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function Header() {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content">
        <HeaderLeft>
          <a className="logo sprite01" href="#/"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-list-item" key={index}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="header-search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <Button className="header-button">创作者中心</Button>
          <a href="/#" className="login">
            登录
          </a>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
