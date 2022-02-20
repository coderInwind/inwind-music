import * as actionType from "./constants";
import { getTopBanners, getHotRecommends, getNewAlbum, getTopList } from "@/services/recomment";

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

const changeNewAlbumAction = (res) => ({
  type: actionType.CHANGE_NEW_ALBUM,
  newAlbums: res.data.albums,
});
//如果传入一个函数就会执行函数，如果传入对象就会直接到reducer里
export const getNewAlbumAction = () => {
  return (dispatch) => {
    getNewAlbum().then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

//返回一个对象
const changeUpRankingAction = (res) => ({
  type: actionType.CHANGE_UP_RANKING,
  upRanking: res.data.playlist,
});

const changeNewRankingAction = (res) => ({
  type: actionType.CHANGE_NEW_RANKING,
  newRanking: res.data.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionType.CHANGE_ORIGIN_RANKING,
  originRanking: res.data.playlist,
});

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;

        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;

        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;

        default:
      }
    });
  };
};
