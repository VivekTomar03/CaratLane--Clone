import {
    Box,
    Button,
    Checkbox,
    Flex,
    Image,
    Input,
    ListItem,
    Select,
    Text,
    UnorderedList,
    useToast,
    Spacer
  } from "@chakra-ui/react";
  


  

  
  import { BiFileBlank, BiHeart, BiShareAlt } from "react-icons/bi";
  import { FiLayers,FiFolderPlus } from "react-icons/fi";
  import { Link } from "react-router-dom";

import axios from "axios"
import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Styles from "./Styles.css"
import { useSelector,useDispatch } from 'react-redux'
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
  const {token}=useSelector((store)=>store.authReducer)
  
    const fetchdataurl=(()=>{
      setLoad(true);
      getdata(param.id).then((data)=> setData(data)).catch((err)=>setErr(true)).finally(()=>setLoad(false))
    })

    const handelChangeClick=()=>{
      const {title, price, originalprice, size, image, imageurl} = data
      console.log(data);
      axios.post("https://red-worried-dove.cyclic.app/cart/add" , {title, price, originalprice, size, image, imageurl} ,{
       
        headers:{
           Authorization: `Bearer ${token}`
        },
       
      }).then((res) => {
        console.log(res);
         alert("added")
      }) 
      .catch((err) => console.log(err))
 
    }
  
    // console.log(data)
    useEffect(()=>{
  fetchdataurl();
    },[])
  
    return load?(<h1>Loading...</h1>):err?(<h1>Something went wrong</h1>):
    (
      <>
        
  
     
        <Box w={"100%"} marginBottom={"-300px"}>
      

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
            <Flex>
              <Button borderRadius={"20px"} border={"1px solid violet"} fontSize={"10px"} width={"14%"} height={"20px"}>11 reviews</Button>
              <Link ><Text fontSize={"11px"} marginLeft={"10px"}>see product Detail</Text></Link>
            </Flex>

            <Box>
              <Text fontSize={20} fontWeight="500" color={"violet"}>

                {/* Apple iPhone 14 Plus 256 GB, Blue(493177772) */}
                {data?.title}

             

              </Text>
              <Flex alignItems={"center"} gap="5px" mt={5}>
                <BiHeart/>
                <Text>|</Text>
                <FiLayers/>
                <Text>|</Text>
                <Flex alignItems={"center"} gap="5px">
                  <FiFolderPlus color="blue" />
                  <Text color="blue"></Text>
                </Flex>
              </Flex>
            </Box>
            <Box w={"100%"} border="1px solid gray" mt={3}></Box>
            <Box mt={5}>
              <Flex className={Styles.inner_flex}>
                <Box w={"50%"}>
                  <Flex>
                    <Text fontSize={"10px"}>custimazation</Text>
                    {/* <Spacer/> */}
                    <Text fontSize={"10px"} color={"blue"} marginLeft={"20px"}>Diamond Guide</Text>
                  </Flex>
                  <Select placeholder="14 KT Yellow" width={["30%","40%","60%","70%"]}>
                    <option> 14 KT Yellow GH-SI</option>
                    <option>18 KT Yellow GH-SI</option>
                    <option>15 KT Yellow GH-SI</option>
                  </Select>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Text>BESTSELLER</Text>
             <Flex>
              <Text color={"black"} fontWeight="bold" fontSize={"22px"}>₹{data.price}</Text>
              <Text  textDecoration={"line-through"} fontWeight="semibold" fontSize={"15px"} marginLeft={"8px"}>₹{data.originalprice}</Text>
             </Flex>
                 <br />
                 <Button bg={"violet"} color={"white"} borderRadius={"6px"} border={"1px solid violet"} fontSize={"16px"} width={"60%"} height={"40px"} onClick={handelChangeClick}>Add To Cart</Button>
          <Text fontSize={"10px"} color={"blue"}>Up Down me,Notify me</Text>
<br />
<br/>

          <Box border={"1px solid green"} width={"80%"} padding={"10px"} borderRadius={"5px"}>
            <Flex>
              <Text fontSize={"27px"}> ☎ </Text>
              <Box>
                <Text color={"black"} fontWeight="bold" fontSize={"13px"}>What a closure Look?</Text>
                <Text fontSize={"11px"}>Get a live video Call with our Consultants</Text>
              </Box>
            </Flex>
<Text color={"green"} fontWeight="bold" fontSize={"20px"}>Schedule a Call</Text>
          </Box>
                </Box>
                <Box w={"50%"}  pl={5}>
                <Flex>
                <Text fontSize={"11px"}>Deleviry & Store Detail</Text>
                <Text fontSize={"11px"} color={"blue"} marginLeft={"10px"}>Locate me</Text>
                  </Flex>    
               
              <Input _placeholder={"421308"} w={"50%"} value={"421308"}/>
              <br />
              <br />
              <Flex>
              <Text fontSize={"13px"}> ☎ </Text>
              <Box>
                <Text color={"black"} fontWeight="bold" fontSize={"13px"}>Free Delivery by 10th of May</Text>
                <Text fontSize={"11px"}>Order in next 17 min and 17 sec</Text>
              </Box>
            </Flex>

            <Flex>
              <Text fontSize={"13px"}> ☎ </Text>
              <Box>
                <Text color={"black"} fontWeight="bold" fontSize={"13px"}>Avilable in mira Road</Text>
                <Text fontSize={"11px"}>Also in 2 Other Stores</Text>
              </Box>
            </Flex>
<br />
<br />

          <Button bg={"lightgray"} fontSize={"16px"} width={"60%"} height={"40px"}>Find in Store</Button>
          <br />
          <br />
          <br />
          <br />
          <Box border={"1px solid green"} width={"80%"} padding={"10px"} borderRadius={"5px"}>
            <Flex>
              <Text fontSize={"27px"}> 🏠</Text>
              <Box>
                <Text color={"black"} fontWeight="bold" fontSize={"13px"}>Try it on at Home</Text>
                <Text fontSize={"11px"}>Home Appoinment Available till 27may</Text>
              </Box>
            </Flex>
<Text color={"red"} fontWeight="bold" fontSize={"20px"}>Book Home Appoinment</Text>
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

