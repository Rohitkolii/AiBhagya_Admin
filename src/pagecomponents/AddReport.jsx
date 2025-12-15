import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddReport() {
  const [showForm, setShowForm] = useState(false);

  // Example dynamic categories
  const categories = [
    { id: 1, name: "Report Category 1" },
    { id: 2, name: "Report Category 2" },
    { id: 3, name: "Report Category 3" },
    { id: 4, name: "Report Category 4" },
    { id: 5, name: "Report Category 5" },
    { id: 6, name: "Report Category 6" },
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "", // Add category
      description: "",
      fullDescription: "",
      image: null,
      imagePreview: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      category: Yup.string().required("Category is required"),
    //   description: Yup.string().required("Description is required"),
    //   fullDescription: Yup.string().required("Full description is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      setShowForm(false);
      formik.resetForm();
    },
  });

  return (
    <div
      className={`bg-white rounded-xl ${
        showForm && "border border-gray-300 shadow mb-6 p-5"
      }`}
    >
      {/* Top Add Button */}
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {showForm ? "Add Report" : "Reports"}
          </h2>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary h-fit text-white rounded-lg shadow hover:opacity-90 transition cursor-pointer"
        >
          {showForm ? "Close" : "Add"}
        </button>
      </div>

      {/* Smooth Collapsible Form */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showForm ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form onSubmit={formik.handleSubmit} className="grid gap-4 mt-2">
          {/* Title + Category side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1">Report Title</label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 border border-gray-300 shadow rounded-lg outline-none focus:border-primary"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.title && formik.touched.title && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
              )}
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                className="w-full px-4 py-2 border border-gray-300 shadow rounded-lg outline-none focus:border-primary"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {formik.errors.category && formik.touched.category && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.category}</p>
              )}
            </div>
          </div>

          {/* Rest of the form remains same: description, full description, image */}
          <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-4">
            <div>
              <div>
                <label className="block text-sm font-medium mb-1">Short Description</label>
                <input
                  type="text"
                  name="description"
                  className="w-full px-4 py-2 border border-gray-300 shadow rounded-lg outline-none focus:border-primary"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Full Description</label>
                <textarea
                  name="fullDescription"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 shadow rounded-lg outline-none focus:border-primary resize-none"
                  value={formik.values.fullDescription}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.errors.fullDescription && formik.touched.fullDescription && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.fullDescription}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image</label>
              <label className="w-full h-40 md:h-[190px] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition">
                {formik.values.imagePreview ? (
                  <img
                    src={formik.values.imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary mb-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l8.293 8.293a1 1 0 001.414 0L21 7"
                      />
                    </svg>
                    <p className="text-xs">Click to upload image</p>
                  </div>
                )}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    formik.setFieldValue("image", file);
                    if (file) {
                      formik.setFieldValue("imagePreview", URL.createObjectURL(file));
                    }
                  }}
                />
              </label>
              {formik.errors.image && formik.touched.image && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 items-center">
            <button
              onClick={formik.handleReset}
              type="button"
              className="cursor-pointer px-4 py-2 bg-black text-white rounded-lg shadow hover:opacity-80 transition w-fit"
            >
              Reset
            </button>
            <button
              type="submit"
              className="cursor-pointer px-4 py-2 bg-primary text-white rounded-lg shadow hover:opacity-90 transition w-fit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
