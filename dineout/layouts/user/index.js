//
import Footer from './Footer';
import Navbar from './Navbar';


const UserLayout = ({ children }) => {
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

export default UserLayout;