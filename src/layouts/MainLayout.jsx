import ThemeProvider from "react-bootstrap/ThemeProvider";
import MainComponent from "../components/MainComponent";

function MainLayout({ children }) {
  return localStorage.getItem("i18nextLng") === "fa" ? (
    <ThemeProvider dir="rtl">
      <MainComponent megaMenuItems={megaMenuItems.rtl} direction="rtl">
        {children}
      </MainComponent>
    </ThemeProvider>
  ) : (
    <ThemeProvider dir="ltr">
      <MainComponent megaMenuItems={megaMenuItems.ltr} direction="rtl">
        {children}
      </MainComponent>
    </ThemeProvider>
  );
}
export default MainLayout;

const megaMenuItems = {
  rtl: {
    حیوانات: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    سگ: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    گربه: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
    پرنده: ["لیست الفبایی", "مقایسه", "جستجو", "اطلاعات تصادفی"],
  },
  ltr: {
    animals: ["a-z list", "categories", "search", "random Facts"],
    dogs: ["a-z list", "Suitable Dog", "search", "random Facts"],
    cats: ["a-z list", "Suitable Cat", "search", "random Facts"],
    birds: ["a-z list", "Suitable Bird", "search", "random Facts"],
  },
};
