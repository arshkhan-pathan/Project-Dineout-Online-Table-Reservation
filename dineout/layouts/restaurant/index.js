//
import Footer from '../user/Footer';
import Navbar from './Navbar';


const RestaurantLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default RestaurantLayout;