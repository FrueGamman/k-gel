import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { backEndPoints, empireToken, logout } from "../../utils/enum";
import { apiUrl } from "../../utils/env";
import api from "../../utils/api-call";
import { CartContext } from "../../context/cart";
import { ToastContainer, toast } from "react-toastify";


function Myaccount() {
  const location = useLocation()
  const [data, setData] = React.useState([])
  const { cartItems, getCartTotal,clearCart,addToCart,removeFromCart,handleRemoveFromCart } = useContext(CartContext);
  const full_name = localStorage.getItem(empireToken.FULLNAME)
  const navigate = useNavigate()


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tx_ref = params.get('tx_ref');
    if (tx_ref) {
    const verify = async() =>{
      const data = {
        tx_ref: tx_ref
      }
      try {
        const response = await api.post(`${backEndPoints.VERIFY_PAYMENT}`,data )
            // console.log(response)
      } catch (error) {
        // toast.error('Error verifying payment.');
        console.log(error)
      }
    }
    verify()
    }
}, [location]);




  useEffect(() => {
    if (
      localStorage.getItem(empireToken.USERTOKEN) == null
    ) {
      navigate("/");
    }






    const getBooking = async () => {
      const user_id = localStorage.getItem(empireToken.USER_ID)
      try {
        const response = await api.get(`${backEndPoints.USER_PAYMENT}${user_id}`)
        setData(response.data)
      } catch (error) {
        // console.error("Failed to fetch user")
      }
    }
    getBooking()
  }, []);


  return (
    <div className="">
      <ToastContainer />
      <h1 className="text-center py-12 text-xl">My Account</h1>
      <section className="max-w-7xl mx-auto flex md:flex-row flex-col  md:mx-6 gap-6">
        <div>
          <div className="border w-72">
            <ul>
              <li className="border-b py-3 px-4 cursor-pointer text-sm bg-gray-200">
                Dashboard
              </li>
              <li className="border-b py-3 px-4 cursor-pointer text-sm">
                Address
              </li>
              <li className="border-b py-3 px-4 cursor-pointer text-sm font-semibold text-green-700" >
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-4/5">
          <div>
            <span className="text-base">
              Hello {full_name}
            </span>{" "}
            <span className="text-base  cursor-pointer font-semibold text-green-700" onClick={logout}>Logout</span>
          </div>
          <span className="font-medium py-4 text-base">Order History</span>
          {data.length === 0 ? (
            <div className="border-2 flex  border-green-800 py-3  my-4">
              <svg
                className="text-green-800"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="2em"
                width="2em"
              >
                <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z" />
              </svg>
              <span className=" font-semibold text-green-800 mx-1 underline">
                <Link to={"/"}>MAKE YOUR FIRST ORDER</Link>
              </span>
              <span>You haven't placed any orders yet.</span>
            </div>
          ) : null}
        </div>
      </section >
      <div className="flex flex-col md:flex-row overflow-scroll my-10 rounded">
        <div className="w-full md:w-3/4 bg-white px-4 md:px-10 py-10">
          <div className="flex justify-between pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          </div>
          <div className="flex flex-wrap mt-10 mb-5 border-b-2 pb-2">
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-red-600 text-xs uppercase w-full md:w-1/5 text-center">
              Price
            </h3>
          </div>
          {data?.shop?.map((item,index) => (
            <div key={item.id} className="flex flex-col md:flex-row items-center hover:bg-gray-100 -mx-4 px-6 py-5 border-b pb-8">
              <div className="flex w-full md:w-2/5">
                <div className="w-20 md:w-24">
                  <img className="h-24 md:h-32" src={`${apiUrl}${item.image}`} alt="" />
                </div>
                <div className="flex flex-col justify-around ml-4 flex-grow">
                  <span className="font-bold text-sm">{item.name} </span>
                  <span className="font-bold text-xs">{item.size} </span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  >
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-full md:w-1/5 mt-4 md:mt-0">
                <div className="flex gap-4">
                  <p className="text-black">{item.quantity}</p>
                </div>
              </div>
              <span className="text-center w-full md:w-1/5 mt-4 md:mt-0 font-semibold text-sm">
                ${item.price}
              </span>
            </div>
          ))}
          <a
            href="/"
            className="flex font-semibold text-indigo-600 text-sm mt-10 border p-3 w-fit"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </a>
        </div>

        <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-3 border-l mt-4 md:mt-0">
          <h1 className="font-semibold text-2xl border-b pb-8 inline-block">
            Orders Total
          </h1>
          <div className="flex justify-between mt-4 mb-5">
            <span className="font-semibold text-sm uppercase">Total:</span>
            <span className="font-semibold text-sm">${data?.total_amount}</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>{data?.method}</option>
            </select>
          </div>
          <div className="py-3"></div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${data?.total_amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
