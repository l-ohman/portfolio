import React from "react";
import { useDispatch } from "react-redux";
import { getAllData } from "./store/reducer";
import { Header, Footer } from "./components";
import Router from "./Routes";

export default function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetch = async () => {
      const fetchSuccessful = await dispatch(getAllData());
      if (fetchSuccessful){
        console.log("success");
      } 
    }
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Router />
      {/* <Footer /> */}
    </>
  );
}
