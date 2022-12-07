import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { UserStorage } from "../context";
import { Api } from "../page/apitest/Api";
import { Dogs } from "../page/dogs";
import { Error } from "../page/error";
import { Login } from "../page/login";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Dogs />} />
          <Route path="Login/*" element={<Login />} />
          <Route path="/teste" element={<Api />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};
