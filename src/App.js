import React from "react";
import {
  Container,
  Button,
  ChakraProvider,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { SocialHandles, Verify, BusinessCat } from "./Components";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

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
            <Link transition="glide-right" to="verifyBVN">
              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">1</Button>
                <Text fontSize="xl">Verify Account</Text>
              </Stack>
            </Link>

            <Link to="socialHandles" transition="glide-right">
              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">2</Button>
                <Text fontSize="xl">Social Handles</Text>
              </Stack>
            </Link>

            <Link to="BusinessCategory" transition="glide-right">
              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">3</Button>
                <Text fontSize="xl">Business Category</Text>
              </Stack>
            </Link>
          </Stack>

          <Switch>
            <Route exact path="/">
              <Redirect to="/verifyBVN" />
            </Route>
            <Route path="/verifyBVN">
              <Verify />
            </Route>
            <Route path="/socialHandles">
              <SocialHandles />
            </Route>
            <Route path="/BusinessCategory">
              <BusinessCat />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}
