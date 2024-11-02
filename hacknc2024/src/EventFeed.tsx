// EventFeed.tsx
import React from 'react';
import { Box } from '@chakra-ui/core';
import Event from './Event'; // Assuming you have an Event component

interface EventData {
  imageUrl: string;
  title: string;
  description: string;
  isGlobal: boolean;
  id: string | number;
  date: string; // ISO date string, e.g., "2023-11-03T12:00:00Z"
}

interface EventFeedProps {
  feedType: 'local' | 'global';
  events: EventData[];
}

const EventFeed: React.FC<EventFeedProps> = ({ feedType, events }) => {
  // Filter events based on the feedType prop
  const filteredEvents = events.filter(event =>
    feedType === 'global' ? event.isGlobal : !event.isGlobal
  );

  // Sort the filtered events by date (soonest to latest)
  const sortedEvents = filteredEvents.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  return (
    <Box>
      {sortedEvents.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </Box>
  );
};

export default EventFeed;