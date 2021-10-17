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
} from "@chakra-ui/react";
import { render } from "react-dom";

import { CheckIcon } from '@chakra-ui/icons';

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
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel color='var(--dark)' pb={4}>
              <Text mb={5}>We only need your access to your</Text>
            <UnorderedList>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon/>
              <ListItem> Lorem ipsum dolor sit amet</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon/>
              <ListItem> Lorem ipsum dolor sit amet</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon/>
              <ListItem> Lorem ipsum dolor sit amet</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon/>
              <ListItem> Lorem ipsum dolor sit amet</ListItem>
              </Stack>
              <Stack direction='row' align='center' spacing={2}>
              <CheckIcon/>
              <ListItem> Lorem ipsum dolor sit amet</ListItem>
              </Stack>
                
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}
