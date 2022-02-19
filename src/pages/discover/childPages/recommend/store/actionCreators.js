import * as actionType from "./constants";
import { getTopBanners, getHotRecommends } from "@/services/recomment";

const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
});

//如果需要修改，就dispatch到action
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendAction = (res) => ({
  type: actionType.CHANGE_HOST_RECOMMEND,
  hotRecommends: res.data.result,
});

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};
