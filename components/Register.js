import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { AiOutlineGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
});

const Register = () => {
  const [loading, setLoading] = useState(false);
  let codeMessage = null;
  // validation logic
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // This is onSubmit function
  const onSubmit = async (data) => {
    // setLoading(true);
    const body = {
      email: data.email,
      user_name: data.email,
      password: data.password,
    };
    console.log(body);
  };

  return (
    <div className="flex items-center justify-center p-3 mt-5 ">
      <div className="flex flex-col items-center">
        <button className="text-[#000000] font-semibold border-[#D2C1B9] bg-white py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-1 flex items-center">
          <FcGoogle className="h-8 w-8 mb-1 mr-10" />
          Sign In with Google
        </button>

        <button className="font-semibold bg-white text-[#000000] border-[#D2C1B9] py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-2 flex items-center">
          <AiOutlineGithub className="h-8 w-8 mb-1 mr-10" />
          Sign In with Github
        </button>
        <button className="font-semibold bg-white text-[#000000] border-[#D2C1B9] py-3 px-5 rounded-md w-5/6 mt-2 border-[1px] p-2 flex items-center">
          <FaFacebook className="h-8 w-8 mb-1 mr-10" />
          Sign In with Facebook
        </button>

        <hr className="bg-[#D2C1B9] border-0 h-px my-8" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="email"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.email ? "text-[#EC6276]" : "text-[#3d4f7]"
              }`}
            >
              Email{" "}
            </label>

            <input
              name="email"
              id="email"
              type="text"
              placeholder="Email"
              {...register("email")}
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />

            <div className="mb-3 text-normal text-red-500 ">
              <p>{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full">
            <label
              htmlFor="password"
              className={`w-full p-2 font-bold text-sm mb-2 ${
                errors && errors.password ? "text-red-400" : "text-[#3d4f7]"
              }`}
            >
              Password{" "}
            </label>

            <input
              type="password"
              name="password"
              id="password"
              // value={"test123456"}
              {...register("password")}
              placeholder="Password"
              className={`w-full text-base mb-3 border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2`}
            />
            <div className="mb-3 text-normal text-red-500 ">
              {errors.password?.message}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <button
            type="submit"
            className="flex flex-col justify-center items-center w-full text-base mb-3 font-semibold text-white border-[#D2C1B9] py-3 px-6 rounded-md mt-2 border-[1px] p-2 bg-sky-500"
          >
            Submit {loading ? <Loader /> : "SIGN UP"}
          </button>
        </div>
      </form>
      {codeMessage && (
        <div className="form-group">
          <div className={successful ? "text-green-500" : "text-red-500"}>
            {codeMessage}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
