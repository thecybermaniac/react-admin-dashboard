import React from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { account } from "../../lib/appwrite";

const Verify = () => {
  const [param, setParam] = useSearchParams();
  const userId = param.get("userId");
  const secret = param.get("secret");

  useEffect(() => {
    (async () => {
      await account.updateVerification(userId, secret);

    })();
  }, [param]);

  return <div>Your email has been verified.</div>;
};

export default Verify;
