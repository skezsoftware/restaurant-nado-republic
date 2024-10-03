import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToExternal = ({ url }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = url;
  }, [url, navigate]);

  return null;
};

export default RedirectToExternal;