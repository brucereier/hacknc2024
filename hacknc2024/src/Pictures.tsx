// Pictures.tsx
import React, { useState } from 'react';
import {
  Box,
  Image,
  Grid,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import { Avatar } from './components/ui/avatar';

interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

interface Picture {
  id: number;
  imageUrl: string;
  userId: number;
  eventId: number;
}

interface PicturesProps {
  userId?: number;
  eventId?: number;
}

const dummyPictures: Picture[] = [
  {
    id: 1,
    imageUrl: 'https://bit.ly/2Z4KKcF',
    userId: 1,
    eventId: 1,
  },
  {
    id: 2,
    imageUrl: 'https://bit.ly/3nG5Y2z',
    userId: 2,
    eventId: 1,
  },
  {
    id: 3,
    imageUrl: 'https://bit.ly/3qLb1d1',
    userId: 1,
    eventId: 2,
  },
  // Add more pictures with various userIds and eventIds
];

const users: User[] = [
  {
    id: 1,
    username: 'Naruto',
    profilePicUrl: 'https://bit.ly/naruto-sage',
  },
  {
    id: 2,
    username: 'Sasuke',
    profilePicUrl: 'https://bit.ly/sasuke-uchiha',
  },
  // Add more users as needed
];

const Pictures: React.FC<PicturesProps> = ({ userId, eventId }) => {
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);

  const handleClick = (picture: Picture) => {
    setSelectedPicture(picture);
  };

  const handleClose = () => {
    setSelectedPicture(null);
  };

  // Filter pictures based on userId or eventId
  const filteredPictures = dummyPictures.filter((picture) => {
    if (userId) {
      return picture.userId === userId;
    }
    if (eventId) {
      return picture.eventId === eventId;
    }
    return true; // If neither userId nor eventId is provided, show all pictures
  });

  // Function to get user info based on userId
  const getUserById = (id: number) => users.find((user) => user.id === id);

  return (
    <Box>
      {/* Grid of Pictures */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {filteredPictures.map((picture) => (
          <Box
            key={picture.id}
            cursor="pointer"
            overflow="hidden"
            borderRadius="md"
            onClick={() => handleClick(picture)}
          >
            <Image
              src={picture.imageUrl}
              alt={`Picture ${picture.id}`}
              objectFit="cover"
              width="100%"
              height="200px"
            />
          </Box>
        ))}
      </Grid>

      {/* Custom Dialog for Selected Picture */}
      {selectedPicture && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.8)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1000}
        >
          <Box
            position="relative"
            bg="gray.800"
            borderRadius="md"
            p={4}
            maxWidth="90%"
            maxHeight="90%"
            overflow="auto"
          >
            {/* Image */}
            <Image
              src={selectedPicture.imageUrl}
              alt={`Picture ${selectedPicture.id}`}
              objectFit="contain"
              width="100%"
              maxHeight="80vh"
              mb={4}
            />
            {/* User Info and Close Button */}
            <Flex alignItems="center" justifyContent="space-between" mb={4}>
              {/* Avatar and Username */}
              <Flex alignItems="center">
                <Avatar
                  src={getUserById(selectedPicture.userId)?.profilePicUrl}
                  name={getUserById(selectedPicture.userId)?.username}
                  size="md"
                  mr={2}
                />
                <Text color="white" fontWeight="bold">
                  {getUserById(selectedPicture.userId)?.username}
                </Text>
              </Flex>
              {/* Close Button */}
              <Button colorScheme="red" onClick={handleClose}>
                Close
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Pictures;