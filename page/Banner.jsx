import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

export const Banner = () => {
    const [image, setImage] = useState(null);

  const handleFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(image); // পরে API বসাবে
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <div className="w-full  bg-white p-6 rounded-xl shadow">

        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Add Banner</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Upload Box */}
          <div>
            <label className="font-medium">Banner Image</label>

            <div className="relative border-2 border-dashed rounded-xl h-48 mt-3 flex items-center justify-center text-gray-500 hover:text-blue-600 transition">

              <input
                type="file"
                onChange={handleFile}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />

              <div className="flex flex-col items-center pointer-events-none">
                <FiUpload className="text-3xl mb-2" />
                <p className="text-sm">Click or drag image to upload</p>
              </div>

            </div>
             <div className="w-full mt-5">
              <label className=" font-medium ml-1"> Banner URL</label>
              <input
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Banner URL"
              />
            </div>
          </div>

          {/* Preview */}
          {image && (
            <div className="mt-4">
              <p className="text-sm mb-2">Preview:</p>
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Publish Banner
          </button>

        </form>
      </div>
    </div>
    </>
  )
}
