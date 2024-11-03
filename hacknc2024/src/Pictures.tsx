// Pictures.tsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Image,
  Grid,
  Text,
  Flex,
  Button,
  Link,
} from '@chakra-ui/react';
import { Avatar } from './components/ui/avatar';

interface User {
  id: number;
  username: string;
  profilePicUrl: string;
}

interface Picture {
  id: number;
  photo_url: string;
  user_id: number;
  event_id: number;
}

interface PicturesProps {
  kind: "user" | "event"
  id: number;
}

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

const Pictures: React.FC<PicturesProps> = ({ kind, id }) => {
  const [pictures, setPictures] = useState<Array<Picture>>([])
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);

  const handleClick = (picture: Picture) => {
    setSelectedPicture(picture);
  };

  const handleClose = () => {
    setSelectedPicture(null);
  };

  async function getPicturesByUser() {
    try {
      const res = await fetch("http://127.0.0.1:8000/users/" + id + "/posts")
      const data = await res.json()
      setPictures(data)
    } catch {

    }

  }

  async function getPicturesByEvent() {
    try {
      const res = await fetch("http://127.0.0.1:8000/events/" + id + "/posts")
      const data = await res.json()
      setPictures(data)
    } catch {

    }
  }

  useEffect(() => {
    console.log("starting")
    if (kind === "user") {
      getPicturesByUser()
    }
    if (kind === "event") {
      getPicturesByEvent()
    }
    console.log(pictures)
  }, [])

  // Filter pictures based on user_id or event_id
  // const filteredPictures = dummyPictures.filter((picture) => {
  //   if (user_id) {
  //     return picture.user_id === user_id;
  //   }
  //   if (event_id) {
  //     return picture.event_id === event_id;
  //   }
  //   return true; // If neither user_id nor event_id is provided, show all pictures
  // });

  // Function to get user info based on user_id
  const getUserById = (id: number) => users.find((user) => user.id === id);

  return (
    <Box>
      {/* Grid of Pictures */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {pictures.map((picture) => (
          <Box
            key={picture.id}
            cursor="pointer"
            overflow="hidden"
            borderRadius="md"
            onClick={() => handleClick(picture)}
          >
            <Image
              src={picture.photo_url}
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
              src={selectedPicture.photo_url}
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
                <Link href={"/profile/" + id}>
                    <Avatar
                    src={getUserById(selectedPicture.user_id)?.profilePicUrl}
                    name={getUserById(selectedPicture.user_id)?.username}
                    size="md"
                    mr={2}
                    />
                    <Text color="white" fontWeight="bold">
                    {getUserById(selectedPicture.user_id)?.username}
                    </Text>
                </Link>
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