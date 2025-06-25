import { Box, Link } from '@chakra-ui/react';

import { HStack, Group, Button } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box as="div" margin={'1rem'}>
      <HStack
        p={'1rem'}
        bg={'whiteAlpha.100'}
        display={'flex'}
        justifyContent={'space-between'}
        rounded={'lg'}
      >
        <Group ml={'2%'} fontSize={'20px'}>
          <Link>Home</Link>
          <Link>List</Link>
        </Group>

        <Group>
          <Link>
            <Button>Login</Button>
          </Link>
          <Link>
            <Button>Sign up</Button>
          </Link>
        </Group>
      </HStack>
    </Box>
  );
}
