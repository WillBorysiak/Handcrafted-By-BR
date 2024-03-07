import React from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutPropTypes {
  children: React.ReactNode;
}

const Layout = (props: LayoutPropTypes) => {
  return (
    <div className="bg-primary">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
