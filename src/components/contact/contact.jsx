import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../utils/api-call";
import { backEndPoints } from "../../utils/enum";
export default function Contact() {
  const [firstname, setFirstname] = React.useState([]);
  const [lastname, setLastname] = React.useState([]);
  const [email, setEmail] = React.useState([]);
  const [phonenumber, setPhonenumber] = React.useState([]);
  const [subject, setSubject] = React.useState([]);
  const [message, setMessage] = React.useState([]);

  const handleContactus = async (e) => {
    e.preventDefault();

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      subject: subject,
      message: message,
    };
    if (
      firstname == "" ||
      lastname == "" ||
      email == "" ||
      phonenumber == "" ||
      subject == ""
    ) {
      toast.warn("Please fill all field");
    } else {
      try {
        const response = await api.post(backEndPoints.CONTACTUS, data);
        // console.log(response.data);
        if (response.status == 200) {
          setEmail("");
          setSubject("");
          setMessage("");
          setPhonenumber("");
          setLastname("");
          setFirstname("");
          toast.success("Thanks for sending message you will throw it");
        }
      } catch (err) {
        toast.error("Fail to send message");
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="text-center font-bold my-4">{" "}</div>
      <div className="grid lg:grid-cols-2 gap-6 my-5">
        
        <div className="p-6 bg-white rounded-lg ">
  <h1 className="text-3xl font-bold my-5 text-gray-900">Contact Us</h1>
  <p className="mb-4 text-gray-700">
    Please feel free to contact us with any questions you may have by phone or email.
  </p>
  <div className="space-y-4 text-gray-700">
    <div>
      <h2 className="font-semibold">ADDRESS</h2>
      <p>
        📍 Town - Kigali, Rwanda.
        <br />
        🏢 LA BONNE ADRESSE - 4th floor
        <br />
        INTERNATIONAL DELIVERY 🌎✈️ on DHL
      </p>
    </div>
    <div>
      <h2 className="font-semibold">Follow Us</h2>
      <p>
        Followed by brave___rwanda, ivanking.rwanda, pas
      </p>
    </div>
    <div>
      <h2 className="font-semibold">Email</h2>
      <p>
        📧 empiremenswear7@gmail.com
      </p>
    </div>
    <div>
      <h2 className="font-semibold">PHONE</h2>
      <p>
        📩 / ☎️ 0785295925 / 0788785765
      </p>
    </div>
  </div>
</div>
<div className="">
        <form onSubmit={handleContactus} className="space-y-6">
  <div className="font-bold text-2xl text-gray-700 my-5">
    Send us a message
  </div>
  <div className="flex flex-col lg:flex-row lg:space-x-4">
    <input
      value={firstname}
      onChange={(e) => setFirstname(e.target.value)}
      className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 lg:mb-0 leading-tight focus:outline-none focus:bg-white"
      type="text"
      required
      placeholder="Firstname"
    />
    <input
      value={lastname}
      onChange={(e) => setLastname(e.target.value)}
      className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 lg:mb-0 leading-tight focus:outline-none focus:bg-white"
      type="text"
      required
      placeholder="Lastname"
    />
  </div>
  <div className="flex flex-col lg:flex-row lg:space-x-4">
    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 lg:mb-0 leading-tight focus:outline-none focus:bg-white"
      type="email"
      required
      placeholder="Email"
    />
    <input
      value={phonenumber}
      onChange={(e) => setPhonenumber(e.target.value)}
      className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 lg:mb-0 leading-tight focus:outline-none focus:bg-white"
      type="tel"
      required
      placeholder="Phone"
    />
  </div>
  <input
    value={subject}
    onChange={(e) => setSubject(e.target.value)}
    className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    type="text"
    required
    placeholder="Subject"
  />
  <textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="appearance-none block w-full bg-white text-gray-700 border border-black py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    required
    placeholder="Message"
    rows="4"
  />
  <button
    type="submit"
    className="w-full py-2 bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
  >
    Send Message
  </button>
</form>

        </div>

      </div>
    </div>
  );
}
