import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { logoutNow } from "../store/loginJudgeSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutClick = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      dispatch(logoutNow());
      alert('ログアウトしました');
      navigate('/');
    }).catch((error) => {
      console.error(error);
    });
  };

  return LogoutClick;
};