// Profile.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Flex, Stack } from '@chakra-ui/react';
import { Avatar } from './components/ui/avatar';
import Pictures from './Pictures';

interface User {
  id: number;
  username: string;
  profilePicUrl: string;
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

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userId = parseInt(id || '', 10);
    const fetchedUser = users.find((u) => u.id === userId);
    setUser(fetchedUser || null);
  }, [id]);

  if (!user) {
    return (
      <Box p={8}>
        <Text fontSize="xl" color="red.500">
          User not found
        </Text>
      </Box>
    );
  }

  return (
    <Box px={4}>
      <Stack direction="column">
        {/* First Box - User Info */}
        <Box
          bg="gray.800"
          borderRadius="lg"
          boxShadow="2xl"
          w="100%"
          p={6}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
          >
            <Avatar
              size="2xl"
              src={user.profilePicUrl}
              name={user.username}
              mr={{ md: 6 }}
              mb={{ base: 4, md: 0 }}
            />
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color="white"
              textAlign={{ base: 'center', md: 'left' }}
            >
              {user.username}
            </Text>
          </Flex>
        </Box>

        {/* Second Box - User Pictures */}
        <Box
          bg="gray.800"
          borderRadius="lg"
          boxShadow="2xl"
          w="100%"
          p={6}
        >
          <Pictures userId={user.id} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;