import React from 'react'
import { Image,Box,Button,Text,Heading,Stack,Card,CardBody,ButtonGroup,Divider,CardFooter, Input } from '@chakra-ui/react'
import { Flex, Spacer,Select } from '@chakra-ui/react'
import  { useState } from 'react'

import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Checkbox,  FormLabel, CheckboxGroup } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'


const sty= {height:"16px",width:"15px",marginLeft:"-30px"}
const sty11= {height:"16px",width:"15px",marginLeft:"-69px"}
const sty1={fontSize:"16px",textAlign:"left",paddingLeft:"15px",paddingTop:"20px",color:"#4E5163"}

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
const initialparam=searchParams.getAll("title")
const initialcategory=searchParams.getAll("category")
const initialsize=searchParams.getAll("size")
const initialOrder=searchParams.get("order")
const [title,setTitle]=useState(initialparam||[])
const [category,setCategory]=useState(initialcategory||[])
const [name,setName]=useState(initialsize||[])
const [order,setOrder]=useState(initialOrder||"")


const handelChange1=(e)=>{
let newarr=[...title]
const value=e.target.value
if(newarr.includes(value)){
    newarr=newarr.filter((el)=>el!==value)
}else{
    newarr.push(value)
}
setTitle(newarr)

}


const handelChange2=(e)=>{
let newarr=[...name]
const value=e.target.value
if(newarr.includes(value)){
    newarr=newarr.filter((el)=>el!==value)
}else{
    newarr.push(value)
}
setName(newarr)

}




const handelCh=(e)=>{
setOrder(e.target.value)
}

const handelCh1=(e)=>{
setCategory(e.target.value)
}


useEffect(()=>{
let obj={
    title,category,name
}
order && (obj.order=order)
setSearchParams(obj)
}, [title,order,category,name])

    
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
  <Text fontSize={["10px","12px","15px","17px"]} fontFamily="inherit" textAlign="center" paddingTop="10px" paddingBottom="10px">Filter By</Text></Box>

<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick1}> <Link to="#"><b>Price</b> {status1?"⬆":"⬇"}</Link></Text>
<br />
{status1?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Under ₹5,000 (64)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >.₹ 5,001  - ₹10,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹10,001  - ₹15,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹15,001  - ₹20,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹20,001  - ₹30,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹30,001  - ₹40,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹40,001  - ₹50,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"80%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹50,001  - ₹75,000</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"90%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >₹75,001  - ₹99,000 </Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"100%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Above ₹99,000 (64)</Text></Checkbox><br />




{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}


</Box>
<hr />


{/* Category */}

<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick2}> <Link to="#"><b>Product Type</b> {status3?"⬆":"⬇"}</Link></Text>
<br />
{status2?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Earrings(22)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Rings(1934)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Necklace(3)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Pendants(7)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Bracelets(9)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Bangles(13)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Chains(320)</Text></Checkbox><br />

<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"90%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Tanmaniya(1)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"100%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >Nose pin(12)</Text></Checkbox><br />




{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}


</Box>
<hr />

{/* Metal */}


<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick3}> <Link to="#"><b>Metal</b> {status3?"⬆":"⬇"}</Link></Text>
<br />
{status3?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Ring size */}

<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick4}> <Link to="#"><b>Ring size</b> {status4?"⬆":"⬇"}</Link></Text>
<br />
{status4?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Bangle size */}



<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick5}> <Link to="#"><b>Bangle size</b> {status5?"⬆":"⬇"}</Link></Text>
<br />
{status5?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}


</Box>


{/* Ring size */}

<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick6}> <Link to="#"><b>Ring size</b> {status6?"⬆":"⬇"}</Link></Text>
<br />
{status6?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}




</Box>

{/* 
Gemstone */}


<hr />




<Box style={{alignItems:"center"}}>
 <Text fontSize={["12px","13px","15px","16px"]} textAlign="left" paddingLeft={["5px","7px","9px","15px"]} paddingTop="20px" color="#4E5163" onClick={handelClick7}> <Link to="#"><b>Gemstone</b> {status7?"⬆":"⬇"}</Link></Text>

{status7?
<CheckboxGroup>
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"10%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Yellow(725)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"20%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT White(591)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"30%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Rose(201)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"40%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Two Tone(78)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"50%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >18 KT Three Tone(10)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"60%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Yellow(1400)</Text></Checkbox><br />
<Checkbox  size='md' marginLeft={["5px","2px","1px","0px"]} value={"70%"} onChange={handelChange2} checked={name.includes("10%")} ><Text fontSize={["9px","12px","14px","15px"]} >14 KT Two Tone(69)</Text></Checkbox><br />






{/* height={["7px","13px","15px","16px"]} width={["5px","12px","14px","15px"]} */}
</CheckboxGroup>:""}




</Box>

    </Box>
  )
}

export default Sidebar
