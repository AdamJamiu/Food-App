import React from "react";
import {
  Container,
  Button,
  ChakraProvider,
  Box,
  Wrap,
} from "@chakra-ui/react";
import {
  SocialHandles,
  ActiveLink,
  UnVisitedLink,
  Verify,
  BusinessCat,
  // VisitedLink,
} from "./Components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./index.css";

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
          <Wrap
            pb="4"
            spacing={20}
            direction="row"
            alignItems="center"
            width="100%"
            borderBottom="1px solid #E9EEF4"
          >
            <Link className="verify" to="verifyBVN">
              <ActiveLink name="Verify Button" value="1"/>
            </Link>

            <UnVisitedLink name="Social Handles" value="2"/>

            <UnVisitedLink name="Business Category" value="3"/>
          </Wrap>

          <Switch>
            <Route exact path="/">
              <Redirect to="/verifyBVN" >
              <Verify />
              </Redirect>
            </Route>

            <Route path="/verifyBVN">
              <Verify />
              <Link to="socialHandles">
                <Box align="right" mt={10}>
                  <Button colorScheme="blue">Continue</Button>
                </Box>
              </Link>
            </Route>

            <Route path="/socialHandles">
              <SocialHandles />
              
              <Link to="BusinessCategory">
                <Box align="right" mt="20px">
                  <Button colorScheme="blue">Confirm Social Handles</Button>
                </Box>
              </Link>
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
