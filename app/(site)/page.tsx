import Image from "next/image";
import AuthForm from "./components/AuthForm";

const Auth = () => {
  return (
    <div className="flex flex-col min-h-full py-12 justify-center sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        <h2 className="mt-6 text-center font-bold tracking-tight text-3xl text-gray-900">
          Sign up to Your Account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;
