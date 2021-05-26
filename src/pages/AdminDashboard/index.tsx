import React, { useState, useEffect, useRef } from "react";
import AddTimelinDashboard from "../../components/Modals/AddTimelineDashboard";
import UserProfileMenu from "../../components/Modals/UserProfileMenu";
import AddPhoto from "../../components/Modals/AddPhoto";
import { cardData } from "../../data/adminDashboard/cardData";
import { iconGroupData } from "../../data/adminDashboard/iconGroupData";
import { list1Data } from "../../data/adminDashboard/list1Data";
import { locationData } from "../../data/adminDashboard/locationData";
import { momentData } from "../../data/adminDashboard/momentData";
import { reactionsData } from "../../data/adminDashboard/reactionsData";
import { sectionData } from "../../data/adminDashboard/sectionData";
import { smileIconsData } from "../../data/adminDashboard/smileIconsData";
import { swiperWrapperdata } from "../../data/adminDashboard/swiperWrapperdata";
import { table1Data } from "../../data/adminDashboard/table1Data";
import { table2Data } from "../../data/adminDashboard/table2Data";

import {timelineData} from "../../data/adminDashboard/timelineData";
import Timeline from "./Timeline";

interface AdminDashbordProps {

}

const AdminDashboardContent: React.FC<AdminDashbordProps> = () => {
  const [isCard1Open, setIsCard1Open] = useState(false);
  const [isCard2Open, setIsCard2Open] = useState(false);
  const [isLotate, setIsLotate] = useState(false);
  const [isAside, setIsAside] = useState(false);
  const [isSortBox, setIsSortBox] = useState(false);

  const onResize = (e: any) => {
    if (e.target.innerWidth < 992 && !isAside) {
      setIsAside(true);
    } else if (e.target.innerWidth >= 992 && isAside) {
      setIsAside(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  const onGetAside = () => {
    return (
      <section className="section-content">
        <span className="section-content__title position-relative d-flex align-items-center">
          Recent earning
        </span>
        {/* <!-- earning --> */}
        <div className="earning">
          <div className="earning__head d-flex flex-wrap align-items-end">
            <h2 className="earning__title text-dark-blue">Last 5 days</h2>
            <a href="#" className="earning__link">
              change period/range
            </a>
          </div>
          <ul
            className="earning__info-list position-relative d-flex flex-column align-items-start justify-content-center list-unstyled"
            data-scroll="perfect-scrollbar"
          >
            <li className="earning__info-item d-flex align-items-center justify-content-between">
              <span>Total sales</span>
              <span>$ 290 000.00</span>
            </li>
            <li className="earning__info-item earning__info-item--orange d-flex align-items-center justify-content-between">
              <span>Paid to SplitChek</span>
              <span>$ 2 500.00</span>
            </li>
            <li className="earning__info-item earning__info-item--last d-flex align-items-center justify-content-between">
              <span>Total earned</span>
              <span>AUD $ 287 500.00</span>
            </li>
          </ul>

          <div
            className="earning__table earning__table--four table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="sort-box">
              <div className="sort-box__line sort">
                <span className="sort-box__name">State:</span>
                <div className="sort-box__select">
                  <span className={`sort-box__arrow ${isSortBox && 'open'}`}>
                    <strong>QLD</strong>
                    <img
                      src="../../images/icons/navigate_next-24px.svg"
                      alt="arrow" onClick={() => setIsSortBox(!isSortBox)}
                    />
                  </span>
                  <div className="form__single form__single--select form__single--select-default form__single--fluid">
                    <select
                      className="form__select form__select--default"
                      data-toggle="select-parent"
                    >
                      <option value="qld" title="Store Name Two">
                        QLD
                      </option>
                      <option value="qld-2" title="Store Name One OneOne">
                        QLD two
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="table__head d-flex align-items-center">
              <span>Date</span>
              <span>Sales</span>
              <span>Paid to SC</span>
              <span>Total earned</span>
            </div>
            {table1Data.length > 0 ? <div
                className="table__body position-relative"
                data-scroll="perfect-scrollbar"
              >
                {table1Data.map((item: any, index: number) => (
                  <div
                    className="table__row d-flex align-items-center"
                    key={index}
                  >
                    <span>{item.date}</span>
                    <span>{item.sales}</span>
                    <span className="text-orange">{item.paid}</span>
                    <span>{item.tEarned}</span>
                  </div>
                ))}
              </div> :
              <div className="table__body position-relative">
                <div className="table__row d-flex align-items-center">
                  <p>No data to display for this period</p>
                  <figure className="table__img mb-0">
                    <img
                      src="../../images/dashboard/Data_report-bro.svg"
                      alt="img-table"
                    />
                  </figure>
                </div>
              </div>
            }
          </div>

          <div
            className="earning__table earning__table--three table position-relative d-flex flex-column"
            data-scroll="perfect-scrollbar"
          >
            <div className="table__head d-flex align-items-center">
              <span>States</span>
              <span>Orders</span>
              <span>Total earned</span>
            </div>
            {table2Data.length > 0 ?<div
                className="table__body position-relative"
                data-scroll="perfect-scrollbar"
              >
                {table2Data.map((item: any, index: number) => (
                  <div
                    className="table__row d-flex align-items-center"
                    key={index}
                  >
                    <span>{item.states}</span>
                    <span>{item.orders}</span>
                    <span>{item.tEarned}</span>
                  </div>
                ))}
              </div> :
              <div className="table__body position-relative">
                <div className="table__row d-flex align-items-center">
                  <p>No data to display for this period</p>
                  <figure className="table__img mb-0">
                    <img
                      src="../../images/dashboard/Financial_data-bro.svg"
                      alt="img-table"
                    />
                  </figure>
                </div>
              </div>
            }
          </div>
        </div>
        {/* <!-- /earning --> */}
      </section>
    );
  };

  return (
    <div
      className="section-blur theme-background-one"
      data-class="blue"
      id="background"
    >
      <div className="container container--admin">
        <div className="dashboard">
          <div className="main-content position-relative d-flex align-items-start justify-content-between">
          {/* <!-- main --> */}
          <main className="main">
            <div className="toogle-box toogle-box--timeline">
              <div className={`toogle-box__header ${isCard1Open && "open"}`}>
                <div className="toogle-box__header--left">
                  <h3>My timeline</h3>
                </div>
                <a
                  href="#add-timeline-dashboard"
                  data-toggle="modal"
                  data-target="#add-timeline-dashboard"
                  className="new-item position-relative d-flex align-items-center justify-content-start"
                >
                  <span className="position-relative">
                    <i className="icon icon-plus-blue"></i>
                    Add to a timeline
                  </span>
                </a>
                <div className="toogle-box__header--right">
                  <button
                    className="arrow-open"
                    onClick={() => setIsCard1Open(!isCard1Open)}
                  >
                    <img src="../../images/icons/arrow__bottom.svg" alt="arrow" />
                  </button>
                </div>
              </div>
              { (isCard1Open && timelineData.length > 0) ?
                <div className={`toogle-box__body openBody`} >
                  <section className="section-content">
                    <div
                      className="timeline-wrap-scrollbar position-relative"
                      data-scroll="perfect-scrollbar"
                    >
                      <div className="timeline position-relative">
                        <div className="timeline__line"></div>
                        <ul className="timeline__list d-flex flex-column list-unstyled mb-0">
                          {timelineData.map((item: any, index: any) => (
                            <Timeline
                              key={index}
                              info={item.info}
                              time={item.time}
                              adder={item.adder}
                              content={item.content}
                              budget={item.budget}
                              product={item.product}
                              comment={item.comment}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href="#" className="btn-border">
                      Load more
                    </a>
                  </section>
                </div> :
                <div className={`toogle-box__body ${isCard1Open && 'openBody'}`}>
                  <div className="toogle-box__scroll pl-24 pr-20">
                  </div>
                </div>
              }
            </div>
            <div className="toogle-box toogle-box--messages">
              <div className={`toogle-box__header ${isCard2Open && "open"}`}>
                <div className="toogle-box__header--left">
                  <h3>
                    shoppers messages <span>({`${sectionData.length}`})</span>
                  </h3>
                </div>
                <div className="toogle-box__header--right">
                  <button
                    className={`reset ${isLotate ? "anim" : ""}`}
                    onClick={() => setIsLotate(!isLotate)}
                  >
                    <img src="../../images/icons/loop-24px.svg" alt="reset" />
                  </button>
                  <button
                    className="arrow-open"
                    onClick={() => setIsCard2Open(!isCard2Open)}
                  >
                    <img
                      src="../../images/icons/arrow__bottom.svg"
                      alt="arrow"
                    />
                  </button>
                </div>
              </div>
              <div
                className={`toogle-box__body ${isCard2Open ? "openBody" : ""}`}
              >
                {sectionData.length > 0 ?
                  <div
                    className="toogle-box__scroll pl-24 pr-20 position-relative"
                    data-scroll="perfect-scrollbar"
                  >
                    <div className="message">
                      <section className="section-content">
                        {sectionData.map((item:any, index: number) => (
                          <div
                            className="message__single new__message d-flex w-100"
                            key={index}
                          >
                            <div className="message__body d-flex w-100 justify-content-between">
                              <div className="message__left d-flex align-items-center">
                                <div
                                  className="message__photo"
                                  style={{ backgroundImage: `${item.bgImg}` }}
                                ></div>
                                <div className="message__detail d-flex flex-column">
                                  <strong>{item.title}</strong>
                                  <span>{item.text}</span>
                                </div>
                              </div>
                              <div className="message__right d-flex flex-column">
                                <span className="message__date">{item.time}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </section>
                    </div>
                  </div> :
                  <div className="toogle-box__scroll pl-24 pr-20 mt-4"></div>
                }
              </div>
            </div>
            <section className="section-aside-right-mob">
              {isAside && onGetAside()}
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                Store statistic
              </span>
              <div className="statistic">
                <ul className="statistic__list d-flex flex-wrap align-items-center justify-content-between list-unstyled mb-0">
                  {list1Data.map((item: any, index: number) => (
                    <li
                      className="statistic__item d-flex flex-column align-items-center justify-content-center"
                      key={index}
                    >
                      <span className="statistic-num">{item.num ? item.num : 0}</span>
                      <span className="statistic-text">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="section-content__tiles d-flex align-items-center flex-wrap flex-column justify-content-between">
                <div className="statistic-box position-relative overflow-hidden">
                  <ul className="statistic-box__post w-100">
                    <li>
                      <span>reactions</span>
                      <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                        {iconGroupData.map((item: any, index: number) => (
                          <li className="reaction__item-icon" key={index}>
                            <i className={item.class}></i>
                          </li>
                        ))}
                      </ul>
                      <b>437</b>
                    </li>
                    <li>
                      <span>comments</span> <b>65</b>
                    </li>
                    <li>
                      <span>added to timeline</span> <b>8</b>
                    </li>
                    <li>
                      <span>shared</span> <b>6</b>
                    </li>
                  </ul>
                  <div className="statistic-box__reaction w-100">
                    <h4>Reactions</h4>
                    <div className="statistic-box__emotion">
                      <ul>
                        {reactionsData.map((item: any, index: number) => (
                          <li key={index}>
                            <div
                              className="progress"
                              data-progress={item.progressNum}
                            >
                              <div className={item.class}></div>
                            </div>
                            <i className={item.iconClass}></i>
                            <span>{item.span}</span>
                            <strong className="mycustomFont">
                              {item.strong ? item.strong : 0}
                            </strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {cardData.map((item: any, index: number) => (
                  <div
                    className="main__card main__card--bias position-relative overflow-hidden"
                    key={index}
                  >
                    <div className="internal-card internal-card--main w-100 d-flex align-items-start">
                      <div className="internal-card__info">
                        <h2 className="mycustomFont">{item.title}</h2>
                        <p>
                          {item.text}
                          <a href="#">...Read More</a>
                        </p>
                      </div>
                      <figure className="internal-card__img mb-0">
                        <img src={item.src} alt="card-img" />
                      </figure>
                    </div>
                    <div className="main__buttons">
                      <a href="#" className="btn-border btn-border--two">
                        {item.btnTxt}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                Social moments
              </span>
              <span className="section-content__title section-content__title--black text-dark-blue">
                SplitChek rewards you for being social and engaging to shoppers.
                Below are the results of your work:
              </span>
              <div className="moments">
                <ul className="moments__list d-flex flex-wrap align-items-start justify-content-between list-unstyled mb-0">
                  {momentData.map((item: any, index: number) => (
                    <li className="moments__item d-flex flex-column" key={index}>
                      <span className="moments__num">{item.num ? item.num : 0}</span>
                      <h2 className="moments__title text-orange">
                        {item.title}
                      </h2>
                      <p className="moments__text text-silver">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section className="section-content section-content--dashboard">
              <span className="section-content__title position-relative d-flex align-items-center">
                <span>what shoppers say about your store</span>
              </span>

              <div className="main__card main__card--bias position-relative">
                <div className="internal-card internal-card--feed">
                  <div className="internal-card__header">
                    <a
                      href="#"
                      className="internal-card__profile d-flex flex-wrap align-items-start"
                    >
                      <figure className="internal-card__avatar internal-card__avatar--no-img">
                        <img
                          src="../../images/profiles/img1.png"
                          alt="avatar"
                        />
                        <span className="internal-card__symbol">ad</span>
                      </figure>
                      <div className="internal-card__head-info">
                        <h2 className="internal-card__name">Ann Doe</h2>
                        <p className="internal-card__subname">
                          <span>just for laugh goss</span>
                          <span className="internal-card__date">
                            02.10.2020
                          </span>
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="internal-card__body">
                    <strong>Goss title</strong>
                    <p>
                      To help your skin thrive, use Moroccan argan extract which
                      conditions and moisturizes while chlorella brings a boost
                      of skin-benefiting vitamins and omega 3s for extra glowing
                      goodness
                    </p>
                  </div>
                  <div className="internal-card__bottom">
                    <div className="reaction">
                      <div className="reaction__top">
                        <div className="reaction__quantity">
                          <ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
                            {iconGroupData.map((item: any, index: number) => (
                              <li className="reaction__item-icon" key={index}>
                                <i className={item.class}></i>
                              </li>
                            ))}
                          </ul>
                          <div className="reaction__pop">
                            <ul className="smile">
                              {smileIconsData.map((item: any, index: number) => (
                                <li key={index}>
                                  <i className={item.class}></i>
                                  <span>{item.text}</span>
                                  <span>{item.num}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <span>56</span>
                        </div>
                        <span className="reaction__text">0 comments</span>
                      </div>
                      <div className="reaction__bottom">
                        <div className="reaction__wrap-link reaction__wrap-link--reaction">
                          <i className="icon icon-like-blue"></i>
                          <span>like</span>
                          <div className="reaction-btn-like reaction-btn-like--feed">
                            <ul className="reaction-btn-like__list list-unstyled mb-0">
                              {iconGroupData.map((item: any, index: number) => (
                                <li
                                  className="reaction-btn-like__item"
                                  key={index}
                                >
                                  <a
                                    href={item.href}
                                    className="reaction-btn-like__link"
                                  >
                                    <i className={item.class}></i>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="reaction__wrap-link">
                          <a href="#" className="reaction__link">
                            <i className="icon icon-comment"></i>
                            <span>comment</span>
                          </a>
                        </div>
                        <div className="reaction__wrap-link">
                          <a href="#" className="reaction__link">
                            <i className="icon icon-plus-blue"></i>
                            <span>add to timeline</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- option  add className: - options--open --> */}
                  <div className="options">
                    <button
                      type="button"
                      className="options__btn"
                      data-type="options"
                    >
                      <i className="icon icon-more"></i>
                    </button>
                    <div className="options__dropdown">
                      <ul className="list-unstyled mb-0">
                        {locationData.map((item: any, index: number) => (
                          <li key={index}>
                            <a href={item.href}>{item.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          {/* <!-- /main --> */}
          <aside className={`aside-right ${isAside ? "d-none" : "d-lg-block"}`}>
            {!isAside && onGetAside()}
          </aside>
        </div>
        </div>
      </div>
      <AddTimelinDashboard />
      <AddPhoto />
      <UserProfileMenu />
    </div>
  );
};

export default AdminDashboardContent;
