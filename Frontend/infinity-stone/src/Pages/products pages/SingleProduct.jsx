import {
    Box,
    Button,
    Checkbox,
    Flex,
    Image,
    Input,
    ListItem,
    Text,
    UnorderedList,
    useToast,
  } from "@chakra-ui/react";
  


  

  
  import { BiFileBlank, BiHeart, BiShareAlt } from "react-icons/bi";
  
  import { Link } from "react-router-dom";


import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Styles from "./Styles.css"
import Imageslider from "./Imageslider";

const getdata=((id)=>{
  return fetch(`https://red-worried-dove.cyclic.app/rings/${id}`).then((res)=>res.json());
});


const slides=[
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03769-YGP900_11_listfront.jpg",title:"img1"},
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07752-1YP600_11_listfront.jpg",title:"img2"},

  ]
  
  const slides1=[
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07525-1YP600_11_listfront.jpg",title:"img1"},
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR04252-YGP900_11_listfront.jpg",title:"img2"},

  ]
  const slides2=[  
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03647-YGP600_11_listfront.jpg",title:"img1"},
    {url:"https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07752-1YP600_11_listfront.jpg",title:"img2"},

  ]


const SingleProduct = () => {

    const [data,setData]=useState([]);
    const [load,setLoad]=useState(false);
    const [err,setErr]=useState(false);
  let param=useParams();
  
    const fetchdataurl=(()=>{
      setLoad(true);
      getdata(param.id).then((data)=> setData(data)).catch((err)=>setErr(true)).finally(()=>setLoad(false))
    })
  
    console.log(data)
    useEffect(()=>{
  fetchdataurl();
    },[])
  
    return load?(<h1>Loading...</h1>):err?(<h1>Something went wrong</h1>):
    (
      <>
        
  
     
        <Box w={"100%"}>
      

      {/* <Box w={"100%"}> */}

        <Flex py={2} pl={2} pr={2} gap="2px" className={Styles.main_flex}>
          <Box w="50%">
            <Box mt={2}>
              <Text color={"red"} ml="95%" mb={"-25px"}>
                {/* <BiHeart size={25} /> */}
              </Text>
              <Image

                src={data?.imageurl}

               

                w={["40%","50%","60%","70%"]}
                m="auto"
              />
            </Box>
            <Box mt={10}>


            </Box>
            <div className='ssld1'><Imageslider slides={slides} slides2={slides2} slides1={slides1}/></div>

          </Box>
          <Box w="60%" pl={5} pt="10px">
            <Box>
              <Text fontSize={20} fontWeight="500">

                {/* Apple iPhone 14 Plus 256 GB, Blue(493177772) */}
                {data?.title}

             

              </Text>
              <Flex alignItems={"center"} gap="5px" mt={5}>
                <Checkbox isInvalid>Add to Compare</Checkbox>
                <Text>|</Text>
                <BiShareAlt color="blue" />
                <Text>|</Text>
                <Flex alignItems={"center"} gap="5px">
                  <BiFileBlank color="blue" />
                  <Text color="blue">Print</Text>
                </Flex>
              </Flex>
            </Box>
            <Box w={"100%"} border="1px solid gray" mt={3}></Box>
            <Box mt={5}>
              <Flex className={Styles.inner_flex}>
                <Box w={"50%"}>
                  <Text fontSize={16} fontWeight="500">
                    Gain more with offers (1)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      HDFC BANK Offer: Get Rs.4000 Instant Discount on CC/DC
                      EMI&
                      <br />
                      CC Fulswipe. 6 Months No Cost EMI..
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Save more with EMI/Cashback (5)
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Credit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Debit Card No-Cost EMI Options.
                    </ListItem>
                    <ListItem fontSize={14}>
                      Credit Card Low-Cost EMI Options.
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Warranty
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Warranty: 1 Year manufacturer warranty
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Key Features
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      16.95 cm (6.7 Inch) Super Retina XDR OLED display
                    </ListItem>
                    <ListItem fontSize={14}>
                      12 MP Main + 12 MP Ultra Wide Lens Rear Camera
                    </ListItem>
                    <ListItem fontSize={14}>
                      12 MP Selfie Camera, Fingerprint-resistant oleophobic
                      coating
                    </ListItem>
                  </UnorderedList>
                  <Text mt={5} fontSize={16} fontWeight="500">
                    Return Policy
                  </Text>
                  <UnorderedList mt={2}>
                    <ListItem fontSize={14}>
                      Items are eligible for return within 7 Days of Delivery.
                    </ListItem>
                    <ListItem fontSize={14}>
                      All accessories, product & packaging need to be
                      <br />
                      returned in original condition.
                    </ListItem>
                  </UnorderedList>
                  <Flex alignItems={"center"} mt={5} gap={1}>
                    <Text fontSize={16} fontWeight="500">
                      Got Feedback to share on this page?
                    </Text>
                    <Link to="">
                      <Text fontSize={16} fontWeight="500" color={"blue"}>
                        report here.
                      </Text>
                    </Link>
                  </Flex>
                </Box>
                <Box w={"50%"} borderLeft="1px solid gray" pl={5}>
                  <Flex alignItems={"center"} gap={3}>
                    <Text>Deal Price: </Text>
                    <Text color={"blue"} fontWeight="bold" fontSize={25}>

                      ₹ {data.price}
                    

                    

                    </Text>
                  </Flex>
                  <Box mt={5}>
                    <Flex alignItems={"center"} mt="5px">
                      <Text>Offer Price: ₹</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >

                        {3500}

                  

                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} gap={2} mt="5px">
                      <Text>MRP :</Text>
                      <Text
                        textDecoration={"line-through"}
                        fontWeight="semibold"
                        fontSize={17}
                      >

                        {3500}

                    

                      </Text>
                      <Text>(Inclusive of all taxes)</Text>
                    </Flex>
                    <Text
                      fontSize={18}
                      color="green"
                      fontWeight="bold"
                      mt="5px"
                    >

                      You Save: {data.name}(₹5,000)

                    

                    </Text>
                    <Text fontWeight={"500"} fontSize={16} mt="5px">
                      EMIs (Credit Cards) from ₹4556.42/month{" "}
                    </Text>
                    <Text fontWeight={"500"} fontSize={22} mt="5px">
                      FREE Shipping!
                    </Text>
                  </Box>
                  <Box mt={5} mr={5}>
                    <Input
                      placeholder="Enter / Detect PIN Code"
                      border={"1px solid black"}
                    />
                    <Flex gap={"2%"} mt={5} className={Styles.Button_flex}>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        // onClick={handleCart}
                        color="white"
                        bg={"#e42529"}
                        // onClick={handelChangeClick}
                      >
                        ADD TO CART
                      </Button>
                      <Button
                        border={"2px solid red"}
                        fontWeight="bold"
                        fontSize={18}
                        // onClick={handleBuy}
                        color=""
                        bg={"#fc6027"}
                      >
                        BUY NOW
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
  
    
  
    
      </>
    )
  
}

export default SingleProduct

