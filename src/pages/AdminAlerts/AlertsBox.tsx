import React from 'react';

interface AlertsBoxProps {
	info: string,
	bgImg: string,
	title: string,
	contentVal: number,
	sku: string,
	qty: string,
	price: number,
	commentsNum: string,
	editLink: string,
}

const AlertsBox = (props: AlertsBoxProps) => {

	// const { info, bgImg, title, contentVal, sku, qty, price, commentsNum, editLink } = props;
	console.log("props", props)
	if (props.info === '1')
		return (
			<li className="reminders__item">
				<div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
					<div className="card-alerts__body d-flex align-items-start">
						<figure
							className="card-alerts__img"
							style={{
								backgroundImage: `${props.bgImg}`
							}}
						></figure>
						<div className="card-alerts__info card-alerts__info--fluid">
							<h2 className="card-alerts__title mycustomFont">
								{props.title}
							</h2>
							<div className="card-alerts__detail d-flex flex-wrap">
								<p>
									Grow your business on SplitChek. <br />
									Sell up to 100 products for free. Billed{" "}
									<b>${props.contentVal}</b>. Not received
								</p>
							</div>
						</div>
					</div>
					<div className="card-alerts__bottom w-100 d-flex justify-content-end">
						<a href="#" className="btn-blue-link">
							{props.editLink}
						</a>
					</div>
					<button className="card-alerts__btn"></button>
				</div>
			</li>
		);
	else if (props.info === '2') {
		return (
			<li className="reminders__item">
				<div className="card-alerts card-alerts--error w-100 position-relative d-flex flex-column">
					<span className="card-alerts__notif position-relative mycustomFont">
						Short in stock in store!
          </span>
					<div className="card-alerts__body d-flex align-items-center">
						<figure
							className="card-alerts__img"
							style={{
								backgroundImage: `${props.bgImg}`
							}}
						></figure>
						<div className="card-alerts__info">
							<h2 className="card-alerts__title mycustomFont">
								{props.title}
							</h2>
							<div className="card-alerts__detail d-flex flex-wrap">
								<span>
									Sku:&nbsp;<span>{props.sku}</span>
								</span>
								<span>
									Qty:&nbsp;<span>{props.qty}</span>
								</span>
								<span>
									Price:&nbsp;<span>{`$${props.price}`}</span>
								</span>
							</div>
						</div>
						<div className="card-alerts__right">
							<div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
								<ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
									<li className="reaction__item-icon">
										<i className="icon icon-like"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-heart-l"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-happy"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-surprised"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-angry"></i>
									</li>
								</ul>
								<span>{props.commentsNum}</span>
							</div>
							<div className="card-alerts__comments d-flex justify-content-end align-items-center">
								<span>comments</span>
								<span>{props.commentsNum}</span>
							</div>
						</div>
					</div>
					<button className="card-alerts__btn"></button>
				</div>
			</li>
		)
	}
	else if (props.info === '3') {
		return (
			<li className="reminders__item">
				<div className="card-alerts card-alerts--canceled w-100 position-relative d-flex flex-column">
					<span className="card-alerts__notif position-relative mycustomFont">
						Out of stock
        </span>
					<div className="card-alerts__body d-flex align-items-center">
						<figure
							className="card-alerts__img"
							style={{
								backgroundImage: `${props.bgImg}`,
							}}
						></figure>
						<div className="card-alerts__info">
							<h2 className="card-alerts__title mycustomFont">
								{props.title}
							</h2>
							<div className="card-alerts__detail d-flex flex-wrap">
								<span>
									Sku:&nbsp;<span>{props.sku}</span>
								</span>
								<span>
									Qty:&nbsp;<span>{props.qty}</span>
								</span>
								<span>
									Price:&nbsp;<span>{`$${props.price}`}</span>
								</span>
							</div>
						</div>
						<div className="card-alerts__right">
							<div className="card-alerts__reaction reaction d-flex justify-content-end align-items-center">
								<ul className="reaction__list-icon reaction__list-icon--other list-unstyled mb-0">
									<li className="reaction__item-icon">
										<i className="icon icon-like"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-heart-l"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-happy"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-surprised"></i>
									</li>
									<li className="reaction__item-icon">
										<i className="icon icon-angry"></i>
									</li>
								</ul>
								<span>{props.commentsNum}</span>
							</div>
							<div className="card-alerts__comments d-flex justify-content-end align-items-center">
								<span>comments</span>
								<span>{props.commentsNum}</span>
							</div>
						</div>
					</div>
					<button className="card-alerts__btn"></button>
				</div>
			</li>
		)
	}
	return <div></div>
}

export default AlertsBox;
