import React from 'react';

interface AlertsRequestProps {
	info: string,
	avatar: string,
	name: string,
	groupName: string,
	headerline: string,
	content: number,
	gridGallary: string,
	gallaryBg: string,
	subcontent: string,
	giftFor: string,
	href1: string,
	href2: string,
}

const AlertsRequest = (props: AlertsRequestProps) => {

	if (props.info === '1') {
		return (
			<div className="form__wrap notification__card">
				<figure className="internal-card__avatar">
					<img
						src={props.avatar}
						alt="avatar"
					/>
					<span className="internal-card__symbol"></span>
				</figure>
				<div className="notification__headline w-100">
					<div className="notification__head">
						<span>
							<b>{props.name}</b>&nbsp;requested to join&nbsp;
              <b>{props.groupName}</b>
						</span>
					</div>
					<div className="notification__link mycustomFont">
						<a href={props.href1}>Reject</a>
						<a href={props.href2}>Accept</a>
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
							<li>
								<a href="#">Share</a>
							</li>
							<li>
								<a href="#">Not gift worthy</a>
							</li>
							<li>
								<a href="#">About the store</a>
							</li>
							<li>
								<a href="#">Report abuse</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
	else if (props.info === '2') {
		return (
			<div className="form__wrap notification__card">
				<figure className="internal-card__avatar">
					<img
						src={props.avatar}
						alt="avatar"
					/>
					<span className="internal-card__symbol"></span>
				</figure>
				<div className="notification__headline w-100">
					<strong className="mycustomFont">
						{props.headerline}{" "}
					</strong>
					<p>{props.content}</p>
					<div className="notification__link mycustomFont">
						<a href="#">Cancel</a>
						<a href="#">Get Started</a>
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
							<li>
								<a href="#">Share</a>
							</li>
							<li>
								<a href="#">Not gift worthy</a>
							</li>
							<li>
								<a href="#">About the store</a>
							</li>
							<li>
								<a href="#">Report abuse</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
	else if (props.info === '3') {
		return (
			<div className="form__wrap notification__card-video">
				<div className="d-flex">
					<figure className="internal-card__avatar">
						<img
							src={props.avatar}
							alt="avatar"
						/>
						<span className="internal-card__symbol"></span>
					</figure>
					<div className="notification__headline w-100">
						<strong className="mycustomFont">{props.headerline} </strong>
						<p>{props.content}</p>
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
								<li>
									<a href="#">Share</a>
								</li>
								<li>
									<a href="#">Not gift worthy</a>
								</li>
								<li>
									<a href="#">About the store</a>
								</li>
								<li>
									<a href="#">Report abuse</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="notification__video">
					<div className="internal-card__grid internal-card__grid--single internal-card__grid--margin-bt grid-gallery d-flex flex-wrap">
						<figure className="grid-gallery__width-1-1">
							<a
								className="grid-gallery__selector position-relative grid-gallery__selector--video"
								href={props.gridGallary}
							>
								<div
									className="grid-gallery__post-img"
									style={{
										backgroundImage: `${props.gallaryBg}`
									}}
								></div>
							</a>
						</figure>
					</div>
					<div className="notification__link mycustomFont">
						<a href={props.href1}>Cancel</a>
						<a href={props.href2}>Get Started</a>
					</div>
				</div>
			</div>
		)
	}
	else if (props.info === '4') {
		return (
			<div className="form__wrap notification__card-figure">
				<div className="d-flex">
					<figure className="internal-card__avatar">
						<img
							src={props.avatar}
							alt="avatar"
						/>
						<span className="internal-card__symbol"></span>
					</figure>
					<div className="notification__headline w-100">
						<strong className="mycustomFont">{props.headerline}</strong>
						<p>{`$${props.content}`}</p>
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
								<li>
									<a href="#">Share</a>
								</li>
								<li>
									<a href="#">Not gift worthy</a>
								</li>
								<li>
									<a href="#">About the store</a>
								</li>
								<li>
									<a href="#">Report abuse</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="notification__video">
					<figure className="grid-gallery__width-1-1">
						<a
							className="grid-gallery__selector"
							href={props.gridGallary}
						>
							<div
								className="grid-gallery__post-img"
								style={{
									backgroundImage: `${props.gallaryBg}`
								}}
							></div>
						</a>
					</figure>
					<div className="d-flex justify-content-center">
						<p>
							{props.subcontent}{" "}
						</p>
					</div>
					<div className="notification__gift">
						<p>{props.giftFor}:</p>
						<div className="d-flex align-items-center flex-wrap">
							<div className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
								<img src="" alt="" />
								<span className="avatar__symbol">JS</span>
							</div>
							<div className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
								<img src="" alt="" />
								<span className="avatar__symbol">JS</span>
							</div>
							<div className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden">
								<img src="" alt="" />
								<span className="avatar__symbol">JS</span>
							</div>
							<div
								className="avatar avatar--no-img d-flex align-items-center justify-content-center overflow-hidden"
								style={{ backgroundColor: "#f8f9fb" }}
							>
								<img src="" alt="" />
								<span className="avatar__symbol"></span>
							</div>
						</div>
					</div>
					<div className="notification__link mycustomFont">
						<a href={props.href1}>Cancel</a>
						<a href={props.href2}>View Product</a>
					</div>
				</div>
			</div>
		)
	}
	return <div></div>
}

export default AlertsRequest;