import React from "react";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export const AddProduct = () => {
  const [stock, setStock] = useState(1);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Add Product</h1>
          <p className="text-sm text-gray-500">Home &gt; Add Product</p>
        </div>

        {/* Product Description */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Products Description</h2>
          <hr className=" text-gray-200 py-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <label className=" font-medium ml-1"> Product Name</label>
              <input
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="">
              <label className=" font-medium ml-1"> Product SKU</label>
              <select className="border mt-2 w-full py-2 border-gray-200 text-gray-500 outline-none focus:text-black rounded-[10px] px-2">
                <option className=" ">Select Category</option>
                <option>Women Dress</option>
                <option>Men Shirt</option>
              </select>
            </div>
            <div className="w-full">
              <label className=" font-medium ml-1"> Price</label>
              <input
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Price..."
              />
            </div>
            <div className="w-full">
              <label className=" font-medium ml-1">Discount Price</label>
              <input
                type="number"
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Discount Price..."
              />
            </div>

            <div className="w-full col-span-2">
              <label className=" font-medium ml-1"> Product Description</label>
              <textarea
                className=" col-span-2 h-28 border mt-2 w-full py-2 border-gray-200  text-black outline-none focus:border rounded-[10px] px-2"
                placeholder="Description"
              />
            </div>
          </div>
        </div>

        {/* Pricing & Availability */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Stock & Varient</h2>

          <div className=" flex gap-6 mb-6">
            <div className=" w-full">
              <label className=" font-medium ml-1"> Stock</label>
              <input
                type="number"
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Stock Quantity"
              />
            </div>
            <div className=" w-full">
              <label className=" font-medium ml-1"> Variant Type</label>
              <select className="border mt-2 w-full py-2 border-gray-200 text-gray-500 outline-none focus:text-black rounded-[10px] px-2">
                <option>singlevariant</option>
                <option>multivariant</option>
              </select>
            </div>
          </div>
          <div className=" flex gap-6 mb-6">
            <div className="">
              <label className=" font-medium ml-1"> Variant Options</label>
              <div className="mt-2 flex gap-4">
                <button className="px-4  py-2 bg-gray-200 text-gray-700 rounded-lg text-2xl font-bold hover:bg-gray-300">
                  M
                </button>
                <button className="px-4  py-2 bg-gray-200 text-gray-700 rounded-lg text-2xl font-bold hover:bg-gray-300">
                  L
                </button>
                <button className="px-4  py-2 bg-gray-200 text-gray-700 rounded-lg text-2xl font-bold hover:bg-gray-300">
                  XL
                </button>
                <button className="px-4  py-2 bg-gray-200 text-gray-700 rounded-lg text-2xl font-bold hover:bg-gray-300">
                  XXL
                </button>
              </div>
            </div>
            <div className="">
              <label className=" font-medium ml-1"> Color</label>
              <div className="mt-2 flex gap-4">
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-blue-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-red-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-green-600 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-yellow-400 rounded-full "></button>
                <button className="w-10 h-10 focus:border-2 focus:border-black bg-purple-600 rounded-full "></button>

              </div>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Products Images</h2>

          <div className=" relative border-2  hover:text-blue-600 duration-500 border-dashed rounded-xl h-40  flex-col items-center justify-center   text-gray-500">
            <input
              type="file"
              className=" w-full rounded-xl h-40  flex-col items-center justify-center   text-gray-500"
            />
            <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <FiUpload className=" text-3xl" />
              <p className=" text-md text-gray-700">
                Click to upload or drag & drop
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center ">
       
          <button className=" cursor-pointer px-6 py-2 font-bold bg-blue-600 text-white rounded-lg">
            Publish Product
          </button>
        </div>
      </div>
    </>
  );
};
