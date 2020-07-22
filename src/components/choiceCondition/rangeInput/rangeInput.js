import React from "react"
import { useState } from "react"
import "./range.css"

function RangeInput(props) {
	const [val, setVal] = useState(props.maxVal * 0.75)
	console.log(navigator.userAgent)

	const handleChange = (e) => {
		setVal(e.target.value)
		e.target.value = val
	}
	return (
		<div className="wrapper-output">
			<div>
				<div className="output">{val}</div>
			</div>
			<input
				type="range"
				min="1"
				max={props.maxVal}
				style={{
					background: `-webkit-linear-gradient(left, #276ec3 0%, #276ec3 ${(val * 100) / props.maxVal}%, #fff ${
						(val * 100) / props.maxVal
					}%, #fff 100%)`,
				}}
				className="range"
				defaultValue={props.maxVal * 0.75}
				onChange={(e) => handleChange(e)}
			></input>
		</div>
	)
}

export default RangeInput
