import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Show or Hide password

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Submit Form

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="px-3 sm:px-0 max-w-3xl mx-auto">
      <h1 className="text-3xl text-center text-semibold py-7">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          onChange={handleChange}
          type="text"
          className="border p-3 rounded-lg"
          id="username"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          type="text"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
        />

        <div className="w-full relative ">
          <input
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            className="border p-3 rounded-lg w-full"
            id="password"
            placeholder="password"
          />
          <div
            className="absolute top-4 right-2 sm:right-4 text-xl"
            onClick={passwordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <button
          disabled={loading}
          className="bg-slate-700 py-3 rounded-lg text-white uppercase  text-xl hover:opacity-90 disabled:opacity-80 transition duration-200 ease-in-out "
          type="submit"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex items-center gap-2 mt-4">
        <span className="text-slate-600 ">Already have an account?</span>
        <Link className="text-blue-700 font-semibold" to={"/sign-in"}>
          Sign in
        </Link>
      </div>
      {error && <p className="text-2xl text-red-600 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
