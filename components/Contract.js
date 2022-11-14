import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { useState } from "react";
import { contractAdd, contractABI } from "../contract/contractInfo";
import {
  Input,
  Button,
  Flex,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export function ContractMessage() {
  const { address } = useAccount();
  const [input, setInput] = useState();

  const { data } = useContractRead({
    address: contractAdd,
    abi: contractABI,
    functionName: "showLastestMsg",
    args: ["5", address],
  });
  const { write, status } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: contractAdd,
    abi: contractABI,
    functionName: "newMsg",
    args: [input],
  });
  console.log(data);
  let msgs = data?.map((msg) => (
    <ListItem color="#ffffff" ml={[2]}>
      {msg}
    </ListItem>
  ));

  return (
    <>
      <Flex mt={[10]} direction={["column"]}>
        <Heading as="h4" size="md">
          Your Address:
        </Heading>
        <Text>{address}</Text>
        <Flex mt={[2]}>
          <Input
            placeholder="enter your message"
            size="md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            bgColor="#086f83"
            color="#ffffff"
            ml={[1]}
            onClick={() => write()}
          >
            Send
          </Button>
        </Flex>
      </Flex>
      <Box mt={[2]} style={{ color: "grey" }}>
        Tx Status: {status}
      </Box>
      <Box
        mt={[10]}
        p={[5]}
        w="500px"
        bgGradient="linear(to-b, #065666, #086f83)"
        borderRadius="md"
      >
        <Heading textAlign={["center"]} as="h4" size="md" color="#ffffff">
          The Latest Messages
        </Heading>
        <UnorderedList>{msgs}</UnorderedList>
        {/* {data && <pre>&gt; {data.join("\r\n> ")}</pre>} */}
      </Box>
    </>
  );
}
