import React from "react";
import Info from "./Info";

export default function NestedMap(props) {
	return (
		<div>
			{props.array.map((value) => {
				return (
					<Info
						img={value.logo_url}
						id={value.id}
						price={value.price}
						marketCap={value.market_cap}
						change={value["1d"].price_change_pct}
					/>
				);
			})}
		</div>
	);
}
