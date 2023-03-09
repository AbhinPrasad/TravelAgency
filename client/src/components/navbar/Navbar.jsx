import React from "react";
import "./Navbar.css";
import { images, navItems } from "../../constants";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
	return (
		<div className="nav__container">
			<div className="nav__logo">
				<img className="nav__logo-img" src={images.Logo} alt="LOGO" />
			</div>
			<div className="nav__options">
				<ul className="nav__options-items">
					{navItems.map((item) => {
						if (item.dropDown) {
							return (
								<div className="nav-item-dd">
									<li className="nav-item" key={item.name}>
										{item.name}
									</li>
									<RiArrowDropDownLine
										style={{ alignSelf: "center" }}
									/>
								</div>
							);
						} else {
							return (
								<li className="nav-item" key={item.name}>
									{item.name}
								</li>
							);
						}
					})}
				</ul>
			</div>
			<div className="nav__auth">
				<button className="login-button">Login</button>
				<button className="signup-button">Sign Up</button>
			</div>
		</div>
	);
}

export default Navbar;
