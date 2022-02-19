import styled from "styled-components";

export const ThemeHeaderWrapper = styled.div`
  margin: 20px;
  border-bottom: 2px solid #c10d0c;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  .left {
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    display: flex;

    .title {
      font-size: 20px;
      cursor: pointer;
    }

    .tabs {
      width: 300px;
      display: flex;
      justify-content: space-evenly;
      font-size: 12px;
      a {
        color: #666;
        &:hover {
          text-decoration: underline;
        }
        span {
          color: #ccc;
          margin-left: 15px;
        }

        &:last-of-type {
          span {
            display: none;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    font-size: 12px;
    color: #666;
    .r-icon {
      margin-top: 10px;
      margin-left: 5px;
      width: 12px;
      height: 12px;
      background-position: 0 -240px;
    }
  }
`;
