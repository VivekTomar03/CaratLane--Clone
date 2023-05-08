import {
    VStack,
    Box,
    Image,
    Input,
    Button,
    useDisclosure,
    Menu,       
    MenuButton,
    MenuList,
    useColorModeValue,
    Flex,
    Text,
    InputGroup,
    InputLeftElement,
    MenuItem
  } from "@chakra-ui/react";
  import "./Navbar2.css";
  import {
    FaSearch,
    FaMapMarkerAlt,
    FaUser,
    FaHeart,
    FaShoppingBasket,
    FaHome,
    FaStore,
    FaShopify,
    FaGoodreadsG,
    FaBars
  } from "react-icons/fa";
import { Link } from "react-router-dom";
  
  const Navbar2 = () => {
    
    return (
      <div
        className="navbar"
        style={{ width: "100%", height: "15px", borde: "1px solid" , backgroundColor:"#f6f4ff"}}
      >
        <VStack>

  
          <div className="nav-menu">
            <ul className="nav_right">
              <li className="dropdowns">
                NEW ARRIVALS
                {/* <div className="submenu">
                  <div className="subCat"></div>
                </div> */}
              </li>
              <li className="dropdowns">
                <h1><Link to={"/rings"}>RINGS</Link></h1>
  
                <div className="submenu">
                  <div className="sub-left">
                    <div className="sub-col">
                      <Text fontWeight="bold">SHOP BY STYLE</Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/3e52030aaf3c4b59b34f7825aaefd475.jpg"
                          alt="eng"
                        />
                        <h1 className="cat-text">ENGAGEMENT</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/3eec2a8167b54bd096102e07f0cb6d3e.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">COUPLE RINGS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/bdf62790e1fa4a49bc2cfb3c8b686b49.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">CASUAL</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/3aa8d1ca304e40d2bc21b6eccac7318e.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">ADJUSTABLE RINGS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/c58e3254626a46b398608e1f0e86c725.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER STATMENT RING</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/4Block/27/CL_Menu_Block_Img01234.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER RING</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/f1cecd6ba83142afa27229492f59391d.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">PLATINUM RING</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/94329809fcdf408eb7487e69abd78d21.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">COCKTAIL</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/45bd4c30c40e41308ea829c2f415ae97.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">BANDS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/b127d70ba53c4dbe9fcb2e56553fc911.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">PROMISE RINGS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <Text mt="-35px" fontWeight="bold">
                        SHOP BY METAL & STONE
                      </Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png"
                          alt="eng"
                        />
                        <h1 className="cat-text">GEMSTONE</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">SLOTAIRS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">YELLOW GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">WHITE GOLD</h1>
                      </div>
                    </div>
  
                    <div className="sub-col">
                      <Text fontWeight="bold" mt="-140px">
                        SHOP BY
                      </Text>
                      <h1 className="cat-text">FOR MEN</h1>
                      <h1 className="cat-text">Under ₹ 10k</h1>
                      <h1 className="cat-text">₹ 10k to ₹ 20k</h1>
                      <h1 className="cat-text"> ₹ 20k to ₹ 30k</h1>
                      <h1 className="cat-text">Above ₹ 30k</h1>
                      <h1 className="cat-text">FOR WOMEN</h1>
                    </div>
                  </div>
                  <img
                    className="sub-img"
                    src="https://banner.caratlane.com/live-images/ddb6596303814dd7a618df6c0ee4cd1c.jpg"
                    alt="eng"
                  />
                </div>
              </li>
              <li className="dropdowns">
                <Link to={"earings"}>EARRINGS</Link>
                <div className="submenu">
                  <div className="sub-left">
                    <div className="sub-col">
                      <Text fontWeight="bold">SHOP BY STYLE</Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/c4b1660f99f34e688274b930a5a70d8f.jpg"
                          alt="eng"
                        />
                        <h1 className="cat-text">STUD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/05cb5d46b065499ca6e50f30724f7e90.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">JHUMKA</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">PEARL EARRING</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/4868fb10515f42c184cb4e1a58cd03e2.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">EARCUFFS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/ad95f529f18c48cea0644493c3f2bacc.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">CHANDBALI EARRING</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/383f9ed991e14061af905e60f195a9c8.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER EARRING</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/c82f3668b7524234a033ca0f1e9198bf.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">DROPS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/f437f34cb83e461db8c268d7f575307e.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">HOOPS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/059a2243502b4b8caee4f2a032e7f0d5.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SUIDHAGA</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/44e34a1c90b74b799eb01913ec74d05f.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD EARRING</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <Text mt="-35px" fontWeight="bold">
                        SHOP BY METAL & STONE
                      </Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/a18a9ec6e86b42448351c88a3fc4cd9c.png"
                          alt="eng"
                        />
                        <h1 className="cat-text">GEMSTONE</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">SLOTAIRS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">YELLOW GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">WHITE GOLD</h1>
                      </div>
                    </div>
  
                    <div className="sub-col">
                      <Text mb="10px" mt="-140px" fontWeight="extrabold">
                        SHOP BY
                      </Text>
                      <h1 className="cat-text">FOR MEN</h1>
                      <h1 className="cat-text">Under ₹ 10k</h1>
                      <h1 className="cat-text">₹ 10k to ₹ 20k</h1>
                      <h1 className="cat-text"> ₹ 20k to ₹ 30k</h1>
                      <h1 className="cat-text">Above ₹ 30k</h1>
                      <h1 className="cat-text">FOR WOMEN</h1>
                    </div>
                  </div>
                  <img
                    className="sub-img"
                    src="https://banner.caratlane.com/live-images/88d76b4bce844970b3a522f9818bbf72.jpg"
                    alt="eng"
                  />
                </div>
              </li>
              <li className="dropdowns">
                BRACELETS & BANGLES
                <div className="submenu">
                  <div className="sub-left">
                    <div className="sub-col">
                      <Text fontWeight="bold">SHOP BY STYLE</Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg"
                          alt="eng"
                        />
                        <h1 className="cat-text">CHAIN BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/f9ad94f888c14b8fb194829426a12a49.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">FLEXIBLE BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">LIGHTWERE BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/1acd93734c6c4fe7b45415563c439d5d.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d794dd63a1ec46e8b28cfa85ab70550f.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">KIDS BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">OVAL BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">MANGALSUTRA BRACLETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">22kt BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/4Block/27/CL_Menu_Block_Img01.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <Text mt="-35px" fontWeight="bold">
                        SHOP BY METAL & STONE
                      </Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/a18a9ec6e86b42448351c88a3fc4cd9c.png"
                          alt="eng"
                        />
                        <h1 className="cat-text">GEMSTONE</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">SLOTAIRS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">YELLOW GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">WHITE GOLD</h1>
                      </div>
                    </div>
  
                    <div className="sub-col">
                      <Text mb="10px" mt="-140px" fontWeight="extrabold">
                        SHOP BY
                      </Text>
                      <h1 className="cat-text">FOR MEN</h1>
                      <h1 className="cat-text">Under ₹ 10k</h1>
                      <h1 className="cat-text">₹ 10k to ₹ 20k</h1>
                      <h1 className="cat-text"> ₹ 20k to ₹ 30k</h1>
                      <h1 className="cat-text">Above ₹ 30k</h1>
                      <h1 className="cat-text">FOR WOMEN</h1>
                    </div>
                  </div>
                  <img
                    className="sub-img"
                    src="https://banner.caratlane.com/live-images/35d5813bca7e4d65bd35aa032d180f9c.jpg"
                    alt="eng"
                  />
                </div>
              </li>
              <li className="dropdowns">
                SOLITAIRES
                <div className="submenu">
                  <div className="sub-left">
                    <div className="sub-col">
                      <Text fontWeight="bold">SHOP BY STYLE</Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg"
                          alt="eng"
                        />
                        <h1 className="cat-text">CHAIN BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/f9ad94f888c14b8fb194829426a12a49.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">FLEXIBLE BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">LIGHTWERE BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/1acd93734c6c4fe7b45415563c439d5d.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d794dd63a1ec46e8b28cfa85ab70550f.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">KIDS BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">OVAL BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">MANGALSUTRA BRACLETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">22kt BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/4Block/27/CL_Menu_Block_Img01.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <Text mt="-35px" fontWeight="bold">
                        SHOP BY METAL & STONE
                      </Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/a18a9ec6e86b42448351c88a3fc4cd9c.png"
                          alt="eng"
                        />
                        <h1 className="cat-text">GEMSTONE</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">SLOTAIRS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">YELLOW GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">WHITE GOLD</h1>
                      </div>
                    </div>
  
                    <div className="sub-col">
                      <Text mb="10px" mt="-140px" fontWeight="extrabold">
                        SHOP BY
                      </Text>
                      <h1 className="cat-text">FOR MEN</h1>
                      <h1 className="cat-text">Under ₹ 10k</h1>
                      <h1 className="cat-text">₹ 10k to ₹ 20k</h1>
                      <h1 className="cat-text"> ₹ 20k to ₹ 30k</h1>
                      <h1 className="cat-text">Above ₹ 30k</h1>
                      <h1 className="cat-text">FOR WOMEN</h1>
                    </div>
                  </div>
                  <img
                    className="sub-img"
                    src="https://banner.caratlane.com/live-images/c50e95a41cec4ed487c5bee70904f775.jpg"
                    alt="eng"
                  />
                </div>
              </li>
              <li className="dropdowns">
                MANGALSUTRA
                <div className="submenu">
                  <div className="sub-left">
                    <div className="sub-col">
                      <Text fontWeight="bold">SHOP BY STYLE</Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/05e292e9cf424ec58e05a67bb805355b.jpg"
                          alt="eng"
                        />
                        <h1 className="cat-text">CHAIN BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/f9ad94f888c14b8fb194829426a12a49.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">FLEXIBLE BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/7d7c48a01cc041828a4aaaf724c93342.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">LIGHTWERE BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/1acd93734c6c4fe7b45415563c439d5d.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD BANGLES</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d794dd63a1ec46e8b28cfa85ab70550f.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">KIDS BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/ef83bc921a13405e8920ad83e0432795.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">OVAL BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/bb3907642a3f4ca79e1a42e2026598a3.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">MANGALSUTRA BRACLETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/b1037b1ad67e4199a3f45f49f60241e2.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/fb2bbc016b7746aabe4edca3e2ebee37.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">22kt BRACELETS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://cdn.caratlane.com/media/static/images/V4/2023/Shaya/03-MAR/4Block/27/CL_Menu_Block_Img01.jpg"
                          alt="casula"
                        />
                        <h1 className="cat-text">SILVER BRACELETS</h1>
                      </div>
                    </div>
                    <div className="sub-col">
                      <Text mt="-35px" fontWeight="bold">
                        SHOP BY METAL & STONE
                      </Text>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/a18a9ec6e86b42448351c88a3fc4cd9c.png"
                          alt="eng"
                        />
                        <h1 className="cat-text">GEMSTONE</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">SLOTAIRS</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">DIMOND</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/67d8830039e64bab9a993f203cb82208.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">YELLOW GOLD</h1>
                      </div>
                      <div className="sub-cat">
                        <img
                          className="cat-img"
                          src="https://banner.caratlane.com/live-images/04d2cec15dd04bcc9b33747e788f6c8e.png"
                          alt="casula"
                        />
                        <h1 className="cat-text">WHITE GOLD</h1>
                      </div>
                    </div>
  
                    <div className="sub-col">
                      <Text mb="10px" mt="-140px" fontWeight="extrabold">
                        SHOP BY
                      </Text>
                      <h1 className="cat-text">FOR MEN</h1>
                      <h1 className="cat-text">Under ₹ 10k</h1>
                      <h1 className="cat-text">₹ 10k to ₹ 20k</h1>
                      <h1 className="cat-text"> ₹ 20k to ₹ 30k</h1>
                      <h1 className="cat-text">Above ₹ 30k</h1>
                      <h1 className="cat-text">FOR WOMEN</h1>
                    </div>
                  </div>
                  <img
                    className="sub-img"
                    src="https://banner.caratlane.com/live-images/ed19e9fc6ddd4de592b67776543499c1.jpg"
                    alt="eng"
                  />
                </div>
              </li>
  
              <li className="dropdowns">
                OTHER JEWELLERY
                {/* <div className="submenu">
                  <div className="subCat"></div>
                </div> */}
              </li>
              <li className="dropdowns">
                GIFTING
                {/* <div className="submenu">
                  <div className="subCat"></div>
                </div> */}
              </li>
              <li className="dropdowns">
                BEST SELLERS
                {/* <div className="submenu">
                  <div className="subCat"></div>
                </div> */}
              </li>
            </ul>
          </div>
        </VStack>
      </div>
    );
  };
  
  export default Navbar2;
  