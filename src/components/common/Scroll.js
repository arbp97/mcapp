import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

// scroll handler used to reset window scrolling on route change
const Scroll = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{props.children}</>;
};

export default Scroll;
