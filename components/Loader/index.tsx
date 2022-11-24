import style from "./Loader.module.scss";
const Loader = () => {
	return (
		<div className={style.load}>
			<div className={style.hourglass}></div>
		</div>
	);
};
export default Loader;
