//
import Footer from '../user/Footer';
import Navbar from '../user/navbar';


const AdminLayout = ({ children }) => {
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

export default AdminLayout;