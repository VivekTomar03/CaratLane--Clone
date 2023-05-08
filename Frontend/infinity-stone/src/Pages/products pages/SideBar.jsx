
import React from 'react'
import { Image,Box,Button,Text,Heading,Stack,Card,CardBody,ButtonGroup,Divider,CardFooter, Input } from '@chakra-ui/react'
import { Flex, Spacer,Select } from '@chakra-ui/react'
import  { useState } from 'react'

import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Checkbox,  FormLabel, CheckboxGroup } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

const Sidebar = () => {


  const [status1,setStatus1]=useState(false)
  const [status2,setStatus2]=useState(false)   
const [status3,setStatus3]=useState(false)
const [status4,setStatus4]=useState(false)
const [status5,setStatus5]=useState(false)
const [status6,setStatus6]=useState(false)
const [status7,setStatus7]=useState(false)
const [status8,setStatus8]=useState(false)
const [status9,setStatus9]=useState(false)

const [searchParams, setSearchParams] = useSearchParams();

const initialprice=searchParams.getAll("price")
const initialsize=searchParams.getAll("size")
const [price,setPrice]=useState(initialprice||[])
const [name,setName]=useState("")

const [size,setSize]=useState(initialsize||[])




const handelChange2=(e)=>{
  let newarr=[...price]
  const value=e.target.value
  if(newarr.includes(value)){
    newarr=newarr.filter((el)=>el!==value)
}else{
  newarr.push(value)
}
setPrice(newarr)
}


const handelChange3=(e)=>{
  let newarr=[...size]
  const value=e.target.value
  if(newarr.includes(value)){
    newarr=newarr.filter((el)=>el!==value)
}else{
  newarr.push(value)
}
setSize(newarr)
}




useEffect(()=>{
  let obj={
      price,size
  }
 
  setSearchParams(obj)
}, [price,size])


    
  const handelClick1=()=>{
setStatus1(!status1)
}

const handelClick2=()=>{
  setStatus2(!status2)
      }


const handelClick3=()=>{
setStatus3(!status3)
              }

const handelClick4=()=>{
setStatus4(!status4)
             }

const handelClick5=()=>{
setStatus5(!status5)
   }

const handelClick6=()=>{
setStatus6(!status6)
}

const handelClick7=()=>{
setStatus7(!status7)
}

const handelClick8=()=>{
setStatus8(!status8)
}

const handelClick9=()=>{
setStatus9(!status9)
}

  
  return (
    <Box >
 <Box style={{backgroundColor:"#DDD8D8",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>
  <Text fontSize={["10px","12px","11px","14px"]} fontFamily="inherit" textAlign="center" paddingTop="10px" paddingBottom="10px">Filter By</Text></Box>

<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick1}> <Link to="#"><b>Price</b> {status1?"↑":"↓"}</Link></Text>
<br />
{status1?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"5000"} onChange={handelChange2} checked={price.includes("5000")} ><Text fontSize={["9px","12px","14px","11px"]} >Under ₹5,000 (64)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10000"} onChange={handelChange2} checked={price.includes("10000")} ><Text fontSize={["9px","12px","14px","11px"]} >.₹ 5,001  - ₹10,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"15000"} onChange={handelChange2} checked={price.includes("15000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹10,001  - ₹15,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"20000"} onChange={handelChange2} checked={price.includes("20000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹15,001  - ₹20,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"30000"} onChange={handelChange2} checked={price.includes("30000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹20,001  - ₹30,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"40000"} onChange={handelChange2} checked={price.includes("40000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹30,001  - ₹40,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"50000"} onChange={handelChange2} checked={price.includes("50000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹40,001  - ₹50,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"75000"} onChange={handelChange2} checked={price.includes("75000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹50,001  - ₹75,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"99000"} onChange={handelChange2} checked={price.includes("99000")} ><Text fontSize={["9px","12px","14px","11px"]} >₹75,001  - ₹99,000 </Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"99001"} onChange={handelChange2} checked={price.includes("99001")} ><Text fontSize={["9px","12px","14px","11px"]} >Above ₹99,000 (64)</Text></Checkbox><br />




{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}


</Box>
<hr />





{/* Category */}

<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick2}> <Link to="#"><b>Product Type</b> {status2?"↑":"↓"}</Link></Text>
<br />
{status2?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Earrings(22)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Rings(1934)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Necklace(3)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Pendants(7)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Bracelets(9)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Bangles(13)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Chains(320)</Text></Checkbox><br />

<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"90%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Tanmaniya(1)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"100%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >Nose pin(12)</Text></Checkbox><br />




{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}


</Box>
<hr />

{/* Metal */}


<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick3}> <Link to="#"><b>Metal</b> {status3?"↑":"↓"}</Link></Text>
<br />
{status3?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Ring size */}

<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick4}> <Link to="#"><b>Ring size</b> {status4?"↑":"↓"}</Link></Text>
<br />
{status4?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"5"} onChange={handelChange3} checked={name.includes("5")} ><Text fontSize={["9px","12px","14px","11px"]} >5</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"6"} onChange={handelChange3} checked={name.includes("6")} ><Text fontSize={["9px","12px","14px","11px"]} >6</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"7"} onChange={handelChange3} checked={name.includes("7")} ><Text fontSize={["9px","12px","14px","11px"]} >7</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"8"} onChange={handelChange3} checked={name.includes("8")} ><Text fontSize={["9px","12px","14px","11px"]} >8</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"9"} onChange={handelChange3} checked={name.includes("9")} ><Text fontSize={["9px","12px","14px","11px"]} >9</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10"} onChange={handelChange3} checked={name.includes("10")} ><Text fontSize={["9px","12px","14px","11px"]} >10</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"11"} onChange={handelChange3} checked={name.includes("11")} ><Text fontSize={["9px","12px","14px","11px"]} >11</Text></Checkbox><br />






{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Bangle size */}



<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick5}> <Link to="#"><b>Bangle size</b> {status5?"↑":"↓"}</Link></Text>
<br />
{status5?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Ring size */}

<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","11px","16px"]} textAlign="left" paddingLeft={["5px","4px","9px","11px"]} paddingTop="20px" color="#4E5163" onClick={handelClick6}> <Link to="#"><b>Germ Stone</b> {status6?"↑":"↓"}</Link></Text>
<br />
{status6?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["4px","11px","14px","20px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","11px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["4px","13px","11px","16px"]} width={["5px","12px","14px","11px"]} */}
</CheckboxGroup>:""}




</Box>


    </Box>
  )
}

export default Sidebar
