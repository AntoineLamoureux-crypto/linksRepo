import React, { useState, useEffect } from 'react'
import { FaLink } from 'react-icons/fa'
import { Reorder } from 'framer-motion'
import { Box, Text, Button } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'

function Links() {
    const initialState = [
        {
            id: 1,
            title: 'Introducing Showcase',
            link: 'https://www.framer.com/blog/posts/introducing-showcase/'
        },
        {
            id: 2,
            title: 'Using Variants and Variables in your test components',
            link: 'https://www.framer.com/support/using-framer/component-variants/'
        },
        {
            id: 3,
            title: 'Code Components',
            link: 'https://www.framer.com/docs/guides/code-components/'
        },
        {
            id: 4,
            title: 'Framer motion',
            link: 'https://www.framer.com/motion/'
        },
        {
            id: 5,
            title: 'Framer Documentation',
            link: 'https://www.framer.com/docs/'
        }
    ]

    //use intialState for testing

    const [items, setItems] = useState(initialState)

    /*useEffect(() => {
        fetch(`http://localhost:3001/links`)
        .then(response => response.json())
        .then(data => {
            setItems(data)
        })
        .catch((err) => console.log(err))
      }, []);
    */
   
    function gotToLink(link) {
        window.location = link
    }

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems} style={{'list-style-type': 'none', marginTop:'15px'}}>
      {items.map((item) => (
        <Reorder.Item key={item.id} value={item} color={'white'} style={{marginTop: '20px', marginBottom: '20px', background: '#454545', borderRadius: '10px' }}>
            <Box p={'10px'} w={'30vw'} display='inline-flex'>
                <Box mr={'10px'} ml={'5px'} my={'auto'} textAlign={'left'} >
                    <Popover isLazy size={'xm'}>
                        <PopoverTrigger>
                            <Button bgColor={'transparent'}><FaLink style={{ cursor:'pointer' }} /></Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverHeader fontWeight='semibold' w={'90%'}>{item.title}</PopoverHeader>
                                <PopoverArrow />
                                <PopoverCloseButton />
                        <PopoverBody >
                            <Box mx={'100px'}>
                            <Button onClick={()=> gotToLink(item.link)} w="100%" bgColor={'blue.500'}>Go to link</Button>
                            </Box>
                        </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Box>
                <Box my={'auto'} textAlign={'left'}>
                    <Text fontWeight={'semibold'} color={'white'}>
                        {item.title}
                    </Text>
                </Box>
            </Box>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}

export default Links