import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/Header";

const Root = () => {
	return (
		<Box h="100vh">
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</Box>
	);
};

export default Root;
