import React from 'react'
import { Image,Box,Button,Text,Heading,Stack,Card,CardBody,ButtonGroup,Divider,CardFooter } from '@chakra-ui/react'
import { Flex, Spacer,Select } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { useState } from 'react'
import Sidebar from './SideBar'
// import ProductsCard from './ProductCard'


const Ring = () => {


   
    

  return (
    <div>

     {/* <Box boxSize='sm'> */}
  <Image src='https://cdn.caratlane.com/media/static/images/V4/2023/CL/04-APR/AppBanner/Earring/01/Desktop_1920x560_toplisting.jpg' alt='Dan Abramov' width={["100%"]} />

<Box boxSize='sm' bg="pink" h={["110px"]} w={"100%"}>
 <Box w={"95%"}  margin={"auto"} >
 <Flex>
    <Box w={["30px","40px","50px","70px"]} h='10'  fontSize={["7px","9px","11px","13px"]} marginTop={"12px"} >Rings</Box>
    {/* <Spacer /> */}
    <Box w={["30px","40px","50px","70px"]} h='10'  fontSize={["7px","9px","11px","13px"]} marginTop={"12px"}> <Link>Clear All</Link></Box>
    {/* <Spacer /> */}
   
    </Flex> 

<Flex>
 <Button w={"60px"} h='40px' bg="white" _hover={{bg:"blue",color:"white"}} fontSize={["7px","9px","11px","13px"]}  marginLeft={"10px"} borderRadius={"10px"} >All</Button>

 <Button w={["200px","170px","80px","120px"]} h='40px' bg="white" _hover={{bg:"blue",color:"white"}} fontSize={["7px","9px","11px","13px"]}  marginLeft={["7px","10px","15px","20px"]} borderRadius={"10px"}> <Link>Try at Home</Link></Button>

 <Button w={["250px","150px","120px","110px"]} h='40px' bg="white" _hover={{bg:"blue",color:"white"}} fontSize={["7px","9px","11px","13px"]} marginLeft={["7px","10px","15px","20px"]} borderRadius={"10px"} >Designs in Store</Button>
 
 <Button w={["250px","200px","110px","110px"]} h='40px' bg="white"  _hover={{bg:"blue",color:"white"}} fontSize={["7px","9px","11px","13px"]}  marginLeft={["7px","10px","15px","20px"]} borderRadius={"10px"} > <Link>Fast Delivery</Link></Button>
 {/* <Spacer />
 <Spacer /> */}
     <Button w='75px' h='40px' bg="white"  _hover={{bg:"blue",color:"white"}} fontSize={["7px","9px","11px","13px"]}  marginLeft={["7px","10px","15px","20px"]} borderRadius={"10px"} > <Link>New In</Link></Button>
     <Spacer />
     <Select placeholder='Select the type' w={{  sm:"7%", md: "20%", lg: "20%" ,xl:"20%"}} fontSize={["7px","9px","11px","13px"]} bg="white" ml="10px" >
  <option value='Discount'>Discount</option>
  <option value='asc'>Price:High to Low</option>
  <option value='dsc'>Price:Low to High</option>
  <option value='Latest'>Latest</option>
  <option value='Featured'>Featured</option>
</Select>
</Flex> 

</Box> 


</Box>
<br />
<Box textAlign={"left"} w={"95%"} margin={"auto"} fontSize={["7px","9px","11px","16px"]} >
  <h2><b>Earrings</b> 2259 Designs</h2>
</Box>
<div>
  <Flex>
  <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" m="30px"  bg="white" w={{  sm:"130px", md: "250px", lg: "280px" ,xl:"300px"}} borderRadius={"20px"}>
    <Sidebar/>
  </Box>



{/* Products Detail */}
{/* <ProductsCard/> */}
  </Flex>
</div>
    </div>
  )
}

export default Ring