// Pictures.tsx
import React, { useState } from 'react';
import {
  Box,
  Image,
  Grid,
  Text,
  Flex,
  Button, // Imported Button from Chakra UI
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
  user: User;
}

const dummyPictures: Picture[] = [
  {
    id: 1,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 1,
      username: 'Naruto',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 2,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 2,
      username: 'Sasuke',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 3,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 3,
      username: 'Sakura',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  // Add more pictures to fill the grid
  {
    id: 4,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 4,
      username: 'Kakashi',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 5,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 5,
      username: 'Itachi',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 6,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 6,
      username: 'Gaara',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 7,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 7,
      username: 'Shikamaru',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 8,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 8,
      username: 'Hinata',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
  {
    id: 9,
    imageUrl: 'https://bit.ly/naruto-sage',
    user: {
      id: 9,
      username: 'Rock Lee',
      profilePicUrl: 'https://bit.ly/naruto-sage',
    },
  },
];

const Pictures: React.FC = () => {
    const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);
  
    const handleClick = (picture: Picture) => {
      setSelectedPicture(picture);
    };
  
    const handleClose = () => {
      setSelectedPicture(null);
    };
  
    return (
      <Box>
        {/* Grid of Pictures */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {dummyPictures.map((picture) => (
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
                    src={selectedPicture.user.profilePicUrl}
                    name={selectedPicture.user.username}
                    size="md"
                    mr={2}
                  />
                  <Text color="white" fontWeight="bold">
                    {selectedPicture.user.username}
                  </Text>
                </Flex>
                {/* Close Button */}
                <Button
                  colorScheme="red" // Makes the button red
                  onClick={handleClose}
                >
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