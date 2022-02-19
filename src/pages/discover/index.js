import React, { memo } from "react";

import { menuList } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Discover = function Discover(props) {
  //props里会有当前路由的routes
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu>
          <div className="space"></div>
          {menuList.map((item, index) => {
            return (
              <NavLink className="menuItem" to={item.link} key={index}>
                {item.title}
              </NavLink>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
};
export default memo(Discover);
