import React from 'react'
import './App.css';
import { Box, VStack  } from '@chakra-ui/react'
import Profile from './components/Profile'
import MediaLinks from './components/Medias'
import Links from './components/Links'
import { useDisclosure } from '@chakra-ui/react'
import AddLink from './components/AddLink';
import AddLinkV2 from './components/AddLinkV2';

function App() {

  return (
    <Box bgColor={'white'} height={'100vh'}>
      <Box bgColor={'black'} height={'100vh'} borderRadius={'3xl'} mx={'20px'}>
        <Box height={'100vh'} borderRadius={'3xl'} w={'70%'} mx={'auto'}>
          <VStack>
            <AddLinkV2 />
            {/*Add Button Component*/}
            {/*Profile Component*/}
            <Profile />
            {/*Medias Component*/}
            <MediaLinks />
            {/*Links Component*/}
            <Links />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
