import React from "react";
import { Container, Button, Stack, ChakraProvider, Text} from "@chakra-ui/react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export default function App() {
  return (
    <ChakraProvider>
 
    <Button colorScheme="blue">Logout</Button>
    <Container maxW="container.xlg">
    <Stack spacing={4} direction="row" align="center">
    <Button colorScheme="blue">1</Button><Text>Verify Account</Text>
    <Button colorScheme="blue">2</Button> <Text>Verify Account</Text>

    </Stack>
  </Container>
  </ChakraProvider>
    );
}
