import Link from "next/link";
import React from "react";

const Drawer = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<span onClick={(e) => setOpen(!open)} className="open">
				&#9776; open
			</span>
			<div id="mySidenav" className={open ? "sidenav" : "cls"}>
				<Link href="javascript:void(0)">
					<div
						className={open ? "btn closebtn" : "cls"}
						onClick={(e) => setOpen(!open)}
					>
						&times;
					</div>
				</Link>
				<Link href="/">
					<div className="lnk">About</div>
				</Link>
				<Link href="/">
					<div className="lnk">About</div>
				</Link>
				<Link href="/">
					<div className="lnk">About</div>
				</Link>
				<Link href="/">
					<div className="lnk">About</div>
				</Link>
				<Link href="/">
					<div className="lnk">About</div>
				</Link>
			</div>
		</>
	);
};

export default Drawer;
