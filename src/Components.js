import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Input,
  UnorderedList,
  ListItem,
  Button,
  Select,
  VStack,
  HStack,
  Stack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { CheckIcon, LockIcon } from "@chakra-ui/icons";

export function Verify() {
  return (
    <Router>
      <Stack pt={5} mb={12}>
        <Text color="var(--google-grey)">Step 1/3</Text>
        <Heading size="lg" mt={4} pb="40px" color="var(--dark)">
          Verify Account
        </Heading>

        <Stack>
          <Text as="h4" fontSize={12}>
            Select a verification method
          </Text>
          <Stack spacing={5} direction="row">
            <Link to="BVN">
              <Button background="var(--gray-bg)">BVN</Button>
            </Link>

            <Link to="personal">
              <Button border="0.1px solid var(--google-gray)">
                Personal Account Number
              </Button>
            </Link>
          </Stack>
          
        </Stack>
      </Stack>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/BVN">
          <BvnVerify />
        </Route>
        <Route path="/personal">
          <Bbank />
        </Route>

      </Switch>
    </Router>
  );
}

export function BvnVerify() {
  return (
    <>
      <VStack spacing={5} align="left" pt={1}>
        <Heading size="sm">Bank Verification Number (11-digits)</Heading>
        <Input type="number" size="lg" />
      </VStack>

      <Stack mt="40px">
        <Accordion background="var(--grey)" padding="1em" mt="10px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <LockIcon color="purple.600" boxSize={5} /> Why do we neeed
                  your BVN
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pl="3em" className="txt" color="var(--dark)" pb={4}>
              <Text mb={5}>We only need your access to your</Text>
              <UnorderedList>
                <Stack direction="row" align="center" spacing={2}>
                  <CheckIcon color="#56F2C3" />
                  <ListItem> Full Name</ListItem>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <CheckIcon color="#56F2C3" />
                  <ListItem> Phone Number</ListItem>
                </Stack>
                <Stack direction="row" align="center" spacing={2}>
                  <CheckIcon color="#56F2C3" />
                  <ListItem> Date of Birth</ListItem>
                </Stack>
              </UnorderedList>

              <Divider />

              <Stack
                direction="row"
                align="center"
                alignItems="center"
                spacing={2}
              >
                <LockIcon color="orange" />
                <Text>
                  {" "}
                  Your BVN does not give us access to your bank accounts or
                  transaction{" "}
                </Text>
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </>
  );
}

export function Bbank() {
  return (
    <>
      <HStack mb={10} align="center" padding="1em 0" spacing={20}>
        <Stack>
          <Text fontWeight="bold">Account Number</Text>
          <Input type="number" width="400px" size="lg" />
        </Stack>

        <Stack>
          <Text fontWeight="bold">Select Bank</Text>
          <Select size="lg" width="400px" placeholder="Select Bank">
            <option value="option1">First Bank</option>
            <option value="option2">GTBank</option>
            <option value="option3">Zenith Bank</option>
          </Select>
        </Stack>
      </HStack>
      <Divider />
    </>
  );
}


export function SocialHandles() {
  return (
    <Router>
      <Stack pt={5} mb={12}>
        <Text color="var(--google-grey)">Step 1/3</Text>
        <Heading size="lg" mt={4} pb="40px" color="var(--dark)">
          Social Handles
        </Heading>

        <Stack>
          <Text as="h4" fontSize={12}>
            Enter your business social media handles
          </Text>
         
        </Stack>
      </Stack>

      <Stack>
        <Text>Choose your Abeg Tag (required)</Text>
        <Input></Input>
      </Stack>

      <VStack>
        <Box>
        <Text>Instagram</Text>
        <Input></Input>
        </Box>

        <Box>
        <Text>Twitter</Text>
        <Input></Input>
        </Box>
      </VStack>


      <Divider/>

      <Stack>
        <Button colorScheme='blue'>Confirm Social Handles</Button>
      </Stack>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      
    </Router>
  );
}