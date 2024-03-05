import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import { FaCartPlus, FaEtsy, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import imageSrc from "../../assets/logo.jpg";

const Header = () => {
	return (
		<Flex
			justify="space-between"
			p="3em"
			position="fixed"
			w="100%"
			bg="transparent"
			zIndex="999"
		>
			<Link to="/">
				<Image src={imageSrc} alt="Logo" w="100px" />
			</Link>
			<HStack spacing={8} color={"white"}>
				<Link to="/about">Shop</Link>
				<Link to="/store">Our Story</Link>
				<Link to="/learn-more">Learn More</Link>
				<Link to="/learn-more">Contact</Link>
			</HStack>
			<HStack spacing={8} color={"white"}>
				<Box
					as="a"
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</Box>
				<Box
					as="a"
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaEtsy />
				</Box>
				<Box
					as="a"
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaCartPlus />
				</Box>
			</HStack>
		</Flex>
	);
};

export default Header;
