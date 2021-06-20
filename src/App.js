import { useEffect, useState } from "react";
import Header from "./components/Header";
import Names from "./components/Names";
import NestedMap from "./components/NestedMap";

function App() {
	const key = "put your key here";
	const url = `https://api.nomics.com/v1/currencies/ticker?key=${key}&ids=&interval=1d,30d&convert=INR&per-page=100&page=1`;
	const [json, setJson] = useState(null);

	async function getData(url) {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setJson(data));
	}

	useEffect(async () => {
		getData(url);
	}, []);

	let top10 = [];

	if (json != null) {
		for (let i = 0; i < 10; i++) {
			top10.push(json[i]);
		}
	}

	top10 !== [] ? console.log(top10) : console.log("test");

	return (
		<div className="App">
			<Header />
			<Names className="names" />
			{top10 !== [] ? <NestedMap array={top10} /> : <p>Loading...</p>}
		</div>
	);
}

export default App;
