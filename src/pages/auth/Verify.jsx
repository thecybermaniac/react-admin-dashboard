import React from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { account } from "../../lib/appwrite";
import { Check, ChevronLeftIcon } from "lucide-react";
import { CheckCircle } from "lucide-react";

const Verify = () => {
  const [param, setParam] = useSearchParams();
  const userId = param.get("userId");
  const secret = param.get("secret");

  useEffect(() => {
    (async () => {
      await account.updateVerification(userId, secret);
      await account.deleteSession('current');
    })();
  }, [param]);

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-lg mx-auto mb-5 sm:pt-10">
        <div className="flex flex-col justify-center items-center mt-[100px] p-5 rounded-lg border border-gray-300 dark:border-gray-600 w-full max-w-md mx-auto">
          <CheckCircle className="size-10 text-green-500 mb-1" />
          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            Email Verified!
          </h2>

          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300">
            Your email has been successfully verified. Return to the login page
            by clicking
            <Link to="/auth/sign-in" className="text-brand-600 mx-2">
              here.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
