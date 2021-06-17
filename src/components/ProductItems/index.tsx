import Reaction from "components/Reaction";
import { useState } from "react";

import {
  ProductItemContainer,
  LeftContainer,
  ProductHeader,
  ProductItemInfo,
  ProductItemInfoHeader,
  ProductItemInfoUL,
  ProductItemLi,
  ProductItemPhoto,
  ProductItemsListControl,
  ProductReactions,
  RightContainer,
  ProductItemBody,
  ReachAndConversation,
  StaticBoxPostLi,
  StatisticBox,
  StatisticBoxEmotion,
  StatisticBoxHead,
  StatisticBoxHeader,
  StatisticBoxPost,
  StatisticBoxReaction,
  StatisticNumberBox,
} from "./index.style";

import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";

//!import isEmpty
import isEmpty from "utils/is-empty";

//! import emotion Icons
import likeSvg from "assets/images/Product/viewProduct/like.svg";
import heartSvg from "assets/images/Product/viewProduct/heart.svg";
import joySvg from "assets/images/Product/viewProduct/joy.svg";
import wowSvg from "assets/images/Product/viewProduct/wow.svg";
import angrySvg from "assets/images/Product/viewProduct/angry.svg";
import Progress from "components/Progress";

const ProductItems = ({ item }) => {
  const [hide, setHide] = useState(true);

  const productItemPhoto = item.node.mutable.public;

  const productInfo = {
    qty: item.node.soh,
    totalvariants: item.node.total_variants,
    sku: item.node.sku,
    price: item.node.formatted_price,
  };

  const staticboxData = item.node.reporting.engagement;

  let feedback = {
    like: 0,
    wow: 0,
    haha: 0,
    love: 0,
    angry: 0,
    comments: item.node.reporting.engagement.comments,
  };

  const reach = item.node.internal.reach;

  const conversion = item.node.internal.conversion;

  if (!isEmpty(item.node.reporting.feedback)) {
    console.log("aaa");
    item.node.reporting.feedback.map((item, key) => {
      switch (item.reaction) {
        case "Like":
          feedback.like = item.len;
          break;
        case "Haha":
          feedback.wow = item.len;
          break;
        case "Love":
          feedback.haha = item.len;
          break;
        case "Wow":
          feedback.love = item.len;
          break;
        case "Angry":
          feedback.angry = item.len;
          break;
      }
    });
  }

  return (
    <ProductItemContainer>
      <ProductHeader hide={hide}>
        <LeftContainer>
          <ProductItemPhoto>
            {productItemPhoto.image.url != "" ? (
              <div className="img-container">
                <img src={productItemPhoto.image.url} />
              </div>
            ) : (
              <span>D</span>
            )}
          </ProductItemPhoto>
          <ProductItemInfo>
            <ProductItemInfoHeader>
              {productItemPhoto.title}
            </ProductItemInfoHeader>
            <ProductItemInfoUL>
              <ProductItemLi>
                Sku: <span>{productInfo.sku}</span>
              </ProductItemLi>
              <ProductItemLi>
                Qty: <span>{productInfo.qty}</span>
              </ProductItemLi>
              <ProductItemLi>
                Total Variants: <span>{productInfo.totalvariants}</span>
              </ProductItemLi>
              <ProductItemLi>${productInfo.price}</ProductItemLi>
            </ProductItemInfoUL>
          </ProductItemInfo>
        </LeftContainer>
        <RightContainer>
          <ProductReactions>
            <Reaction comments={feedback}></Reaction>
          </ProductReactions>
          <ProductItemsListControl>
            <a>
              <b>Boost</b>
            </a>
            <a>Edit</a>
            <a>Delete</a>
            <a className="openFill">
              {hide ? (
                <BiChevronDown
                  size={20}
                  color="#315293"
                  onClick={() => {
                    setHide(!hide);
                  }}
                ></BiChevronDown>
              ) : (
                <BiChevronUp
                  size={20}
                  color="#315293"
                  onClick={() => {
                    setHide(!hide);
                  }}
                ></BiChevronUp>
              )}
            </a>
          </ProductItemsListControl>
        </RightContainer>
      </ProductHeader>
      <ProductItemBody hide={hide}>
        <StatisticBox>
          <StatisticBoxHeader>
            <StatisticBoxHead>
              <StatisticNumberBox>
                <h3>{staticboxData.views}</h3>
                <span>Views</span>
              </StatisticNumberBox>
              <StatisticNumberBox>
                <h3>{staticboxData.views}</h3>
                <span>Clicks</span>
              </StatisticNumberBox>
            </StatisticBoxHead>
            <StatisticBoxPost>
              <StaticBoxPostLi>
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
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>comments</span>
                <b>{staticboxData.feedback}</b>
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>added to timeline</span>
                <b>{staticboxData.timeline}</b>
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>shared</span>
                <b>{staticboxData.shares}</b>
              </StaticBoxPostLi>
            </StatisticBoxPost>
          </StatisticBoxHeader>
          <StatisticBoxReaction>
            <h4>Reactions</h4>
            <StatisticBoxEmotion>
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
            </StatisticBoxEmotion>
          </StatisticBoxReaction>
        </StatisticBox>
        <ReachAndConversation>
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
        </ReachAndConversation>
      </ProductItemBody>
    </ProductItemContainer>
  );
};

export default ProductItems;
