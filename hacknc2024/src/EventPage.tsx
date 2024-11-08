import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Flex, Image, VStack, Tabs } from '@chakra-ui/react';
import {colors} from './config';
import Chat from './Chat';
import Pictures from './Pictures';

interface EventData {
    id: number;
    title: string;
    description: string;
    date: string;
    image_url: string;
    is_global: boolean;
}

// const events: EventData[] = [
//     {
//         imageUrl: 'https://bit.ly/naruto-sage',
//         title: 'Local Event 1',
//         description: 'Description of Local Event 1',
//         isGlobal: false,
//         id: 1,
//         date: '2023-11-01T10:00:00Z',
//     },
//     {
//         imageUrl: 'https://bit.ly/naruto-sage',
//         title: 'Global Event 1',
//         description: 'Description of Global Event 1',
//         isGlobal: true,
//         id: 2,
//         date: '2023-11-03T12:00:00Z',
//     },
//     {
//         imageUrl: 'https://bit.ly/naruto-sage',
//         title: 'Local Event 2',
//         description: 'Description of Local Event 2',
//         isGlobal: false,
//         id: 3,
//         date: '2023-10-30T09:00:00Z',
//     },
//     {
//         imageUrl: 'https://bit.ly/naruto-sage',
//         title: 'Global Event 2',
//         description: 'Description of Global Event 2',
//         isGlobal: true,
//         id: 4,
//         date: '2023-11-02T14:00:00Z',
//     },
// ];

const EventPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [value, setValue] = useState<string | null>('first');
    const [event, setEvent] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    async function getEvent() {
        setLoading(true)
        try {
            const res = await fetch("http://127.0.0.1:8000/events/" + id)
            const data = await res.json()
            setEvent(data)
        } catch {

        }
        setLoading(false)
    }

    useEffect(() => {
        getEvent()
    }, []);

    if (loading) {
        return <Box>
            Loading...
        </Box>;
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

    return (
        <Box p={8} margin="0 auto">
            <VStack>
                {/* First Box - Existing Content */}
                <Box
                    bg="gray.800"
                    borderRadius="lg"
                    boxShadow="2xl"
                    w="100%"
                    p={8}
                    mb={4}
                    zIndex={-2}
                >
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        alignItems="center"
                    >
                        <Image
                            height="300px"
                            width="300px"
                            objectFit="cover"
                            src={event.image_url}
                            alt={event.title}
                            borderRadius="lg"
                            mr={{ md: 6 }}
                            mb={{ base: 4, md: 0 }}
                        />
                        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
                            <Text
                                fontSize="4xl"
                                fontWeight="bold"
                                color="white"
                                mb={4}
                            >
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

                {/* Second Box - New Content */}
                <Box
                    bg="gray.800"
                    borderRadius="lg"
                    boxShadow="2xl"
                    w="100%"
                    p={8}
                >
                    <Flex
                        direction="column"
                        minHeight="100vh"
                        width="100%"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                        p={0}
                        paddingTop="5"
                        zIndex={-1}
                        >
                        <Tabs.Root
                            value={value}
                            onValueChange={(e) => setValue(e.value)}
                            variant="plain"
                            style={{ width: '100%' }}
                        >
                            <Tabs.List
                            justifyContent="center"
                            style={{ width: '100%', marginTop: 0 }}
                            >
                            <Tabs.Trigger
                                value="first"
                                _selected={{ color: colors.secondary }}
                                mr={2}
                                fontSize="2xl" // Increased font size
                                px={6}         // Added horizontal padding
                                py={4}         // Added vertical padding
                            >
                                Chat
                            </Tabs.Trigger>
                            <Tabs.Trigger
                                value="second"
                                _selected={{ color: colors.secondary }}
                                fontSize="2xl"
                                px={6}
                                py={4}
                            >
                                Pictures
                            </Tabs.Trigger>
                            </Tabs.List>

                            <Tabs.Content value="first">
                                {
                                    id &&
                                    <Chat eventId={parseInt(id)}></Chat>
                                }
                            </Tabs.Content>
                            <Tabs.Content value="second">
                                {
                                    id &&
                                    <Pictures kind="event" id={parseInt(id)} />
                                }
                            </Tabs.Content>
                        </Tabs.Root>
                        </Flex>
                </Box>
            </VStack>
        </Box>
    );
};

export default EventPage;