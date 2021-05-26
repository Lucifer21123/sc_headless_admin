import React from 'react';

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

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
	Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface TimelineProps {
	info: string,
	time: string,
	adder: string,
	content: string,
	budget: number,
	product: string,
	comment: string,
}

const TimeLine = (props: TimelineProps) => {
	if (props.info === '1') {
		return (
			<li className="timeline__item">
				<span className="timeline__date timeline__date--active">{props.time}</span>
				<article className="timeline__card card-timeline card-timeline--active card-timeline--visible-notification">
					{/* <!-- notification --> */}
					<div className="card-timeline__notification">
						<i className="icon icon-bell-white"></i>
						<span>Today is the big day!</span>
					</div>
					{/* <!-- card-inner --> */}
					<div className="card-timeline__inner">
						{/* <!-- card-header --> */}
						<div className="card-timeline__header">
							<div className="card-timeline__info card-timeline__info--main">
								<p>{props.content}</p>
								<p>
									Budget:{" "}
									<span className="bold">${props.budget} per person</span>
								</p>
							</div>
						</div>
						{/* <!-- card-body --> */}
						<div className="card-timeline__body">
							<span className="card-timeline__title">
								Who is coming?
						</span>
							<div className="card-timeline__slider position-relative d-flex align-items-center">
								<div className="swiper-container">
									<div className="swiper-wrapper">
										<Swiper
											slidesPerView={'auto'}
											spaceBetween={30}
											centeredSlides={true}
											navigation={true}
											className="mySwiper"
										>
											{swiperWrapperdata.map(
												(item: any, index: number) => (
													<SwiperSlide>
														<div
															className="swiper-slide"
															style={{ marginRight: '8px' }}
															key={index}
														>
															<a
																href={item.href}
																className={item.class}
															>
																<img
																	src={item.src}
																	alt="avatar"
																/>
																<span>{item.span}</span>
															</a>
														</div>
													</SwiperSlide>
												)
											)}
										</Swiper>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- card-bottom --> */}
						<div className="card-timeline__bottom">
							<span className="card-timeline__title">
								Location
						</span>
							<div className="card-timeline__info">
								<p>4 Bellbird Cres, Coomera, QLD, 4209</p>
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
				</article>
			</li>
		)
	}
	else if (props.info === '2') {
		return (
			<li className="timeline__item">
				<span className="timeline__date">{props.time}</span>
				<article className="timeline__card card-timeline">
					<div className="card-timeline__notification">
						<i className="icon icon-bell"></i>
						<span></span>
					</div>
					<div className="card-timeline__inner">
						<div className="card-timeline__header">
							<div className="card-timeline__info card-timeline__info--main">
								<p>{props.content}</p>
								<p>
									Budget:{" "}
									<span className="bold">${props.budget} per person</span>
								</p>
							</div>
						</div>
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
				</article>
			</li>
		)
	}
	else if (props.info === '3') {
		return (
			<li className="timeline__item">
				<span className="timeline__date">{props.time}</span>
				<article className="timeline__card card-timeline card-timeline--visible-notification">
					<div className="card-timeline__notification">
						<i className="icon icon-bell"></i>
						<span></span>
					</div>
					<div className="card-timeline__inner">
						<div className="card-timeline__header">
							<span className="card-timeline__title">
								<span>Added by:</span>
								<span className="bold">You</span>
							</span>
							<div className="card-timeline__info card-timeline__info--main">
								<p>{props.content}</p>
								<p>
									Budget:{" "}
									<span className="bold">${props.budget} per person</span>
								</p>
							</div>
						</div>
						<div className="card-timeline__body">
							<figure className="card-timeline__img mb-0">
								<img
									src={props.product}
									alt="product"
								/>
							</figure>
						</div>
						<div className="card-timeline__bottom">
							<span className="card-timeline__title">Comment</span>
							<div className="card-timeline__info">
								<p>{props.comment}</p>
							</div>
						</div>
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
				</article>
			</li>
		)
	}
	return <div></div>
}

export default TimeLine;