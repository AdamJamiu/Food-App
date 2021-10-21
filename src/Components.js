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
  // HStack,
  Stack,
  Text,
  Heading,
  Divider,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import { CheckIcon, LockIcon } from "@chakra-ui/icons";
import { Component } from "react";

export function Mobilebtn() {
  return (
    <>
      <Button color="blue">1</Button>
    </>
  );
}

export function SuccessBtn() {
  return (
    <>
      <Button color="blue">
        <CheckIcon />
      </Button>
    </>
  );
}

export function ActiveLink() {
  return (
    <Stack direction="row" align="center" spacing={4}>
      <Button colorScheme="blue">1</Button>
      <Text color="#7D8DA7" fontSize="md" fontWeight="bold">
        Verify Account
      </Text>
    </Stack>
  );
}

export class VisitedLink extends Component  {
  constructor(props) {
    super(props);
    this.state  = 0
  }
  
  render() {
  return (
    <Stack direction="row" align="center" spacing={4}>
      <Button color="blue">{this.props.value}</Button>
      <Text color="#7D8DA7" fontSize="md" fontWeight="bold">
        Verify Account
      </Text>
    </Stack>
  );
}
}

export class UnVisitedLink extends React.Component  {
  render() {

    return (
      <Stack direction="row" align="center" spacing={4}>
        <Button color="#A5B4CB">{this.props.value}</Button>
        <Text color="#7D8DA7" fontSize="md" fontWeight="bold">
          {this.props.name}
        </Text>
      </Stack>
    );
  }
}

export function Verify() {
  return (
    <Router>
      <Stack pt={10} mb={12}>
        <Text color="#7D8DA7">Step 1/3</Text>
        <Heading size="lg" mt={4} pb="40px" color="var(--dark)">
          Verify Account
        </Heading>

        <Stack>
          <Text as="h4" fontWeight="bold" fontSize={14}>
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
      <Router>
        <VStack spacing={5} align="left" pt={1}>
          <Heading size="sm">Bank Verification Number (11-digits)</Heading>
          <Input type="number" size="lg" />
        </VStack>

        <Stack mt="40px">
          <Accordion
            background="var(--grey)"
            padding="1em"
            mt="10px"
            defaultIndex={[0]}
            allowMultiple
          >
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
              <AccordionPanel
                pl="3em"
                className="txt"
                color="var(--dark)"
                pb={4}
              >
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
        <Divider mt="40px" mb="20px" />
      </Router>
    </>
  );
}

export function Bbank() {
  return (
    <>
      <Wrap
        spacing="30px"
        mb={10}
        alignItems="center"
        padding="1em 0"
        justifyContent="space-between"
      >
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
      </Wrap>
      <Divider />
    </>
  );
}

export function SocialHandles() {
  return (
    <>
      <Stack pt={10} mb={12}>
        <Text color="#7D8DA7">Step 2/3</Text>
        <Heading size="lg" pb="5px" pt="20px" color="var(--dark)">
          Social Handles
        </Heading>

        <Stack>
          <Text color="#7D8DA7" fontSize={16}>
            Enter your business social media handles
          </Text>
        </Stack>
      </Stack>

      <VStack mb="30px" align="left" spacing={10}>
        <VStack spacing={2} align="left">
          <Text fontWeight="bold">Choose your Abeg Tag (required)</Text>
          <Input Width="400px" placeholder="@" type="number" size="lg"></Input>
        </VStack>

        <Wrap spacing="60px" align="left">
          <Stack>
            <Text fontWeight="bold">Instagram</Text>
            <Input placeholder="@" width="400px" size="lg"></Input>
          </Stack>

          <Stack>
            <Text fontWeight="bold">Twitter</Text>
            <Input placeholder="@" Width="400px" size="lg"></Input>
          </Stack>
        </Wrap>
      </VStack>

      <Divider />
    </>
  );
}

export function BusinessCat() {
  const toast = useToast();
  return (
    <>
      <Stack pt={10} mb={12}>
        <Text color="#7D8DA7">Step 3/3</Text>
        <Heading size="lg" mt={4} pb="40px" color="var(--dark)">
          Business Category
        </Heading>

        <Wrap spacing={20}>
          <VStack align="left" spacing={2}>
            <Text fontWeight="bold">Type of your Business</Text>
            <Select size="lg" width="400px" placeholder=""></Select>
          </VStack>
          <VStack align="left" spacing={2}>
            <Text fontWeight="bold">Business Category</Text>
            <Select size="lg" width="400px" placeholder=""></Select>
          </VStack>
        </Wrap>

        <Stack pt="30px">
          <Text as="h4" fontWeight="bold" fontSize={12}>
            Do you use POS machine for your business?
          </Text>
          <Stack spacing={5} direction="row">
            <Button background="var(--gray-bg)">Yes</Button>

            <Button border="0.1px solid var(--google-gray)">No</Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Box mt="20px" align="right">
        <Button
          onClick={() =>
            toast({
              title: "Account created.",
              description: "We've created your account for you.",
              status: "success",
              duration: 9000,
              isClosable: true,
            })
          }
          colorScheme="blue"
        >
          Complete
        </Button>
      </Box>
    </>
  );
}
