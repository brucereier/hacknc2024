// Event.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/event/${event.id}`); // Navigate to the event page with the event's ID
    };

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
            as="button" // Make the entire Box clickable
            onClick={handleClick} // Add onClick to handle navigation
            bg="#1a1a1a"
            borderRadius="lg"
            boxShadow="lg"
            overflow="hidden"
            mb={4}
            width="90%"
            p={4}
            transition="transform 0.2s ease"
            _hover={{ transform: 'scale(1.03)' }}
            _focus={{ transform: 'scale(1.03)', boxShadow: 'outline' }}
        >
            <Flex width="100%">
                <Flex alignItems="center">
                    <Image
                        height="160px"
                        width="160px"
                        objectFit="cover"
                        src={event.imageUrl}
                        alt={event.title}
                        borderRadius="md"
                        mr={4}
                    />
                </Flex>
                <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    height="170px"
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