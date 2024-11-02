// EventPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Flex, Image, Spinner, Tabs} from '@chakra-ui/react';
import {colors} from './config';

interface EventData {
    id: number;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    isGlobal: boolean;
}

const events: EventData[] = [
    {
        imageUrl: 'https://bit.ly/naruto-sage',
        title: 'Local Event 1',
        description: 'Description of Local Event 1',
        isGlobal: false,
        id: 1,
        date: '2023-11-01T10:00:00Z',
    },
    {
        imageUrl: 'https://bit.ly/naruto-sage',
        title: 'Global Event 1',
        description: 'Description of Global Event 1',
        isGlobal: true,
        id: 2,
        date: '2023-11-03T12:00:00Z',
    },
    {
        imageUrl: 'https://bit.ly/naruto-sage',
        title: 'Local Event 2',
        description: 'Description of Local Event 2',
        isGlobal: false,
        id: 3,
        date: '2023-10-30T09:00:00Z',
    },
    {
        imageUrl: 'https://bit.ly/naruto-sage',
        title: 'Global Event 2',
        description: 'Description of Global Event 2',
        isGlobal: true,
        id: 4,
        date: '2023-11-02T14:00:00Z',
    },
];

const EventPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchedEvent = events.find((event) => event.id === parseInt(id || '', 10));
        setEvent(fetchedEvent || null);
        setLoading(false);
    }, [id]);

    if (loading) {
        return <Spinner size="xl" />;
    }

    if (!event) {
        return <Text>No event found for ID: {id}</Text>;
    }

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

    const [value, setValue] = useState<string | null>('first');

    return (
        
        <Flex
            direction="column"
            minHeight="100vh"
            width="100%"
            alignItems="flex-start"
            justifyContent="flex-start"
            p={8}
        >
            {/* Event Details Box */}
            <Box width="100%" maxWidth="800px" bg="gray.800" borderRadius="lg" boxShadow="2xl" p={8} mb={8}>
                <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
                    <Image
                        height="300px"
                        width="300px"
                        objectFit="cover"
                        src={event.imageUrl}
                        alt={event.title}
                        borderRadius="lg"
                        mr={{ md: 6 }}
                        mb={{ base: 4, md: 0 }}
                    />
                    <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                        <Text fontSize="4xl" fontWeight="bold" color="white" mb={4}>
                            {event.title}
                        </Text>
                        <Text fontSize="lg" color="gray.300" mb={4}>
                            {event.description}
                        </Text>
                        <Text fontSize="lg" color="gray.500">
                            {dateString} at {timeString}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};

export default EventPage;