import {
	Box,
	Button,
	Flex,
	Heading,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "./header/Header";

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

	return (
		<Box
			bgColor={bgColor}
			backgroundSize="cover"
			backgroundPosition="center"
			backgroundImage={`url(${imageSrc})`}
			style={shadowStyle}
		>
			<Header />

			<Box h="100vh">
				<Flex h="100%" align="center" justify="center" direction="column">
					<Heading
						fontSize={"4em"}
						color="white"
						fontWeight={"normal"}
						mb="4"
						textAlign="center"
					>
						Unique African
					</Heading>
					<Heading
						fontSize={"4em"}
						fontWeight={"normal"}
						color="white"
						mb="4"
						textAlign="center"
					>
						Gifts & Trinkets
					</Heading>
					<Link to="/store">
						<Button
							color="#fff"
							mt="4"
							borderRadius={0}
							border={"1px solid #eee"}
							variant={"outline"}
							w="10rem"
							h="4rem"
							fontSize="15px"
							fontWeight={"normal"}
						>
							Shop Now
						</Button>
					</Link>
				</Flex>
			</Box>

			{/* Content Sections */}
			{/* Add your other content sections here */}
		</Box>
	);
};

export default Home;
