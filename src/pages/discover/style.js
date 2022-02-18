import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top {
    background-color: #c20c0c;
    height: 29px;
    display: flex;
    justify-content: center;
  }
`;

export const TopMenu = styled.div`
  display: flex;
  width: 1100px;
  .menuItem {
    padding: 0 13px;
    margin: 0 17px;
    color: #fff;
    height: 24px;

    &:hover {
      background-color: #9b0909;
      border-radius: 20px;
    }
    &.active {
      background-color: #9b0909;
      border-radius: 20px;
    }
  }

  .space {
    width: 180px;
  }
`;
