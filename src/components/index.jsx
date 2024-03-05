import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Root = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			{/* <Footer /> */}
		</>
	);
};

export default Root;
