import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<div className="navbar">
			<Logo />
			<Navigation />
		</div>
	);
};

export default Header;
