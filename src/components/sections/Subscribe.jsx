import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Subscribe = () => {
	const bg2 =
		"https://images.unsplash.com/photo-1600676626871-d767a9eaf17a?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	return (
		<Box
			position="relative"
			width="100%"
			height="500px"
			bgImage={`url(${bg2})`}
			bgSize="cover"
			bgPosition="center"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box
				bg="rgba(255, 255, 255, 0.8)"
				p={8}
				borderRadius="0"
				width="500px"
				textAlign="center"
			>
				<FormControl>
					<FormLabel>Email address</FormLabel>
					<Input type="email" placeholder="Enter your email" />
				</FormControl>
				<FormControl mt={4}>
					<FormLabel>Password</FormLabel>
					<Input type="password" placeholder="Enter your password" />
				</FormControl>
				<Button mt={4} colorScheme="teal" type="submit" borderRadius={0}>
					Sign up
				</Button>
			</Box>
		</Box>
	);
};

export default Subscribe;
