import styled from "styled-components";

export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 184px;
  margin-bottom: 20px;

  img {
    width: 140px;
    height: 140px;
  }

  .cover {
    position: absolute;
    background-position: 0 0;
    width: 140px;
    height: 140px;
    margin-top: -140px;
  }

  .bottom {
    background-position: 0 -537px;
    position: absolute;
    width: 140px;
    height: 27px;
    margin-top: -27px;
    display: flex;
    align-items: center;

    .headset {
      background-position: 0 -24px;
      width: 14px;
      height: 11px;
      margin-left: 10px;
    }

    .nb {
      font-size: 12px;
      color: #ccc;
      margin-left: 8px;
    }

    .play {
      width: 16px;
      height: 17px;
      margin-left: 40px;
      background-position: 0 0;

      &:hover {
        background-position: 0 -60px;
      }
    }
  }

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
    color: #000;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .source {
    font-size: 12px;

    span:nth-child(1) {
      color: #999;
    }

    span:nth-child(2) {
      color: #666;
    }
  }
`;
