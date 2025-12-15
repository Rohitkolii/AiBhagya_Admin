import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from "react-icons/fa";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),
  });

  // Hook-based Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/images/ill.svg"
            alt="logo"
            className="w-40 h-40"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-primary">
          Welcome to AI BHAGYA
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Please login to your account.
        </p>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {/* Username */}
          <div>
            <label className="font-medium">Username</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="username"
                placeholder="Enter Username"
                className="w-full outline-none"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            {/* Validation Error */}
            {formik.touched.username && formik.errors.username && (
              <p className="text-red-500 text-sm">{formik.errors.username}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="font-medium">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaLock className="text-gray-500 mr-2" />

              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="w-full outline-none"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <FaEyeSlash className="text-gray-600" />
                ) : (
                  <FaEye className="text-gray-600" />
                )}
              </button>
            </div>

            {/* Validation Error */}
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white w-full py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-primary/90 transition cursor-pointer"
          >
            Login
            <FaArrowRight className="text-xs" />
          </button>
        </form>
      </div>
    </div>
  );
}
