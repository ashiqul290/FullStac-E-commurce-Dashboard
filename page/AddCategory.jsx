import { useState } from "react";
import { FiUpload } from "react-icons/fi";

const AddCategory = () => {

  const [form, setForm] = useState({
    name: "",
    discount: "",
    subcategory: "",
    image: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // পরে API বসাবে
  };

  return (
    <div className="w-full p-6 rounded-xl shadow">
        
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6">Add Category</h1>

           <div className="bg-white rounded-xl shadow p-6 mb-6">
        
      
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full">
              <label className=" font-medium ml-1"> Category Name</label>
              <input
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="w-full">
              <label className=" font-medium ml-1"> Discount</label>
              <input
              type="number"
                className=" border mt-2 w-full py-2 border-gray-200 outline-none rounded-[10px] px-2"
                placeholder="Enter Discount Price..."
              />
            </div>
      
           
          </div>
        </div>

          {/* Product Images */}
                <div className="bg-white rounded-xl shadow p-6 mb-6">
                  <h2 className="text-lg font-semibold mb-4">Category Images</h2>
        
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
                    Publish Category
                  </button>
                </div>
      </div>
  );
}

export default AddCategory