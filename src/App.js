import React from "react";
import {
  Container,
  Button,
  ChakraProvider,
  Text,
  Stack,
  Box,
  Flex,
  
} from "@chakra-ui/react";
import { SocialHandles, Verify, BusinessCat } from "./Components";
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
          <Flex
            pb="4"
            justifyContent={"space-between"}
            direction="row"
            alignItems="center"
            width="100%"
            borderBottom="1px solid #E9EEF4"
          >
            <Link transition="glide-right" className="verify" to="verifyBVN">
              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">1</Button>
                <Text fontSize="md" fontWeight="bold">
                  Verify Account
                </Text>
              </Stack>
            </Link>

            
              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">2</Button>
                <Text fontSize="md" fontWeight="bold">
                  Social Handles
                </Text>
              </Stack>

              <Stack direction="row" align="center" spacing={4}>
                <Button colorScheme="blue">3</Button>
                <Text fontSize="md" fontWeight="bold">
                  Business Category
                </Text>
              </Stack>
          </Flex>

        
          <Switch >
            <Route exact path="/">
              <Redirect to="/verifyBVN" />
              <Verify />
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

