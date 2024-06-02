import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Rooter from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Rooter />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
