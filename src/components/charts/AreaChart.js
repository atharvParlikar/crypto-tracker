import React from "react";
import { AreaChart, Area } from "recharts";

export default function MyAreaChart(props) {
	return (
		<div>
			<AreaChart width={500} height={500} data={props.data}>
				<Area
					type="monotone"
					dataKey="d"
					stroke="red"
					fill="red"
					fillOpacity="0.2"
				/>
			</AreaChart>
		</div>
	);
}
