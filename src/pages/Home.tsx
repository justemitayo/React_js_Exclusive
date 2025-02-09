import React from 'react'
import Voucher from '../Screen/HomePage/Voucher.tsx'
import Delivery from '../Components/Delivery/Delivery.tsx'
import ProductDisplay from '../Screen/HomePage/ProductDisplay.tsx'
import Arrival from '../Screen/HomePage/Arrival.tsx'
import Browse from '../Screen/HomePage/Browse.tsx'
import Best from '../Screen/HomePage/Best.tsx'
import Enhance from '../Screen/HomePage/Enhance.tsx'
import Flash from '../Screen/Flash/Flash.tsx'

const Home:React.FC = () => {
  return (
    <>
      <Voucher />
      <Flash />
      <Browse />
      <Best />
      <Enhance />
      <ProductDisplay />
      <Arrival />
      <Delivery />
    </>
  )
}

export default Home