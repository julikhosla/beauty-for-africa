import {
	Box,
	Button,
	Heading,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Journal = () => {
	const favoritesData = [
		{
			id: 1,
			imageSrc:
				"https://plus.unsplash.com/premium_photo-1676654936094-3a5c5064f362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Is It Flowers You’re After?",
			sub: "Flowering plants are stunning, but require a bit more work than their non-flowering brethren. Learn how to keep them happy.",
		},
		{
			id: 2,
			imageSrc:
				"https://images.unsplash.com/photo-1589123053646-4e8c49d46b35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Searching for Succulents?",
			sub: "If you have a sunny windowsill, you can be a succulent owner. These hardy and beautiful plants are as easy as they come.",
		},
	];
	return (
		<Box p={"5em"} pb={0} bg={"#a8a6a1"} color={"white"} mx={"auto"}>
			<Heading
				fontSize={"3em"}
				fontWeight={"normal"}
				pb="2em"
				textAlign="center"
			>
				The Journal
			</Heading>
			<SimpleGrid columns={2} spacing={4} maxW="1180px" mx={"auto"}>
				{favoritesData.map((item) => (
					<VStack key={item.id}>
						<Box bg={"#1A202C"} p={"2em"} h={"50%"}>
							<motion.div
								style={{
									width: "30em",
									height: "100%",
									borderRadius: "50%",
									overflow: "hidden",
								}}
								animate={{
									rotateY: 360,
								}}
								transition={{
									duration: 1,
									repeat: Infinity,
								}}
							>
								<img
									src={item.imageSrc}
									alt="Mime"
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
									}}
								/>
							</motion.div>
						</Box>
						<Heading py={"1em"} fontSize={"2em"} fontWeight={"normal"}>
							{item.title}
						</Heading>
						<Text py={"1em"} fontWeight={"normal"}>
							{item.sub}
						</Text>
						<Link to="/store">
							<Button
								bg="grey"
								color="#eee"
								borderRadius={0}
								variant={"outline"}
								border={"none"}
								size={"lg"}
								fontSize="15px"
								fontWeight={"normal"}
							>
								Shop Now
							</Button>
						</Link>
					</VStack>
				))}
			</SimpleGrid>
		</Box>
	);
};

export default Journal;
