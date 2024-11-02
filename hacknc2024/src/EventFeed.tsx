import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Event from './Event';

interface EventData {
  imageUrl: string;
  title: string;
  description: string;
  isGlobal: boolean;
  id: string | number;
  date: string;
}

interface EventFeedProps {
  feedType: 'local' | 'global';
  events: EventData[];
}

const EventFeed: React.FC<EventFeedProps> = ({ feedType, events }) => {
  const filteredEvents = events.filter(event =>
    feedType === 'global' ? event.isGlobal : !event.isGlobal
  );

  const sortedEvents = filteredEvents.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <Box width="100%"> {/* Ensures the feed spans the entire width */}
      <Flex direction="column" alignItems="center">
        {sortedEvents.map(event => (
          <Event key={event.id} event={event}/>
        ))}
      </Flex>
    </Box>
  );
};

export default EventFeed;