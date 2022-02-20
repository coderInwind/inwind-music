import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 173px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;

  .content {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;

    .left {
      margin-top: 17px;
      width: 520px;
      height: 115px;
      font-size: 12px;

      .bottom-link {
        display: flex;
        justify-content: space-around;
        a,
        span {
          color: #999;
        }
      }

      .bottom-info1 {
        display: flex;
        justify-content: space-around;
        color: #666;
      }
      .bottom-info2 {
        display: flex;

        justify-content: space-around;
      }
      .bottom-info3 {
        display: flex;
        justify-content: space-around;
      }
    }
    .right {
      .right-icon {
        list-style: none;
        display: flex;
        margin-left: 100px;
        width: 420px;
        justify-content: space-between;
        margin-top: 34px;
        li {
          text-align: center;
          .logo1 {
            display: block;
            width: 50px;
            height: 45px;
            background-position: -63px -456.5px;
            margin-left: 12px;
          }
          .logo2 {
            display: block;
            background-position: -63px -101px;
            width: 50px;
            height: 45px;
          }
          .logo3 {
            display: block;
            background-position: 0 0;
            width: 50px;
            height: 45px;
            margin-left: 5.5px;
          }
          .logo4 {
            display: block;
            background-position: -60px -50px;
            width: 50px;
            height: 45px;
          }
          .logo5 {
            display: block;
            background-position: 0 -101px;
            width: 50px;
            height: 45px;
          }
          span {
            font-size: 12px;
            width: 80px;
            color: #666;
          }
        }
      }
    }
  }
`;
