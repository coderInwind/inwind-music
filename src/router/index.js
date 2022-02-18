import Discover from "@/pages/discover";
import Friend from "@/pages/friend";
import mine from "@/pages/mine";

import Recommend from "@/pages/discover/childPages/recommend/index";
import Toplist from "@/pages/discover/childPages/toplist/index";
import Artist from "@/pages/discover/childPages/artist/index";
import Djradio from "@/pages/discover/childPages/djradio/index";
import Album from "@/pages/discover/childPages/album/index";
import Paylist from "@/pages/discover/childPages/paylist/index";

import { Redirect } from "react-router-dom";

const routes = [
  // 进行重定向
  { path: "/", exact: true, render: () => <Redirect to={"/discover"} /> },
  {
    path: "/discover",
    component: Discover,
    routes: [
      { path: "/discover", exact: true, render: () => <Redirect to={"/discover/recommend"} /> },
      { path: "/discover/recommend", component: Recommend },
      { path: "/discover/toplist", component: Toplist },
      { path: "/discover/artist", component: Artist },
      { path: "/discover/djradio", component: Djradio },
      { path: "/discover/album", component: Album },
      { path: "/discover/paylist", component: Paylist },
    ],
  },
  { path: "/friend", component: Friend },
  { path: "/mine", component: mine },
];

export default routes;
