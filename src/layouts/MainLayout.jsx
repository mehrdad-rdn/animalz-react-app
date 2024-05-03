import { lazy, Suspense } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
// import "../index.css";

const MainLtr = lazy(() => import("./MainLtr"));
const MainRtl = lazy(() => import("./MainRtl"));

function MainLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      {localStorage.getItem("i18nextLng") === "fa" ? (
        <ThemeProvider dir="rtl">
          <MainRtl>{children}</MainRtl>
        </ThemeProvider>
      ) : (
        <ThemeProvider dir="ltr">
          <MainLtr>{children}</MainLtr>
        </ThemeProvider>
      )}
    </Suspense>
  );
}
export default MainLayout;

function Loading() {
  <div className="bg-dark text-secondary">
    <div className="container-lg">
      <h1>Loading...</h1>
    </div>
  </div>;
}
