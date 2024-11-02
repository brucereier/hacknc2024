import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

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
  const dateString = eventDate.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const timeString = eventDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Box
      bg="#1a1a1a"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      mb={4}
      width="90%"
      p={4}
    >
      <Flex width="100%">
        <Image
          height="160px"
          width="160px"
          objectFit="cover"
          src={event.imageUrl}
          alt={event.title}
          borderRadius="md"
          mr={4}
        />
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          height="180px" // Set height to match the image
        >
          <Box mt={-2}>
            <Text fontWeight="bold" fontSize="lg" mb={0} textAlign="left">
              {event.title}
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="left" mt={0}>
              {event.description}
            </Text>
          </Box>
          <Box mt="auto" textAlign="right">
            <Text fontSize="sm">
                {dateString} at {timeString}
            </Text>
          </Box>

        </Box>
      </Flex>
    </Box>
  );
};

export default Event;