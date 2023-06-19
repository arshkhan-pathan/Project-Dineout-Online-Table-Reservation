import Axios from "axios";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/Modal";
import Auth from "@/layouts/user/navbar/Auth";
import { toast } from "react-hot-toast";
export default function Payment({
  restaurantId,
  start_time,
  end_time,
  date,
  guests,
  table,
}) {
  const { isOpen, onOpen, onClose } = useToggle();
  const [modalContent, setModalContent] = useState("AUTH");
  const user = useSelector(selectCurrentUser);
  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await Axios({
        url: `http://127.0.0.1:8000/api/restaurant/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          toast.success("🎉 Your Booking Is Confimed");
          onOpen();
        })
        .catch((err) => {
          console.log(err);
          toast.error("❌ Something Went Wrong");
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    // we will pass the amount and product name to the backend using form data

    const data = await Axios({
      url: `http://127.0.0.1:8000/api/restaurant/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        date: date,
        start_time: start_time,
        end_time: end_time,
        guests: guests,
        additional_details: "",
        amount: 100,
        isPaid: false,
        customer: user?.id,
        restaurant: restaurantId,
        table: table,
      },
    }).then((res) => {
      return res;
    });

    // in data we will receive an object from the backend with the information about the payment
    //that has been made by the user

    var options = {
      key_id: "rzp_test_YG1BooOl44BGJQ", // in react your environment variable must start with REACT_APP_
      key_secret: "lA9TlERaqw3vmBfpjdw3f4RG",
      amount: data.data.payment.amount,
      currency: "INR",
      name: "DineOut",
      description: "Transacrion to Confirm Booking!",
      image:
        "https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#913bad",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <Button
        variant="contained"
        fullWidth
        size="large"
        color="primary"
        onClick={user ? showRazorpay : onOpen}
        sx={{
          color: "white",
          textTransform: "capitalize",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Continue
      </Button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          {modalContent == "AUTH" ? (
            <Auth onClose={onClose} />
          ) : (
            <>Invoice Component Will Come here</>
          )}
        </Modal>
      )}
    </>
  );
}
