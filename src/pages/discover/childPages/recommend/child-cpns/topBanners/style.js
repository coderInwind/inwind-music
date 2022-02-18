import styled from "styled-components";

export const TopBannersWrapper = styled.div`
  height: 285px;
  display: flex;
  justify-content: center;
  background-color: aqua;
  background: url(${(props) => props.bgImage}) center/6000px;

  .banner {
    width: 984px;
    height: 285px;
    display: flex;
    .left {
      width: 730px;
      .banner-item {
        .img {
          height: 285px;
        }
      }
    }

    .right {
      width: 254px;
      height: 285px;

      .download {
        width: 254px;
        height: 285px;
      }
    }

    .btnleft {
      width: 37px;
      height: 63px;
      position: absolute;
      cursor: pointer;
      background-position: 0 -360px;
      margin-top: 110px;
      margin-left: -70px;

      &:hover {
        background-position: 0 -430px;
      }
    }

    .btnright {
      width: 37px;
      height: 63px;
      position: absolute;
      margin-left: 1018px;
      margin-top: 110px;
      cursor: pointer;
      background-position: 0 -508px;

      &:hover {
        background-position: 0 -578px;
      }
    }
  }
`;
