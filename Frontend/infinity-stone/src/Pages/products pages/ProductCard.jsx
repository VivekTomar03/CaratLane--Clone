import {
  

    Box,
    Image,
    Button,
    useColorModeValue,
    Stack,
    Text,
    Link,
    Spacer
  
  
  } from '@chakra-ui/react';
  import { NavLink } from 'react-router-dom';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  // import { FiShoppingCart } from 'react-icons/fi';
  import {useState,useEffect} from "react"
  
  function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center" >
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductsCard({data}) {
    // const [dat1,setData1]=useState([])
    let arr1=JSON.parse(localStorage.getItem("items1"))||[]
    console.log(arr1)
     
  
    const handelChangeClick=()=>{
      
  arr1.push(data)
  
  
   localStorage.setItem('items1', JSON.stringify(arr1));
    }
  

    return (
  
        <Box
        p={"50px"}
        bg={useColorModeValue('white', 'gray.800')}
    //  padding={"5px"}
          w={["90%","90%","95%","100%"]}

          fontSize={"20px"}
          textAlign={"center"}
          borderRadius={"5px"}

          shadow="lg"
          position="relative">
        
  <NavLink to={`/singleproduct/${data._id}`} >
          <Image
            src={data.imageurl}
            alt={`Picture of ${data.title}`}
            borderRadius={"10px"}
       border={"solid 1px violet"}
          /></NavLink>

  
  
  <Stack direction={'row'} align={'center'} w={"100%"}>
            <Text fontWeight={700} fontSize={["10px","13px","15px","18px"]} color={"purple.500"} marginLeft={"5px"}>
            ₹{data.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'} fontSize={["7px","9px","12px","14px"]} >
            ₹{data.originalprice}
            </Text>
            <Spacer/>
            <Link fontSize={["6px","9px","12px","14px"]} color={"blue"} marginLeft={"-70px"} >
            view similar
            </Link>
          </Stack>
  
  <Text  fontWeight={700} fontSize={["10px","13px","15px","12px"]} color={"purple.500"}  >Check delivery date ↬</Text>
  
<Text fontSize={["6px","9px","10px","10px"]} color={"gray.500"} >{data.title}</Text>
  
  
<Stack direction={'row'} align={'center'} w={"100%"}>
  <Button paddingLeft={30} paddingRight={30} fontSize={["6px","8px","10px","12px"]} border={"solid 1px purple"} color={"purple"}>
   Try at Home
  </Button>

  <Button paddingLeft={25} paddingRight={25} fontSize={["6px","8px","10px","12px"]} border={"solid 1px lightgreen"} color={"lightgreen"}>
   Video Call
  </Button>
</Stack>
    
   
 
        </Box>
    
    
    );
  }
  
  export default ProductsCard;