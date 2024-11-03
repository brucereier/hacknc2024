// Chat.tsx
import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Flex,
  Input,
  Button,
  VStack,
  HStack,
  Link,
} from '@chakra-ui/react';
import { Avatar } from './components/ui/avatar';

interface User {
  id: number;
  username: string;
  avatar_url: string;
}

interface ChatMessage {
  id: number;
  user_id: number;
  event_id: number;
  user: User;
  timestamp: string;
  text: string;
}

interface ChatProps {
  userId?: number;
  eventId: number;
}

const Chat: React.FC<ChatProps> = ({ userId, eventId }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (userId) {
      fetchChatsByUser(userId);
    } else if (eventId) {
      fetchChatsByEvent(eventId);
    }
  }, []);

  // Fetch chats by user ID
  const fetchChatsByUser = async (userId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chats/users/${userId}`);
      if (!response.ok) throw new Error("Failed to fetch chats by user");
      const data: ChatMessage[] = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching chats by user:", error);
    }
  };

  // Fetch chats by event ID
  const fetchChatsByEvent = async (eventId: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/chats/events/${eventId}`);
      if (!response.ok) throw new Error("Failed to fetch chats by event");
      const data: ChatMessage[] = await response.json();
      setMessages(data);
      console.log(messages)
    } catch (error) {
      console.error("Error fetching chats by event:", error);
    }
  };

  // Send a new chat message
  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      user_id: userId || 1, // Replace with actual user data
      event_id: eventId,
      text: inputValue,
      timestamp: new Date().toISOString(),
    };

    console.log(newMessage)

    try {
      const response = await fetch('http://127.0.0.1:8000/chats/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newMessage),
        // mode: 'no-cors'
      });
      if (!response.ok) throw new Error("Failed to send chat message");

      const savedMessage = await response.json();
      console.log(savedMessage)
      setMessages((prevMessages) => [savedMessage, ...prevMessages]);
      console.log(messages)
      setInputValue('');
    } catch (error) {
      console.error("Error sending chat message:", error);
    }
  };

  return (
    <Box w="100%" maxW="800px" mx="auto" bg="gray.800" borderRadius="lg" p={4} zIndex={-1}>
      <VStack align="stretch">
        {/* Message Input - Moved to the top */}
        <Flex as="form" onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}>
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            bg="gray.700"
            color="white"
            mr={2}
          />
          <Button colorScheme="blue" type="submit">Send</Button>
        </Flex>

        {/* Chat Messages */}
        <VStack align="stretch">
          {messages
            // .slice()
            .sort(
              (a, b) =>
                new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            )
            .map((msg) => (
              <Flex key={msg.id} align="flex-start">
                <Link href={"/profile/" + msg.user.id}>
                  <Avatar
                    src={msg?.user?.avatar_url || 'https://bit.ly/naruto-sage'}
                    name={msg?.user?.username}
                    size="lg"
                  />
                </Link>
                <Box ml={3} flex="1">
                  <HStack alignItems="baseline">
                    <Link href={"/profile/" + msg.user.id}>
                      <Text fontWeight="bold" color="white">
                        {msg?.user?.username}
                      </Text>
                    </Link>
                    <Text fontSize="sm" color="gray.500">
                      {new Date(msg.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Text>
                  </HStack>
                  <Text color="gray.300" textAlign="left">
                    {msg.text}
                  </Text>
                </Box>
              </Flex>
            ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Chat;