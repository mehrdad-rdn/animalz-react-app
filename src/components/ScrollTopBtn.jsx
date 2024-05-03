import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import NavigationBar from "./navbar";

const ScrollTopBtn = () => {
  const [lastScrollTop, setScroltop] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const scrollHandler = () => {
    let currentScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    if (currentScrollTop < lastScrollTop) {
      setVisibility(currentScrollTop < 100 ? false : true);
    } else if (currentScrollTop > lastScrollTop) {
      setVisibility(false);
    }
    setScroltop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  const clickHandler = () => {
    window.scrollY = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [lastScrollTop]);
  return (
    visibility && (
      <>
        <div
          className="position-fixed top-0 start-0 end-0 "
          style={{ zIndex: 10 }}
        >
          <NavigationBar imgUrl={`${require("../assets/logo.png")}`} />
        </div>
        <Button
          variant="outline-warning"
          size="lg"
          className="bg-dark bg-opacity-50 rounded-pill position-fixed bottom-0 end-0 m-5 d-flex flex-column align-items-center"
          style={{ zIndex: 10, width: 90 }}
          onClick={clickHandler}
        >
          <BsArrowUp className="text-warning fs-4 m-0" />
          <span className="text-warning fw-bold "> TOP </span>
        </Button>
      </>
    )
  );
};

export default ScrollTopBtn;
