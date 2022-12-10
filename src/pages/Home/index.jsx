import React, { useRef } from 'react'
import Banner from '../../Components/Home/Banner'
import CardCountButton from '../../Components/common/CardCountButton'
import Footer from '../../Components/common/Footer'
import Menu from '../../Components/common/Menu'
import { menuItemsData } from '../../Components/common/Menu/data'


const Home = () => {
  const menuRef = useRef();
const handleScrollMenu = ()=> menuRef.current.scrollIntoView({behavior:'smooth'})

  return (
    <>
        
        <Banner handleScrollMenu = {handleScrollMenu}/>
        <Menu list={menuItemsData} ref={menuRef} />
        <Footer/>
        <CardCountButton/>
    </>
  )
}

export default Home