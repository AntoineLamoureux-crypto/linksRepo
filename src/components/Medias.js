import React from 'react'
import { HStack } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaGoogle, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion'

function Medias() {
  return (
    <HStack spacing={'35px'} pt={'20px'} >
        <motion.div
              whileHover={{ scale: 1.3, color: 'rgb(26, 32, 44)' }}
              transition={{ type: 'tween', stiffness: 300 }}
        >
        <FaInstagram size={'30px'} color={'white'} />
        </motion.div>
        <motion.div
              whileHover={{ scale: 1.3, color: 'rgb(26, 32, 44)' }}
              transition={{ type: 'tween', stiffness: 300 }}
        >
        <FaTwitter size={'30px'} color={'white'} />
        </motion.div>
        <motion.div
              whileHover={{ scale: 1.3, color: 'rgb(26, 32, 44)' }}
              transition={{ type: 'tween', stiffness: 300 }}
        >
        <FaGoogle size={'30px'} color={'white'} />
        </motion.div>
        <motion.div
              whileHover={{ scale: 1.3, color: 'rgb(26, 32, 44)' }}
              transition={{ type: 'tween', stiffness: 300 }}
        >
        <FaSpotify size={'30px'} color={'white'} />
        </motion.div>
    </HStack>
  )
}

export default Medias