import React, { memo } from "react";
import { FooterWrapper } from "./style";

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="left">
          <p className="bottom-link">
            <a href="//st.music.163.com/official-terms/privacy">服务条款</a>
            <span>|</span>
            <a href="//st.music.163.com/official-terms/children">隐私政策</a>
            <span>|</span>
            <a href="//music.163.com/st/staticdeal/complaints.html">儿童策略政策</a>
            <span>|</span>
            <a href="//music.163.com/st/staticdeal/complaints.html">版权投诉指引</a>
            <span>|</span>
            <a href="/#">意见反馈</a>
            <span>|</span>
            <a href="//music.163.com/#/ui/resource">广告合作</a>
          </p>
          <p className="bottom-info1">
            <span>start-time：2022-2-14</span>
            <span>end-time：~~~</span>
            <span>in WuHan</span>
          </p>
          <p className="bottom-info2">
            <span>Developed with React and AntDesign</span>
            <span>by LiuJi -InWind-</span>
          </p>
          <p className="bottom-info3">
            <span>理想主义的花最终会开在浪漫主义的土壤</span>
            <span>我的热情永远不会熄灭在现实的平凡之中</span>
          </p>
        </div>
        <div className="right">
          <ul className="right-icon">
            <li>
              <a href="/#" className="logo1 sprite02"></a>
              <span>Amoed Studio</span>
            </li>
            <li>
              <a href="/#" className="logo2 sprite02"></a>
              <span>用户认证</span>
            </li>
            <li>
              <a href="/#" className="logo3 sprite02"></a>
              <span>独立音乐人</span>
            </li>
            <li>
              <a href="/#" className="logo4 sprite02"></a>
              <span>赞赏</span>
            </li>
            <li>
              <a href="/#" className="logo5 sprite02"></a>
              <span>视频奖励</span>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
});
