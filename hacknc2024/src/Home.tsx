// Home.tsx
import React from 'react';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/core'; // Note: Updated import to '@chakra-ui/react'
import { colors } from './config';
import EventFeed from './EventFeed';

const events = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    title: 'Local Event 1',
    description: 'Description of Local Event 1',
    isGlobal: false,
    id: 1,
    date: '2023-11-01T10:00:00Z',
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    title: 'Global Event 1',
    description: 'Description of Global Event 1',
    isGlobal: true,
    id: 2,
    date: '2023-11-03T12:00:00Z',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    title: 'Local Event 2',
    description: 'Description of Local Event 2',
    isGlobal: false,
    id: 3,
    date: '2023-10-30T09:00:00Z',
  },
  {
    imageUrl: 'https://example.com/image4.jpg',
    title: 'Global Event 2',
    description: 'Description of Global Event 2',
    isGlobal: true,
    id: 4,
    date: '2023-11-02T14:00:00Z',
  },
  // Add more events as needed
];

const Home: React.FC = () => {
  return (
    <Flex direction="column" align="center" minHeight="100vh" p={0} width="100%">
      <Tabs variant="unstyled" isFitted width="100%">
        <TabList mb={10}>
          <Tab fontSize="lg" py={4} mr={2} _selected={{ color: colors.secondary }}>
            Local
          </Tab>
          <Tab fontSize="lg" py={4} _selected={{ color: colors.secondary }}>
            Global
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <EventFeed feedType="local" events={events} />
          </TabPanel>
          <TabPanel p={0}>
            <EventFeed feedType="global" events={events} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Home;