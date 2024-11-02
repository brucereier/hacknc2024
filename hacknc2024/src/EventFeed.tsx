import React from 'react';
import { Box } from '@chakra-ui/react';
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
    <Box width="70vw"> {/* Ensures the feed spans the entire width */}
      {sortedEvents.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </Box>
  );
};

export default EventFeed;