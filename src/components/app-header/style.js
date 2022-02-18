import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;

  .content {
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .redLine {
      width: 100%;
      background-color: #c20c0c;
    }
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
  }

  .select-list {
    display: flex;
    justify-content: space-around;
    line-height: 70px;
    width: 508px;
    .select-list-item {
      position: relative;
      font-size: 14px;
      a {
        padding: 0 19px;
        display: block;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/topbar.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover,
      .active {
        background-color: #000000;
        color: #fff;
        text-decoration: none;
      }
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .header-search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .header-button {
    font-size: 12px;
    color: #ccc;
    width: 90px;
    height: 32px;
    border-radius: 16px;
    text-align: center;
    border: 1px solid #666;
    margin: 0 16px;
    background-color: transparent;
  }
  .login {
    color: #78785d;
  }
  .login:hover {
    text-decoration: underline;
  }
`;
