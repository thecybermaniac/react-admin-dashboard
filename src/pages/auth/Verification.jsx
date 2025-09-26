import { ChevronLeftIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Verification = () => {
<<<<<<< Updated upstream
=======
  const [param, setParam] = useSearchParams();

  const email = param.get("user");

  async function resendEmail() {
    try {
      await account.createVerification(
        "http://localhost:5173/auth/email-verification"
      );

      console.log("Email sent successful");
    } catch (error) {
      console.log("Error occurred", error);
    }
  }
>>>>>>> Stashed changes
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
<<<<<<< Updated upstream
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mx-16 mt-[100px] p-5 rounded-lg border border-gray-300 dark:border-gray-600 w-full max-w-md mx-auto">
        <Mail className="size-10 text-brand-500 mb-1" />
        <h2 className="text-2xl text-gray-700 dark:text-gray-300">
          Verify Email!
        </h2>
=======
        <div className="flex flex-col justify-center items-center mt-[100px] p-5 rounded-lg border border-gray-300 dark:border-gray-600 w-full max-w-md mx-auto">
          <Mail className="size-10 text-brand-500 mb-1" />
          <h2 className="text-2xl text-gray-700 dark:text-gray-300">
            Verify Email!
          </h2>
>>>>>>> Stashed changes

        <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-300">
          We have sent a verification link to your email, johndoe@gmail.com.
          Please verify before you can continue. Didn't get email?
          <button variant="link" className="text-brand-600 mx-2">
            Resend.
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verification;
