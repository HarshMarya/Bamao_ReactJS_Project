import React from "react";
import Listing from "../components/Listing";
import Footer from "../components/Footer";
import HeaderSignIn from "../components/HeaderSignIn";
import Testimonial from "../components/Testimonial";
import AddListing from "../components/AddListing";
import MainSection from "../components/MainSection";

function UserSignIn() {
  return (
    <>
      {/* </header> */}
      <HeaderSignIn />
      {/* Main Section */}
      <MainSection />
      {/* List Items */}
      <Listing />
      {/* Add Your Listing */}
      <AddListing />
      {/* testimonial */}
      <Testimonial />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default UserSignIn;
