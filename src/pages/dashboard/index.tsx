import type { NextPage } from "next";
import NextImage from "next/image";
import { signOut } from "next-auth/react";
import {
  Center,
  Button,
  Spinner,
  Text,
  Heading,
  Tag,
  TagLabel,
  HStack,
} from "@chakra-ui/react";
import { useAuthData } from "@/hooks/auth/useAuthData";
import Meta from "@/components/Meta";
import { useUser } from "@/hooks/user/useUser";

const Dashboard: NextPage = () => {
  const { session, isLoading, isUnAuthenticated } = useAuthData();
  const { DeleteUser } = useUser();

  if (isLoading || isUnAuthenticated) {
    return (
      <Center minH="100vh">
        <HStack spacing=".75em">
          <Spinner color="#753FE5" size="lg" thickness="5px" />
          <Heading as="h1" fontSize="10pt" fontWeight="500">
            Loading..<span className="blink">.</span>
          </Heading>
        </HStack>
      </Center>
    );
  }

  return (
    <Center as="main" flexDir="column" minH="100vh">
      <Meta title="Dashboard" />
      <Center flexDir="column">
        <NextImage
          src="/assets/images/logo.svg"
          alt="Template Logo"
          width={50}
          height={50}
          quality={100}
          blurDataURL="https://via.placeholder.com/300/26"
          placeholder="blur"
        />
        <Heading as="h1" fontSize="22pt">
          Welcome {session?.user?.name},{" "}
        </Heading>
        <Text fontSize="10pt" variant="subtle">
          Thanks for using create-typedef-app
        </Text>
        <Tag mt="1em" size="sm">
          <TagLabel>{session?.user?.email}</TagLabel>
        </Tag>
        <HStack mt="2em">
          <Button
            variant="danger"
            onClick={() => DeleteUser(session?.user?.id)}
            size="sm"
          >
            Delete
          </Button>
          <Button variant="primary" onClick={() => signOut()} size="sm">
            Logout
          </Button>
        </HStack>
      </Center>
    </Center>
  );
};

export default Dashboard;
