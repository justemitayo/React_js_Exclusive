import React from 'react'
import Story from '../Screen/Story/Story.tsx'
import Delivery from '../Components/Delivery/Delivery.tsx'
import Chair from '../Screen/Story/Chair.tsx'

const About: React.FC = () => {
  return (
    <>
      <Story />
      <Chair />
      <Delivery />

    </>
  )
}

export default About