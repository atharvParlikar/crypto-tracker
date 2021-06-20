import React from "react";
import "./styles/header.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import SearchInput from "./SearchInput";

const theme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

export default function Header() {
	return (
		<div className="container">
			<h2>Coin Expert</h2>
			<ThemeProvider theme={theme}>
				<SearchInput className="searchbar" />
			</ThemeProvider>
		</div>
	);
}
