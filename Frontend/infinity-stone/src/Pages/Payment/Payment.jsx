import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Spinner,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./payment.module.css";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { getCartProducts } from "../../Redux/CartReducer/Action";

const initialState = {
  firstname: "",
  lastname: "",
  address1: "",
  zipcode: "",
  phone: "",
  city: "",
};

const Payment = () => {
  const [quantity1, setquantity] = useState(1);
  const [isButLoading, setIsButLoading] = useState(false);
  const [data, setdata] = useState(initialState);
  let dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const { carts, isLoading, isError } = useSelector((store) => {
    return {
      carts: store.cartReducer.carts,
      isLoading: store.cartReducer.isLoading,
      isError: store.cartReducer.isError,
    };
  }, shallowEqual);
  const {token} = useSelector((state) => state.authReducer)

  useEffect(() => {
    dispatch(getCartProducts(token));
  }, []);

  let totalprice = 0;
  for (var i = 0; i < carts.length; i++) {
    
      totalprice = totalprice + ( carts[i].quantity *carts[i].price);
   
     
    }
    // console.log(carts[i].price, quantity1[i]);
  

  let totalOriginPrice = 0;
  for (var i = 0; i < carts.length; i++) {
    totalOriginPrice = totalOriginPrice + ( carts[i].quantity *carts[i].originalprice);
     
  }

  let totalSavePrice = totalOriginPrice - totalprice;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => {
      return { ...prev, [name]: name === "phone" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    setIsButLoading(true);
    e.preventDefault();
    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.address1 === "" ||
      data.zipcode === "" ||
      data.phone === "" ||
      data.city === ""
    ) {
      // setTimeout(() => {
      setIsButLoading(false);
      toast({
        title: "Shipping Details Missing",
        description: "Please fill all the details",
        status: "warning",
        variant: "left-accent",
        duration: 2500,
        isClosable: true,
        position: "top",
      });
      // }, 2000);
    } else if (
      data.firstname !== "" &&
      data.lastname !== "" &&
      data.address1 !== "" &&
      data.zipcode !== "" &&
      data.phone !== "" &&
      data.city !== ""
    ) {
      setTimeout(() => {
        setIsButLoading(false);

        setdata(initialState);
        navigate("/payment");
      }, 2000);
    }

    //  Swal.fire("", "Product added!", "success");
  };

  return (
    <div >
      <Heading marginTop={155} as="h2" size="lg" textAlign={"center"}>
        Shipping Address
      </Heading>
      

      <div id={styles.main}>
        <div id={styles.one}>
          <div id={styles.main_container} align="flex-start">
            <div id={styles.vstack}>
              <div id={styles.firstname}>
                <FormControl>
                  <FormLabel>First Name*</FormLabel>
                  <input
                    id={styles.input}
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name*</FormLabel>
                  <input
                    id={styles.input}
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </FormControl>
              </div>
              <div id={styles.address1}>
                <FormControl>
                  <FormLabel>Address 1*</FormLabel>
                  <input
                    id={styles.input}
                    name="address1"
                    value={data.address1}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Address 1*"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <input
                    id={styles.input}
                    size="lg"
                    placeholder="Address (Optional)*"
                  />
                </FormControl>
              </div>
              <VStack>
                <div id={styles.country}>
                  {/* <FormControl>
                                        <FormLabel>Country</FormLabel>
                                        <Select
                                            id={styles.input}
                                            placeholder="India"
                                            size="lg"></Select>
                                    </FormControl> */}
                  <FormControl>
                    <FormLabel>Zip Code*</FormLabel>
                    <input
                      id={styles.input}
                      name="zipcode"
                      value={data.zipcode}
                      onChange={handleChange}
                      type="city"
                      size="lg"
                      placeholder="Zip Code"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>City*</FormLabel>
                    <input
                      id={styles.input}
                      name="city"
                      value={data.city}
                      onChange={handleChange}
                      size="lg"
                      placeholder="City"
                    />
                  </FormControl>
                </div>
                <div id={styles.city}>
                  
                </div>
              </VStack>
            </div>

            <div id={styles.last_div}>
              <div>
                <FormControl>
                  <FormLabel>Phone*</FormLabel>
                  <input
                    id={styles.input}
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    size="lg"
                    placeholder="Phone"
                  />
                </FormControl>
              </div>
            </div>
          </div>

          <div id={styles.review_order}>
            <button  onClick={handleSubmit} className={styles.bookbtn}>
              {!isButLoading && `  Continue to Payment Method `}
              {isButLoading && (
                <Spinner
                  thickness="4px"
                  speed="0.55s"
                  color="#17274a"
                  size="md"
                />
              )}
            </button>
          </div>
        </div>

        <div id={styles.two}>
          <div id={styles.third}>
            <div className={styles.Order_summmary_div}>
              <p>ORDER SUMMARY</p>
              <p>Subtotal : ₹ {totalOriginPrice}</p>
              <p>Card Discount : ₹ {totalSavePrice}</p>
              <p>Shipping Charges : FREE</p>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Total Price : ₹ {totalprice}
              </p>
            </div>
          </div>
          <div className={styles.fourth}>
            <Heading textAlign={"Center"} as={"h4"} size={"sm"}>
              Help?
            </Heading>
            <p
              style={{
                fontWeight: "normal",
                textDecoration: "underline",
              }}
            >
              {" "}
              1-877-289-2376
            </p>
            <Heading
              textAlign={"Center"}
              as={"h6"}
              size={"sm"}
              padding={"20px"}
            >
              Phone hours 8AM EST - 12:00AM EST Chat 9AM EST - 12:00AM EST
            </Heading>
            <Heading
              textAlign={"Center"}
              as={"h6"}
              size={"sm"}
              paddiing={"20px"}
            >
              <Heading textAlign={"Center"} as={"h6"} size={"xs"}>
                Paying with PayPal? In-Store Returns will be refunded as
                Merchandise Credit.
              </Heading>
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
