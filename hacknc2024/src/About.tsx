import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  Image,
  SimpleGrid,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

import { colors } from './config'

const About = () => {
  return (
      <Box display="flex" flexDirection="column" alignItems={"center"}>
        {/* Hero Section */}
        <Box textAlign="center" paddingTop={256} paddingBottom={192}
            bgImage="linear-gradient(to right, #0c2340, #232323)"
            // bgColor="black"
            color="white"
            width="100%"
        >
          <Heading as="h1" size="2xl" mb={4}>
            SkyTogether
          </Heading>
          <Text fontSize="lg" mb={8}>
            Connect with fellow astronomy enthusiasts.
          </Text>
          <Link href="/">
            <Button size="lg" colorScheme="teal" color="white" bgColor={colors.primary}>
                Get Started
            </Button>
          </Link>
        </Box>

        {/* Features Section */}
        <VStack gap={8} my={20} width={"80%"}>
          <Heading as="h2" size="3xl">
            Features
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
            <FeatureCard title="Astronomical Events Calendar" description="Stay informed about upcoming celestial events like meteor showers and solar eclipses." />
            <FeatureCard title="Capture and Share Your Sky" description="Share your photos of comets and planets, and explore the work of others in the community." />
            <FeatureCard title="Anonymous Live Chat" description="Connect with fellow stargazers in a space where you can share your thoughts and experiences." />
          </SimpleGrid>
        </VStack>

        {/* Pricing Section
        <VStack my={20}>
          <Heading as="h2" size="xl">
            Pricing
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <PricingCard title="Basic Plan" price="$10/month" features={["Feature A", "Feature B"]} />
            <PricingCard title="Pro Plan" price="$20/month" features={["Feature A", "Feature B", "Feature C"]} />
          </SimpleGrid>
        </VStack> */}

        {/* Testimonials Section
        <Box textAlign="center" my={20}>
          <Heading as="h2" size="xl">
            What Our Users Say
          </Heading>
          <Text fontStyle="italic" my={4}>
            "This product has changed my life!"
          </Text>
          <Text>- Happy Customer</Text>
        </Box> */}
      </Box>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="lg">{title}</Heading>
      <Text mt={4}>{description}</Text>
    </Box>
  );
};

const PricingCard = ({ title, price, features }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <Heading size="xl">{title}</Heading>
      <Text fontSize="2xl" mt={4}>
        {price}
      </Text>
      <Text mt={4}>Features:</Text>
      <VStack align="start" spacing={2}>
        {features.map((feature, index) => (
          <Text key={index}>- {feature}</Text>
        ))}
      </VStack>
      <Button mt={4} colorScheme="teal">
        Sign Up
      </Button>
    </Box>
  );
};

export default About;
