import clsx from "clsx";
import Link from "next/link";
import React from "react";
import style from "./Drawer.module.scss";

const Drawer = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<span onClick={(e) => setOpen(!open)} className={style.open}>
				&#9776; open
			</span>
			<div id="mySidenav" className={open ? style.sidenav : style.cls}>
				<Link href="javascript:void(0)">
					<div
						className={open ? clsx(style.btn, style.closebtn) : style.cls}
						onClick={(e) => setOpen(!open)}
					>
						&times;
					</div>
				</Link>
				<Link href="/">
					<div className={style.lnk}>About</div>
				</Link>
				<Link href="/">
					<div className={style.lnk}>About</div>
				</Link>
				<Link href="/">
					<div className={style.lnk}>About</div>
				</Link>
				<Link href="/">
					<div className={style.lnk}>About</div>
				</Link>
				<Link href="/">
					<div className={style.lnk}>About</div>
				</Link>
			</div>
		</>
	);
};

export default Drawer;
