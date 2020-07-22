import React from "react"
import RangeInput from "./rangeInput/rangeInput"
import styles from "./choiceCondition.css"

function ChoiceCondition(props) {
	return (
		<div className="choice">
			<h1>Выбор условий финансирования</h1>
			<div className="content">
				<div className="range-box">
					<div className="range-box__text">
						<p>Сумма:</p>
						<RangeInput maxVal={10000000} />
					</div>
					<div className="range-box__text">
						<p>Срок, месяцев:</p>
						<RangeInput maxVal={36} />
					</div>
				</div>
				<div className="ring">
					<span style={{ color: " #C0C5D0", marginTop: "110px" }}>Регулярный платеж:</span>
					<span style={{ fontSize: "72px", color: "#276EC3" }}>
						82 614 &#8381;<sup>1</sup>
					</span>
					<span style={{ color: "#C0C5D0" }}>в месяц</span>
					<div className="line"></div>
					<span style={{ color: "#C0C5D0" }}>Общая переплата:</span>
					<span style={{ fontWeight: "bold", fontSize: "24px" }}>11,3%</span>
				</div>
				<div className="total">
					<p>Переплата:</p>
					<div>
						<span>73 986 &#8381;</span>% за весь период
					</div>
					<div>
						<span>40 000 &#8381;</span>
						комиссия платформы
					</div>
					<div>
						<span>113 986 &#8381;</span>
						общая сумма переплат
					</div>
				</div>
			</div>
			<div>
				<button className="next-button">Продолжить</button>
				<div className="choice-footer">
					<p>
						1. Условия представлены для новых заемщиков с рейтингом BB. Итоговый рейтинг может быть выше или ниже.
						Подробнее - jetlend.ru/rates
					</p>
					<p>
						2. Для повторных заемщиков действует пониженная комиссия за выдачу, вплоть до 1 %. Подробнее -
						jetlend.ru/tariffs
					</p>
				</div>
			</div>
		</div>
	)
}

export default ChoiceCondition
