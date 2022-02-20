import styled from "styled-components";

export const TopListWrapper = styled.div`
  width: 230px;
  height: 470px;

  .title {
    display: flex;
    .img {
      margin: 20px;
      width: 80px;
      height: 80px;
    }

    .s-title {
      h3 {
        font-size: 14px;
        cursor: pointer;
        font-weight: bolder;
        margin-top: 25px;
      }
      .play {
        width: 22px;
        height: 22px;
        background-position: -267px -205px;
        cursor: pointer;
        float: left;

        &:hover {
          background-position: -267px -235px;
        }
      }
      .collect {
        width: 22px;
        height: 22px;
        background-position: -300px -205px;
        cursor: pointer;
        margin-left: 34px;

        &:hover {
          background-position: -300px -235px;
        }
      }
    }
    .cover {
      width: 80px;
      height: 80px;
      margin: 20px;
      cursor: pointer;
      background-position: -145px -57px;
    }
  }

  .list {
    list-style: none;
    margin-left: -10px;

    .item {
      display: flex;
      margin-left: -15px;
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        color: #c10d0c;
      }
      .index {
        display: inline-block;
        font-size: 17px;
        width: 35px;
        height: 32px;
        line-height: 32px;
        text-align: center;
      }
      .name {
        display: inline-block;
        font-size: 12px;
        width: 130px;
        height: 32px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 32px;
        color: #000000;

        &:hover {
          text-decoration: underline;
        }
      }

      &:hover {
        .oper {
          display: block;
        }
      }
      .oper {
        width: 82px;
        height: 32px;
        align-items: center;
        justify-content: space-evenly;
        line-height: 36px;
        display: none;

        .oper1 {
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: -267px -268px;

          &:hover {
            background-position: -267px -288px;
          }
        }
        .oper2 {
          display: inline-block;
          width: 14px;
          height: 14px;
          background-position: 0 -700px;
          margin: 0 8px 0 8px;

          &:hover {
            background-position: -22px -700px;
          }
        }
        .oper3 {
          display: inline-block;
          width: 17px;
          height: 17px;
          background-position: -297px -268px;

          &:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
    .item-all {
      float: right;
      margin-right: 20px;
      height: 32px;
      line-height: 32px;
      font-size: 12px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
