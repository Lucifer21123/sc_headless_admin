import { useState } from "react";
import * as Page from "./index.style";
import likeSvg from "assets/images/Product/viewProduct/like.svg";
import heartSvg from "assets/images/Product/viewProduct/heart.svg";
import joySvg from "assets/images/Product/viewProduct/joy.svg";
import wowSvg from "assets/images/Product/viewProduct/wow.svg";
import angrySvg from "assets/images/Product/viewProduct/angry.svg";
import Progress from "components/Progress";
const AsideSection = () => {
  const feedback = {
    like: 100,
    love: 90,
    haha: 10,
    wow: 20,
    angry: 0,
  };
  const staticboxData = {
    feedback: 437,
    timeline: 8,
    shares: 6,
  };
  const conversion = {
    ad_cost: "$49.90",
    ad_spent: 8,
    cost_per_click: 20,
    cost_per_view: 34,
    added_to_cart: 20,
    sales: 34,
  };
  const reach = {
    fans: 65,
    non_fans: 8,
    organic: 20,
    paid: 34,
  };
  return (
    <Page.ScrollDiv>
      <Page.StatisticBox>
        <Page.StatisticBoxHeader>
          <Page.StatisticBoxHead>
            <Page.StatisticNumberBox>
              <h3>200K</h3>
              <span>Views</span>
            </Page.StatisticNumberBox>
            <Page.StatisticNumberBox>
              <h3>500K</h3>
              <span>Clicks</span>
            </Page.StatisticNumberBox>
          </Page.StatisticBoxHead>
          <Page.StatisticBoxPost>
            <Page.StaticBoxPostLi>
              <span>reactions</span>
              <ul>
                <li>
                  <img src={likeSvg} />
                </li>
                <li>
                  <img src={heartSvg} />
                </li>
                <li>
                  <img src={joySvg} />
                </li>
                <li>
                  <img src={wowSvg} />
                </li>
                <li>
                  <img src={angrySvg} />
                </li>
              </ul>
              <b>{staticboxData.feedback}</b>
            </Page.StaticBoxPostLi>
            <Page.StaticBoxPostLi>
              <span>comments</span>
              <b>{staticboxData.feedback}</b>
            </Page.StaticBoxPostLi>
            <Page.StaticBoxPostLi>
              <span>added to timeline</span>
              <b>{staticboxData.timeline}</b>
            </Page.StaticBoxPostLi>
            <Page.StaticBoxPostLi>
              <span>shared</span>
              <b>{staticboxData.shares}</b>
            </Page.StaticBoxPostLi>
          </Page.StatisticBoxPost>
        </Page.StatisticBoxHeader>
        <Page.StatisticBoxReaction>
          <h4>Reactions</h4>
          <Page.StatisticBoxEmotion>
            <ul>
              <li>
                <Progress
                  height={feedback.like + "px"}
                  color="#3c6ecd"
                ></Progress>
                <img src={likeSvg}></img>
                <span>like</span>
                <strong>{feedback.like}</strong>
              </li>
              <li>
                <Progress
                  height={feedback.love + "px"}
                  color="#ff613b"
                ></Progress>
                <img src={heartSvg}></img>
                <span>love</span>
                <strong>{feedback.love}</strong>
              </li>
              <li>
                <Progress
                  height={feedback.haha + "px"}
                  color="#ffc200"
                ></Progress>
                <img src={joySvg}></img>
                <span>joy</span>
                <strong>{feedback.haha}</strong>
              </li>

              <li>
                <Progress
                  height={feedback.wow + "px"}
                  color="#ffc200"
                ></Progress>
                <img src={wowSvg}></img>
                <span>wow</span>
                <strong>{feedback.wow}</strong>
              </li>
              <li>
                <Progress
                  height={feedback.angry + "px"}
                  color="#ffc200"
                ></Progress>
                <img src={angrySvg}></img>
                <span>angry</span>
                <strong>{feedback.angry}</strong>
              </li>
            </ul>
          </Page.StatisticBoxEmotion>
        </Page.StatisticBoxReaction>
        <Page.ReachAndConversation>
          <ul>
            <h3>Reach</h3>
            <li>
              fans
              <b>{reach.fans}</b>
            </li>
            <li>
              non-fans
              <b>{reach.non_fans}</b>
            </li>
            <li>
              organic
              <b>{reach.organic}</b>
            </li>
            <li>
              paid
              <b>{reach.paid}</b>
            </li>
          </ul>
          <ul>
            <h3>Conversion</h3>
            <li>
              Ad cost
              <b>{conversion.ad_cost}</b>
            </li>
            <li>
              Ad spent
              <b>{conversion.ad_spent}</b>
            </li>
            <li>
              CPC
              <b>{conversion.cost_per_click}</b>
            </li>
            <li>
              CPV
              <b>{conversion.cost_per_view}</b>
            </li>
            <li>
              Added to Cart
              <b>{conversion.added_to_cart}</b>
            </li>
            <li>
              Sales
              <b>{conversion.sales}</b>
            </li>
          </ul>
        </Page.ReachAndConversation>
      </Page.StatisticBox>
    </Page.ScrollDiv>
  );
};
export default AsideSection;
