import React, { useState } from "react";
import { Box, Container, Heading, Input, VStack, HStack, Text, Button, SimpleGrid, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

const jobListings = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", location: "New York, NY", salary: "$80,000 - $120,000" },
  { id: 2, title: "Backend Engineer", company: "DataSystems", location: "San Francisco, CA", salary: "$90,000 - $140,000" },
  { id: 3, title: "UX Designer", company: "CreativeMinds", location: "Austin, TX", salary: "$70,000 - $110,000" },
  { id: 4, title: "Data Scientist", company: "AI Innovations", location: "Seattle, WA", salary: "$100,000 - $160,000" },
  { id: 5, title: "DevOps Engineer", company: "CloudTech", location: "Chicago, IL", salary: "$85,000 - $130,000" },
];

const JobCard = ({ job }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" bg={cardBg}>
      <Heading fontSize="xl">{job.title}</Heading>
      <Text mt={2}>{job.company}</Text>
      <HStack mt={2}>
        <FaMapMarkerAlt />
        <Text>{job.location}</Text>
      </HStack>
      <HStack mt={2}>
        <FaMoneyBillWave />
        <Text>{job.salary}</Text>
      </HStack>
      <Button mt={4} colorScheme="blue" size="sm">
        Apply Now
      </Button>
    </Box>
  );
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobListings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Find Your Dream Job
        </Heading>
        <HStack>
          <Input
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button leftIcon={<FaSearch />} colorScheme="blue">
            Search
          </Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;