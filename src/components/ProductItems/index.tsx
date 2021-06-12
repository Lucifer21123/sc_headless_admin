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

//! import emotion Icons
import likeSvg from "assets/images/Product/viewProduct/like.svg";
import heartSvg from "assets/images/Product/viewProduct/heart.svg";
import joySvg from "assets/images/Product/viewProduct/joy.svg";
import wowSvg from "assets/images/Product/viewProduct/wow.svg";
import angrySvg from "assets/images/Product/viewProduct/angry.svg";
import Progress from "components/Progress";

const ProductItems = ({ item }) => {
  const [hide, setHide] = useState(true);
  return (
    <ProductItemContainer>
      <ProductHeader>
        <LeftContainer>
          <ProductItemPhoto>
            {item.isPhoto ? (
              <div className="img-container">
                <img src={item.src} />
              </div>
            ) : (
              <span>D</span>
            )}
          </ProductItemPhoto>
          <ProductItemInfo>
            <ProductItemInfoHeader>{item.title}</ProductItemInfoHeader>
            <ProductItemInfoUL>
              <ProductItemLi>
                Sku: <span>{item.sku}</span>
              </ProductItemLi>
              <ProductItemLi>
                Qty: <span>{item.Qty}</span>
              </ProductItemLi>
              <ProductItemLi>{item.price}</ProductItemLi>
            </ProductItemInfoUL>
          </ProductItemInfo>
        </LeftContainer>
        <RightContainer>
          <ProductReactions>
            <Reaction comments={item.comments}></Reaction>
          </ProductReactions>
          <ProductItemsListControl>
            <a>
              <b>Boost</b>
            </a>
            <a>Edit</a>
            <a>Delete</a>
            <a>
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
                <h3>{item.views}</h3>
                <span>Views</span>
              </StatisticNumberBox>
              <StatisticNumberBox>
                <h3>{item.clicks}</h3>
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
                <b>{item.reactions}</b>
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>comments</span>
                <b>{item.comments}</b>
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>added to timeline</span>
                <b>{item.timeline}</b>
              </StaticBoxPostLi>
              <StaticBoxPostLi>
                <span>shared</span>
                <b>{item.shared}</b>
              </StaticBoxPostLi>
            </StatisticBoxPost>
          </StatisticBoxHeader>
          <StatisticBoxReaction>
            <h4>Reactions</h4>
            <StatisticBoxEmotion>
              <ul>
                <li>
                  <Progress
                    height={item.likepercent}
                    color="#3c6ecd"
                  ></Progress>
                  <img src={likeSvg}></img>
                  <span>like</span>
                  <strong>{item.like}</strong>
                </li>
                <li>
                  <Progress
                    height={item.lovepercent}
                    color="#ff613b"
                  ></Progress>
                  <img src={heartSvg}></img>
                  <span>love</span>
                  <strong>{item.love}</strong>
                </li>
                <li>
                  <Progress height={item.joypercent} color="#ffc200"></Progress>
                  <img src={joySvg}></img>
                  <span>joy</span>
                  <strong>{item.joy}</strong>
                </li>

                <li>
                  <Progress height={item.wowpercent} color="#ffc200"></Progress>
                  <img src={wowSvg}></img>
                  <span>wow</span>
                  <strong>{item.wow}</strong>
                </li>
                <li>
                  <Progress
                    height={item.angrypercent}
                    color="#ffc200"
                  ></Progress>
                  <img src={angrySvg}></img>
                  <span>angry</span>
                  <strong>{item.angry}</strong>
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
              <b>{item.fans}</b>
            </li>
            <li>
              non-fans
              <b>{item.nonfans}</b>
            </li>
            <li>
              organic
              <b>{item.organic}</b>
            </li>
            <li>
              paid
              <b>{item.paid}</b>
            </li>
          </ul>
          <ul>
            <h3>Conversion</h3>
            <li>
              Ad cost
              <b>{item.cost}</b>
            </li>
            <li>
              Ad spent
              <b>{item.spent}</b>
            </li>
            <li>
              CPC
              <b>{item.cpc}</b>
            </li>
            <li>
              CPV
              <b>{item.cpv}</b>
            </li>
            <li>
              Added to Cart
              <b>{item.addcart}</b>
            </li>
            <li>
              Sales
              <b>{item.sales}</b>
            </li>
          </ul>
        </ReachAndConversation>
      </ProductItemBody>
    </ProductItemContainer>
  );
};

export default ProductItems;
