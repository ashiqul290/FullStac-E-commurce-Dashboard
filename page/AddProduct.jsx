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
                className=" border mt-2 w-full py-2 border-gray-200 rounded-[10px] px-2"
                placeholder="Enter Product Name"
              />
            </div>
            <select className="input">
              <option>Select Category</option>
            </select>

            <select className="input">
              <option>Select Brand</option>
            </select>
            <select className="input">
              <option>Select Color</option>
            </select>

            <input className="input" placeholder="Weight (KG)" />
            <input className="input" placeholder="Length (CM)" />
            <input className="input" placeholder="Width (CM)" />

            <textarea
              className="input col-span-2 h-28"
              placeholder="Description"
            />
          </div>
        </div>

        {/* Pricing & Availability */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Pricing & Availability</h2>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <input className="input" placeholder="Weight (KG)" />
            <input className="input" placeholder="Length (CM)" />
            <input className="input" placeholder="Width (CM)" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Stock */}
            <div>
              <label className="text-sm text-gray-600">Stock Quantity</label>
              <div className="flex items-center border rounded-lg overflow-hidden mt-1">
                <button
                  className="px-4 py-2 bg-gray-200"
                  onClick={() => setStock(stock > 1 ? stock - 1 : 1)}
                >
                  -
                </button>
                <span className="px-6">{stock}</span>
                <button
                  className="px-4 py-2 bg-gray-200"
                  onClick={() => setStock(stock + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="text-sm text-gray-600">
                Availability Status
              </label>
              <select className="input mt-1">
                <option>Select Availability</option>
                <option>In Stock</option>
                <option>Out of Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Products Images</h2>

          <div className=" relative border-2  hover:text-blue-600 duration-500 border-dashed rounded-xl h-40  flex-col items-center justify-center   text-gray-500">
            
            <input
              type="file"

              className=" opacity-0 w-full rounded-xl h-40  flex-col items-center justify-center   text-gray-500"
            />
            <div className=" absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
              <FiUpload className=" text-3xl"/>
              <p className=" text-md text-gray-700">
                Click to upload or drag & drop
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 border rounded-lg">Draft</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
            Publish Product
          </button>
        </div>
      </div>
    </>
  );
};
