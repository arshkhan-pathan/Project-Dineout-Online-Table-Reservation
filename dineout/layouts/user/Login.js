// css
import classes from '@/styles/Navbar.module.css';
// hooks
import useToggle from '@/hooks/useToggle';
// components
import Modal from '@/components/Modal';
import Auth from '@/layouts/user/Forms/Auth';


const Login = () => {
    const { isOpen, onOpen, onClose } = useToggle();

    return (
        <div id="loginD" className={classes.loginD}>
            <button id="login" className={classes.login} onClick={onOpen}>
                Login
            </button>

            {isOpen && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <Auth />
                </Modal>
            )}
        </div>
    );
};

export default Login;
