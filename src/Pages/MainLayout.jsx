import ReactDOM from "react-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";

const overlays = document.getElementById("overlays");

function MainLayout() {
  const [mobNavVisible, setMobNavVisible] = useState(false);

  const showMobileNav = () => {
    setMobNavVisible(true);
  };

  const hideMobileNav = () => {
    setMobNavVisible(false);
  };

  return (
    <>
      {mobNavVisible &&
        ReactDOM.createPortal(
          <MobileNav onMenuClose={hideMobileNav} />,
          overlays
        )}
      <Header onMenuClick={showMobileNav} />
      <Outlet />
    </>
  );
}

export default MainLayout;
