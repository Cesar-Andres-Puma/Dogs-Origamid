import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { UserStorage } from "../context";
import { ProtectedRoute } from "../helper/protectedRoute";
import { Api } from "../page/apitest/Api";
import { Dogs } from "../page/dogs";
import { Error } from "../page/error";
import { Login } from "../page/login";
import { PasswordReset } from "../page/passwordReset";
import { Photo } from "../page/photo";
import { User } from "../page/user";
import { UserProfile } from "../page/userProfile";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Dogs />} />
          <Route path="Login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route path="foto:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="reset/" element={<PasswordReset />} />
          <Route path="/teste" element={<Api />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </UserStorage>
    </BrowserRouter>
  );
};
