import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaEtsy, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Footer() {
	return (
		<Box
			bg="gray.900"
			color="white"
			p={"2em"}
			px={"15em"}
			h="30vh"
			justifyContent="space-between"
			alignItems="center"
			display={"flex"}
		>
			<VStack>
				<Link to="/">
					<Image src={logo} alt="Logo" w="100px" />
				</Link>
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
				</HStack>
			</VStack>

			<Text textAlign="center">
				&copy; 2024 Your Company. All rights reserved.
			</Text>
			<HStack spacing={3}>
				<Link mx={2}>Home</Link>
				<Link mx={2}>About</Link>
				<Link mx={2}>Services</Link>
				<Link mx={2}>Contact</Link>
			</HStack>
		</Box>
	);
}
