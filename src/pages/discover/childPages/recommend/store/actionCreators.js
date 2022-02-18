import * as actionType from "./constants";
import { getTopBanners } from "@/services/recomment";

const changeTopBannerAction = (res) => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.data.banners,
});

//dispatch转向
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      console.log(res);
      dispatch(changeTopBannerAction(res));
    });
  };
};
