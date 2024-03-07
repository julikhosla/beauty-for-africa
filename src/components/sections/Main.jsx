import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Main = () => {
	return (
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
	);
};

export default Main;
