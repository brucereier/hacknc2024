// Home.tsx
import React, { useState } from 'react';
import { Tabs, Flex } from '@chakra-ui/react';
import { colors } from './config';
import EventFeed from './EventFeed';

const events = [
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

const Home: React.FC = () => {
  const [value, setValue] = useState<string | null>('first');

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      width="100%"
      alignItems="flex-start"
      justifyContent="flex-start"
      p={0}
      paddingTop="8"
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
            Global
          </Tabs.Trigger>
          <Tabs.Trigger
            value="second"
            _selected={{ color: colors.secondary }}
            fontSize="2xl"
            px={6}
            py={4}
          >
            Local
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="first">
          <EventFeed feedType="global" events={events} />
        </Tabs.Content>
        <Tabs.Content value="second">
          <EventFeed feedType="local" events={events} />
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
};

export default Home;