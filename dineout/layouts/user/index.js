//
import Footer from './Footer';
import Navbar from './navbar';


const UserLayout = ({ children }) => {
    return (
        <div className='app'>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;