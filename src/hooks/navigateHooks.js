import { useNavigate } from "react-router-dom";

const useNavigateLoginPage = () => {
  const navigate = useNavigate();
  const navigateLoginPage = (time = 2000) => {
    // console.log("login");
    setTimeout(() => {
      navigate("/login");
    }, time);
  };
  return navigateLoginPage;
};

export { useNavigateLoginPage };
