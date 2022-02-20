import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
  width: 100px;
  height: 150px;
  cursor: pointer;
  .img {
    width: 100px;
    height: 100px;
  }

  .name {
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .author {
    font-size: 12px;
    color: #666666;
    margin-top: -13px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    & > span:last-of-type > span:last-of-type {
      display: none;
    }
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .cover {
    width: 118px;
    height: 100px;
    background-position: 0 -570px;
    margin-top: -151px;
  }
`;
