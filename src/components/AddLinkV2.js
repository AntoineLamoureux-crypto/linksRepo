import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input  } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AddIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

function AddLinkV2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const [item, setItem] = useState({
        title: "",
        link: ""
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
    
    function addLinkOnClick(newLink) {
        axios.post('http://localhost:3001/newLink', newLink);
        setItem({
            title: "",
            link: ""
        })
        toast({
            title: 'New Link',
            description: "We've created a new link for you",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
          
    }
  
    return (
      <>
      <Box ml={'40%'} mt={'15px'}>
        <motion.div
              whileHover={{ scale: 1.3, color: 'white' }}
              transition={{ type: 'spring', stiffness: 900 }}
        >
            <Button onClick={onOpen} bgColor={'black'} _hover={{bgColor: 'black'}}><AddIcon style={{ cursor:'pointer' }} boxSize={6} /></Button>
        </motion.div>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
              <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 900 }}
                    style={{width: 'fit-content', margin: 'auto'}}
                >
                   <ModalHeader>Add new link</ModalHeader>
                </motion.div>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <motion.div
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Input placeholder='Title' name="title" value={ item.title } onChange={handleOnChange} />
                </motion.div>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Link</FormLabel>
                <motion.div
                    whileTap={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Input placeholder='Link' name="link" value={ item.link } onChange={handleOnChange} />
                </motion.div>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
                <motion.div 
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                >
                    <Button colorScheme='blue' mr={3} onClick={()=> addLinkOnClick(item)}>
                        Save
                    </Button>
                </motion.div>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </>
    )
  }

export default AddLinkV2