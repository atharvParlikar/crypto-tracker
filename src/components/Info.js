import React from "react";
import "./styles/info.css";

export default function Info(props) {
	console.log(props.id);
	return (
		<div className="container-info">
			<div className="crypto-name">
				<img className="image" src={props.img} />
				<h5 className="id">{props.id}</h5>
			</div>
			<h5 className="id">{parseFloat(props.price)}</h5>
			<h5 className="id">{parseFloat(props.marketCap)}</h5>
			{props.change > 0 ? (
				<h5 className="id" style={{ color: "#16c784" }}>
					+{parseFloat(props.change)}%
				</h5>
			) : (
				<h5 className="id" style={{ color: "#ea3943" }}>
					{parseFloat(props.change)}%
				</h5>
			)}
		</div>
	);
}
