import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  position: relative;
  .banners {
    background-color: #f5f5f5;
    margin: 20px;
    border: 1px solid #d3d3d3;
    .page {
      margin-left: -10px;
      margin-top: 20px;
      display: flex !important;
      justify-content: space-around;
      width: 500px;

      .page-item {
        img {
          width: 100px;
          height: 100px;
        }
      }
    }

    .left {
      background-position: -260px -75px;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50%;
      margin-left: 2px;
      cursor: pointer;
    }

    .right {
      background-position: -300px -75px;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50%;
      right: 0;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .ant-carousel {
    width: 640px;
    margin: 20px;
  }
`;
