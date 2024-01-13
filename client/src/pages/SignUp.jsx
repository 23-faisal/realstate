import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="px-3 max-w-6xl mx-auto">
      <h1 className="text-3xl text-center text-semibold py-7">Sign up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="password"
          placeholder="password"
        />
        <button
          className="bg-slate-700 py-3 rounded-lg text-white uppercase  text-xl hover:opacity-90 disabled:opacity-80 transition duration-200 ease-in-out "
          type="submit"
        >
          Sing Up
        </button>
      </form>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-slate-600 ">Already have an account?</span>
        <Link className="text-blue-700 font-semibold" to={"/sign-in"}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
