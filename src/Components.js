import React from "react";
import "./index.css";
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
  HStack,
  VStack,
  Stack,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { render } from "react-dom";

import { CheckIcon, LockIcon } from '@chakra-ui/icons';

export function Verify() {
  return (
    <Stack pt={5} mb={12}>
      <Text color="var(--google-grey)">Step 1/3</Text>
      <Heading size="lg" mt={4} pb="55px" color="var(--dark)">
        Verify Account
      </Heading>

      <Stack>
        <Text as="h4" fontSize={12}>
          Select a verification method
        </Text>
        <Stack spacing={5} direction="row">
          <Button background="var(--gray-bg)">BVN</Button>
          <Button border="0.1px solid var(--google-gray)">
            Personal Account Number
          </Button>
        </Stack>
        <BvnVerify />
      </Stack>
    </Stack>
  );
}

export function BvnVerify() {
  return (
    <>
      <VStack spacing={5} align="left" pt={6}>
        <Heading size="sm">Bank Verification Number (11-digits)</Heading>
        <Input size="lg" />
      </VStack>

      <Accordion background='var(--grey)' padding='1em' mt="20px">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
               <LockIcon color='purple.600' boxSize={5} / > Why do we neeed your BVN
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pl='3em' className="txt" color='var(--dark)' pb={4}>
              <Text mb={5}>We only need your access to your</Text>
            <UnorderedList>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon color='#56F2C3'/>
              <ListItem> Full Name</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon color='#56F2C3'/>
              <ListItem> Phone Number</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon color='#56F2C3'/>
              <ListItem> Date of Birth</ListItem>
              </Stack>
            
            </UnorderedList>

            <Divider/>

              <Stack direction='row' align='center' alignItems='center' spacing={2}>
              <LockIcon color="orange"/>
              <Text> Your BVN does not give us access to yur bank accounts or transaction </Text>
              </Stack>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
