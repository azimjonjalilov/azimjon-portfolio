import { lazy, Suspense, useEffect } from "react";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/contact/Contact"));

const LoadingFallback = () => (
  <div
    style={{
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--title-color)",
      fontWeight: 600,
    }}
  >
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/portfolio",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Portfolio />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
