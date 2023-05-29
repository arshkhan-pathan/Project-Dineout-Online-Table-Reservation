//
import Footer from "./Footer";
import Head from "next/head";
import Navbar from "./navbar";

const UserLayout = ({ title, keywords, description, children }) => {
  return (
    <div className="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;

UserLayout.defaultProps = {
  title: "Dineout | Find the Best Restaurnats To Dine",
  description: "Find the latest restaurants",
  keywords: "Dineout, Restaunrants",
};
