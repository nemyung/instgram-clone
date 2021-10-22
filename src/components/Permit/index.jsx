import * as React from "react";
import { Redirect } from "react-router-dom";
import Loading from "../Loading";
import useAuthorization from "../../hooks/useAuthorization";

const IDLE = "idle";
const SUCCESS = "success";
const FAIL = "fail";

const Permit = ({ children }) => {
  const status = useAuthorization();

  if (status === IDLE) {
    return <Loading />;
  }

  if (status === SUCCESS) {
    return children;
  }

  if (status === FAIL) {
    return <Redirect to="/sign_in" />;
  }
};

export default Permit;
