import {
	Box,
	Button,
	Heading,
	Image,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Favorite = () => {
	const favoritesData = [
		{
			id: 1,
			imageSrc:
				"https://plus.unsplash.com/premium_photo-1676654936094-3a5c5064f362?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Lil' Guys",
		},
		{
			id: 2,
			imageSrc:
				"https://images.unsplash.com/photo-1589123053646-4e8c49d46b35?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Bigger Statements",
		},
		{
			id: 3,
			imageSrc:
				"https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Low Maintenance",
		},
	];
	return (
		<Box p={"5em"} color={"white"} mx={"auto"}>
			<Heading
				fontSize={"3em"}
				fontWeight={"normal"}
				pb="2em"
				textAlign="center"
			>
				Fan Favorites
			</Heading>
			<SimpleGrid columns={3} spacing={8} maxW="1380px" mx={"auto"}>
				{favoritesData.map((item) => (
					<VStack key={item.id}>
						<Image
							h={"30em"}
							w={"100%"}
							src={item.imageSrc}
							alt={item.title}
							borderRadius="0"
						/>
						<Heading py={"1em"} fontSize={"2em"} fontWeight={"normal"}>
							{item.title}
						</Heading>
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

export default Favorite;
