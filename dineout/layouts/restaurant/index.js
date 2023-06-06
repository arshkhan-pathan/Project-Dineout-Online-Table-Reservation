//
import Footer from "@/components/Footer";
import Navbar from "./Navbar";

const RestaurantLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default RestaurantLayout;
