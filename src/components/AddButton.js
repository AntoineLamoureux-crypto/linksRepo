import React from 'react'
import { Box } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

function AddButton({ onOpen }) {
  return (
    <Box ml={'50%'} >
        <motion.div
              whileHover={{ scale: 1.3, color: 'white' }}
              transition={{ type: 'spring', stiffness: 900 }}
        >
        <AddIcon boxSize={'6'} mt={'20px'}  mr={'5px'} style={{ cursor:'pointer' }} onClick={onOpen}/>
        </motion.div>
    </Box>
  )
}

export default AddButton