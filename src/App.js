import React from "react";
import {
  Container,
  Button,
  ChakraProvider,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Verify } from "./Components";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Container maxW="container.lg" pt={30} pb={30}>
          <Box textAlign="right" mb="8">
            <Button color="#fff" bg="#FF6774">
              Logout
            </Button>
          </Box>
          <Stack
            pb="4"
            spacing={20}
            direction="row"
            alignItems="center"
            width="100%"
            borderBottom="1px solid #E9EEF4"
          >
            <Stack direction="row" align="center" spacing={4}>
              <Button colorScheme="blue">1</Button>
              <Text fontSize="xl">Verify Account</Text>
            </Stack>

            <Link>
            <Stack direction="row" align="center" spacing={4}>
              <Button colorScheme="blue">2</Button>
              <Text fontSize="xl">Social Handles</Text>
              
            </Stack>
            </Link>
            <Stack direction="row" align="center" spacing={4}>
              <Button colorScheme="blue">3</Button>
              <Text fontSize="xl">Business Category</Text>
            </Stack>
          </Stack>

          <Verify />

          <Box align="right" mt={10}>
            <Button colorScheme="blue">Continue</Button>
          </Box>
        </Container>

        <Switch>
          <Route path="/BVN">
            {/* <BvnVerify /> */}
          </Route>
          <Route path="/personal">
            {/* <Bbank /> */}
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
