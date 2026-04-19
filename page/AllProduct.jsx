import React, { useState } from 'react'
import { Link } from 'react-router';

export const AllProduct = () => {
    const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dummyProducts = [
  {
    _id: "1",
    title: "Nike Shoes",
    price: 120,
    discount: 20,
    stock: 10,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
  },
  {
    _id: "2",
    title: "Smart Watch",
    price: 80,
    discount: 15,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    _id: "3",
    title: "Headphones",
    price: 100,
    discount: 0,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
  },
];


  const filteredProducts = dummyProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
    
    {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
          {/* Header */}
      <div className="flex px-4 relative mt-2 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Users</h1>

        {/* Search Box */}
      <input
  type="text"
  placeholder="Search product title..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setTimeout(() => setIsFocused(false), 150)}
  className="border border-gray-400 px-3 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-400"
/>
     
         {isFocused && (
  <tbody className=' absolute top-full border border-gray-100 left-0 bg-white w-full shadow-lg rounded-b-lg z-10'>
    {filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <tr key={product._id} className="border-t hover:bg-gray-50">
          <td className="p-4 font-medium">{product.title}</td>
          <td className="p-4 text-gray-600">{product.price}</td>

          <td className="p-4">
            <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
              Active
            </span>
          </td>

          <td className="p-4">
            <button className="px-3 py-1 bg-red-500 text-white rounded text-sm">
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="text-center p-6 text-gray-500">
          No user found
        </td>
      </tr>
    )}
  </tbody>
)}
 </div>

        <table className="w-full">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {dummyProducts.map((item) => (
              <tr
                key={item._id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* Image */}
                <td className="p-4">
                  <img
                    src={item.image}
                    alt=""
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </td>

                {/* Title */}
                <td className="p-4 w-140 font-medium">{item.title}</td>
                <td className="p-4  font-medium">${item.price}</td>

                {/* Stock */}
                <td className="p-2">
                  <span className={`px-3 py-1 text-xs rounded-full ${item.stock > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {item.stock > 0 ? item.stock : 'Out of Stock'}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    Active
                  </span>
                </td>

                {/* Actions */}
                <td className="py-4 flex justify-around gap-1">
                  <button className="px-4 cursor-pointer py-2 text-sm bg-blue-500 text-white rounded">
                    Edit
                  </button>
                  <button className="px-4 cursor-pointer py-2 text-sm bg-red-500 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Grid Section (Optional UI) */}
      <h2 className="text-xl font-semibold mt-10 mb-4">
        Product Cards View
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyProducts.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <div key={item.id} className="group inline-block">
                  <div className="h-100 bg-gray-200 rounded-[10px] relative">
                    <div className="flex items-center w-full h-full">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="flex items-center justify-between pr-3 mt-4 absolute top-0 left-0 w-full">
                  {
                    item.discount ? (
                         <button className="bg-red-700 hover:bg-red-600 px-2 py-1 text-white font-medium">
                        -{item.discount}%
                      </button>
                    ) : null
                  }
                    </div>

                    <div className="bg-black flex duration-500 ease-in-out justify-between opacity-0 group-hover:opacity-100 absolute w-full bottom-0 left-0">
                      <button className="text-white font-medium text-[14px] py-3 px-6">
                        ADD TO CART
                      </button>
                      <Link

                        to={"/single-view-page"}
                        className="text-white font-medium text-[14px] py-3 px-6"
                      >
                        QUICK VIEW
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-[#B9A16B]">{item.category}</h5>
                    <h3 className="text-[#222222] font-bold">{item.title}</h3>
                    <p className="text-[#767676]">${item.price}</p>
                  </div>
                </div>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 bg-blue-500 text-white py-1 rounded">
                Edit
              </button>
              <button className="flex-1 bg-red-500 text-white py-1 rounded">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </>
  )
}
