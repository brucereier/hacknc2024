// Chat.tsx
import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  VStack,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { Avatar } from "@chakra-ui/avatar"


interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

interface ChatMessage {
  id: number;
  user: User;
  timestamp: string;
  message: string;
}

const dummyMessages: ChatMessage[] = [
  {
    id: 1,
    user: {
      id: 1,
      username: 'Naruto',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
    timestamp: '2023-11-02T14:00:00Z',
    message: 'Believe it!',
  },
  {
    id: 2,
    user: {
      id: 2,
      username: 'Sasuke',
      profilePicUrl: 'https://bit.ly/sasuke-uchiha',
    },
    timestamp: '2023-11-02T14:05:00Z',
    message: 'I need to become stronger.',
  },
  {
    id: 3,
    user: {
      id: 3,
      username: 'Sakura',
      profilePicUrl: 'https://bit.ly/sakura-haruno',
    },
    timestamp: '2023-11-02T14:10:00Z',
    message: 'Let’s do our best!',
  },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(dummyMessages);
  const [inputValue, setInputValue] = useState('');

  // Functionality to handle message sending will go here in the future

  return (
    <Box w="100%" maxW="800px" mx="auto" bg="gray.800" borderRadius="lg" p={4}>
      <VStack align="stretch">
        {/* Chat Messages */}
        {messages
          .slice()
          .sort(
            (a, b) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
          .map((msg) => (
            <Flex key={msg.id} align="flex-start">
              <Avatar src={msg.user.profilePicUrl} name={msg.user.username} size="xs"/>
              <Box ml={3} flex="1">
                <HStack>
                  <Text fontWeight="bold" color="white">
                    {msg.user.username}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(msg.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </HStack>
                <Text color="gray.300">{msg.message}</Text>
              </Box>
            </Flex>
          ))}

        {/* Message Input */}
        <Spacer />
        <Flex as="form" onSubmit={(e) => e.preventDefault()}>
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            bg="gray.700"
            color="white"
            mr={2}
          />
          <Button colorScheme="blue">Send</Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Chat;