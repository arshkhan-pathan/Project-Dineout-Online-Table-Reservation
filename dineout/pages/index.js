// layouts
import UserLayout from '@/layouts/user';
// sections
import Banner from '@/sections/user/home/Banner';


const Home = () => {
  return (
    <UserLayout>
      <Banner />
      <div>Home Page</div>
    </UserLayout>
  );
};

export default Home;
