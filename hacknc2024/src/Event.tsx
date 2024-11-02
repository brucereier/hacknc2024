// Event.tsx
import React from 'react';
import { Box, Image, Text, Flex} from '@chakra-ui/core';

interface EventProps {
  event: {
    imageUrl: string;
    title: string;
    description: string;
    isGlobal: boolean;
    id: string | number;
    date: string;
  };
}

const Event: React.FC<EventProps> = ({ event }) => {
  const eventDate = new Date(event.date);
  const dateString = eventDate.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
  const timeString = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Adjust background color based on the color mode (light or dark)
  return (
    <Box
      bg={'#1a1a1a'}
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      mb={4}
      p={4}
    >
      <Flex align="center">
        <Image
          size="100px"
          objectFit="cover"
          src={event.imageUrl}
          alt={event.title}
          borderRadius="md"
          mr={4}
        />
        <Box flex="1">
          <Text fontWeight="bold" fontSize="lg" mb={1}>
            {event.title}
          </Text>
          <Text fontSize="sm" color="gray.500" mb={2}>
            {dateString} at {timeString}
          </Text>
          <Text fontSize="md" color="gray.600">
            {event.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Event;