import React from 'react'
import { Box, Text, VStack, Image } from '@chakra-ui/react'

function Profile() {
  return (
    <Box mt={'60px'}>
      <VStack>
        <Image src='https://bit.ly/dan-abramov' alt='Profile Picture' borderRadius={'full'} w={'100px'} h={'100px'} />
        <Text color={'white'} fontFamily={'body'} fontSize={'30px'} fontWeight={'bold'} pt={'10px'}>
          Antoine Lamoureux
        </Text>
        <Text color={'gray'} px={'20%'} pt={'5px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Tenetur accusamus quod saepe commodi? Eaque.
        </Text>
      </VStack>

    </Box>
  )
}

export default Profile