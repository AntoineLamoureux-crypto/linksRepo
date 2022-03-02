import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Form, Input } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import axios from 'axios'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
function AddLink() {

  const [item, setItem] = useState({
    title: String,
    link: String
  });

  function handleOnChange(event) {
    const {name, value} = event.target
    setItem(prevInput => {
          return ({
              ...prevInput,
              [name] : value,
          });
      });
  }

  async function AddLinkOnClick(newLink) {
    await axios.post('https://memories-back3nd.herokuapp.com/users', newLink);
}

  
  return (
    <>
    <Box display={'flex'} ml={'45%'} mt={'20px'}>
       <Popover isLazy size={'xm'}>
          <PopoverTrigger>
            <motion.div
              whileHover={{ scale: 1.3, color: 'white' }}
              transition={{ type: 'spring', stiffness: 900 }}
            >
              <AddIcon style={{ cursor:'pointer' }} boxSize={6} />
            </motion.div>
          </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight='semibold' w={'90%'}>Add new Link</PopoverHeader>
           <PopoverArrow />
            <PopoverCloseButton />
          <PopoverBody >
          <FormControl>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Title' value={item.title } onChange={handleOnChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input placeholder='Link' value={item.link} onChange={handleOnChange} />
            </FormControl>
            <FormControl mt={4}>
              <motion.div
              whileTap={{ scale: 1.2, color: 'white' }}
              transition={{ type: 'spring', stiffness: 900 }}
            >
              <Button bgColor={'blue.300'} onClick={()=> AddLinkOnClick(item)}>Add</Button>
            </motion.div>
            </FormControl>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      </Box>
    </>
  )
}

export default AddLink