import React from "react";
import { LineChart, Line } from "recharts";

export default function MyLineChart(props) {
	return (
		<div>
			<LineChart height={100} width={100} data={props.data}>
				<Line type="monotone" dataKey="d" stroke="green" />
			</LineChart>
		</div>
	);
}
