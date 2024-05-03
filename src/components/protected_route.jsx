import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute(props) {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/auth/login" />;
  }
  console.log("ProtectedRoute", token);
  return <>{props.children}</>;
}
export default ProtectedRoute;
