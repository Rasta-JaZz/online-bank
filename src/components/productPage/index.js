import React from "react"
import "./productPage.css"
// import PropTypes from 'prop-types';

function ProductPage(props) {
	return (
		<div className="wrapper">
			<div className="header">
				<h2>Выбор продукта</h2>
				<div className="header__text">
					<p>Пожалуйста, выберете финансовый продукт который поможет решить текущую бизнес-задачу.</p>
				</div>
			</div>
			<div className="products">
				<div className="loan-variant">
					<p>Оборотный заем</p>
					<img src={require("../../assets/img/main-loan.svg")} alt="#"></img>
				</div>
				<div className="loan-variant">
					<p>Возобновляемая линия</p>
					<img src={require("../../assets/img/turnover 1.png")} alt="#"></img>
				</div>
				<div className="loan-variant">
					<p>Финансирование</p>
					<p>госконтракта</p>
					<img src={require("../../assets/img/funding1.png")} alt="funding"></img>
				</div>
			</div>
			<div className="footer">
				<div className="footer__content">
					<img src={require("../../assets/img/dot-bank.png")} alt="dot-bank"></img>
					<div className="footer-content__text">
						<p>
							Откройте счет в банке Точка (Открытие). При проведении безакцептного списания ставка снижается на 1%
							пункт.
						</p>
						<ul>
							<li>Ежемесячное обслуживание счета – 0 рублей</li>
							<li>Платежи в пользу юрлиц, ИП и физлиц - бесплатно</li>
							<li>Точка дарит 190 000 рублей на рекламу и развитие вашего бизнеса</li>
							<li>Эквайринг, зарплатный проект, валютный контроль – подключается одним кликом в интернет-банке</li>
						</ul>
					</div>
				</div>
				<div className="footer__content">
					<img src={require("../../assets/img/dot-bank.png")} alt="dot-bank"></img>
					<div className="footer-content__text">
						<p>
							Откройте счет в банке Точка (Открытие). При проведении безакцептного списания ставка снижается на 1%
							пункт.
						</p>
						<ul>
							<li>Ежемесячное обслуживание счета – 0 рублей</li>
							<li>Платежи в пользу юрлиц, ИП и физлиц - бесплатно</li>
							<li>Точка дарит 190 000 рублей на рекламу и развитие вашего бизнеса</li>
							<li>Эквайринг, зарплатный проект, валютный контроль – подключается одним кликом в интернет-банке</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductPage
