import React, { useEffect } from "react";
import NavBar from "~/components/shared/Navbar";
import Footer from "~/components/shared/Footer";
import Head from "next/head";
// import Script from "next/script";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {

  let scriptRefArr = []

  const { route } = useRouter()
  console.log(route)
  useEffect(() => {
    if (route) {
      const scripts = ['/assets/libs/tiny-slider/min/tiny-slider.js', '/assets/libs/tobii/js/tobii.min.js', '/assets/libs/feather-icons/feather.min.js', '/assets/js/plugins.init.js', '/assets/js/app.js'];

      for (let item of scripts) {
        loadScript(item);
      }
    }

    return () => {
      if (scriptRefArr.length > 0) {
        removeScript()
      }

    }

  }, [route]);

  const loadScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    if (!scriptRefArr.find(item => item.url === src)) {
      document.body.appendChild(script);
      scriptRefArr.push({ url: src, script })
    }
  }

  const removeScript = () => {
    scriptRefArr.forEach(item => {
      if (document.body.contains(item.script)) {
        document.body.removeChild(item.script);
      }
    })

  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Tailwind CSS Saas & Software Landing Page Template" />
        <meta name="keywords" content="agency, application, business, clean, creative, cryptocurrency, it solutions, modern, multipurpose, nft marketplace, portfolio, saas, software, tailwind css" />
        <meta name="author" content="Shreethemes" />
        <meta name="website" content="https://shreethemes.in" />
        <meta name="email" content="support@shreethemes.in" />
        <meta name="version" content="1.5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Techwind - Tailwind CSS Multipurpose Landing Page Template</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />

      <div className="cookie-popup fixed max-w-lg bottom-3 right-3 left-3 sm:left-0 sm:right-0 mx-auto bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md py-5 px-6 z-50">
        <p className="text-slate-400">
          This website uses cookies to provide you with a great user
          experience. By using it, you accept our{" "}
          <a
            href="https://shreethemes.in"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 dark:text-emerald-500 font-semibold"
          >
            use of cookies
          </a>
        </p>
        <div className="cookie-popup-actions text-right">
          <button className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 right-2">
            <i className="uil uil-times text-dark dark:text-slate-200 text-2xl"></i>
          </button>
        </div>
      </div>
      <a
        href="#"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 right-5 h-9 w-9 text-center bg-indigo-600 text-white leading-9"
      >
        <i className="uil uil-arrow-up"></i>
      </a>
      <div className="fixed top-1/4 -right-2 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
      {/* <Script async defer src="/assets/libs/tiny-slider/min/tiny-slider.js" /> */}
      {/* <Script async defer src="/assets/libs/tobii/js/tobii.min.js" /> */}
      {/* <Script async src="/assets/libs/feather-icons/feather.min.js" /> */}
      {/* <Script async defer src="/assets/js/plugins.init.js" /> */}
      {/* <Script async defer src="/assets/js/app.js" /> */}
    </>
  );
};

export default MainLayout;
