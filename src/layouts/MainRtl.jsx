// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.rtl.min.css";
import MainComponent from "./MainComponent";
import { useEffect } from "react";

const MainRtl = ({ children }) => {
  const megaMenuItems = {
    حیوانات: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    سگ: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    گربه: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    پرنده: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
  };
  console.log("main RTL loaded");
  useEffect(() => {
    const rtlCssLink = document.createElement("link");
    rtlCssLink.rel = "stylesheet";
    rtlCssLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css";

    // document.head.appendChild(rtlCssLink);

    return () => {
      // document.head.removeChild(rtlCssLink);
    };
  }, []);
  return (
    <MainComponent megaMenuItems={megaMenuItems} direction="rtl">
      {children}
    </MainComponent>
  );
};

export default MainRtl;
