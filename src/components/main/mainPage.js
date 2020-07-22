import React from "react"
import ProductPage from "../productPage"
import ChoiceCondition from "../choiceCondition"
import "./main-page.css"

function MainPage(props) {
	return (
		<div className="main-wrapper">
			<div>
				<nav>
					<div className="nav__logo">
						<img src={require("../../assets/img/logo1.png")} alt="logo"></img>
						<p>JetLend</p>
					</div>
					<div className="nav__list">
						<ul>
							<li>Идентификация</li>
							<li>Документация</li>
							<li>Решение</li>
							<li>Верификация</li>
							<li>Перевод средств</li>
						</ul>
					</div>
					<div className="nav__contacts">
						<div className="nav__contacts_manager">
							<div>
								<img src={require("../../assets/img/avatar.png")} alt="avatar"></img>
							</div>
							<div className="nav__contacts_manager_right">
								<h4>Азамат Хугаев</h4>
								<p>Ваш персональный менеджер</p>
								<div>
									<div className="manager-phone">
										<img src={require("../../assets/img/phone.svg")} alt="phone"></img>
										+7 (968) 865-65-26
									</div>
									<div className="manager-email">
										<img src={require("../../assets/img/mail.svg")} alt="email"></img>
										ak@jetlend.ru
									</div>
								</div>
							</div>
						</div>
						<div className="nav__contacts__hotline">
							<div className="hotline-phone">
								<img src={require("../../assets/img/phone2.svg")} alt="phone"></img>8 (800) 222 93-32
							</div>
							<div className="hotline-email">
								<img src={require("../../assets/img/mail2.svg")} alt="email"></img>
								support@jetlend.ru
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div>
				<header>
					<div className="header__name">
						<p>ООО “Ромашка обыкновенная”</p>
						<p> ИНН 1234567890</p>
						<img src={require("../../assets/img/settings.png")} alt="settings"></img>
					</div>
					<div className="header-right-block">
						<div className="header__question">
							<img src={require("../../assets/img/question.svg")} alt="question"></img>
						</div>
						<div className="header__login">
							<img src={require("../../assets/img/login3.png")} alt="login"></img>
							Выйти
						</div>
					</div>
				</header>
				<div className="wrapper-content">
					<ChoiceCondition />
				</div>
				<footer>
					<div className="footer__left">
						г. Москва, Пресненская наб. 6, строение 2 ИНН 7724451748 ОГРН 1187746779868
					</div>
					<div className="footer__right">
						2019 ООО "Джетленд" <a href="mailto:support@jetlend.ru">support@jetlend.ru</a> 8 800 222 9332
					</div>
				</footer>
			</div>
		</div>
	)
}

export default MainPage
