import { Box, useColorModeValue } from "@chakra-ui/react";
import Header from "./header/Header";
import Favorite from "./sections/Favorite";
import Journal from "./sections/Journal";
import Main from "./sections/Main";
import Subscribe from "./sections/Subscribe";

const Home = () => {
	const imageSrc =
		"https://images.unsplash.com/photo-1614608224852-227361dfff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const bgColor = useColorModeValue(
		"rgba(255, 255, 255, 0.8)",
		"rgba(0, 0, 0, 0.8)",
	);
	const shadowStyle = {
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
	};
	const bg1 =
		"https://images.unsplash.com/photo-1586552611453-6680dcf78fb0?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	return (
		<Box bg={"hsl(240deg 2.61% 22.55%)"}>
			<Box
				bgColor={bgColor}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundImage={`url(${imageSrc})`}
				style={shadowStyle}
			>
				<Header />
				<Main />
			</Box>
			<Favorite />
			<Box
				h="50vh"
				bgColor={bgColor}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundImage={`url(${bg1})`}
				style={shadowStyle}
			/>
			<Journal />
			<Subscribe />
		</Box>
	);
};

export default Home;
