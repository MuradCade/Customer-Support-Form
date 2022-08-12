import logo from './logo.jpg';
import  './index.css';
import React from 'react';
function App() {
  return (
    <div className="App">
     <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <div className="flex itmes-center justify-center">
            <img src={logo} alt="Logo" className="w-28 h-auto"/>
            </div>
            <p className=" text-lg  title-font  text-indigo-500 font-bold">
              Tayo Tech Customer Support
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-medium">
            Do you need help? let us understand how we can help you. Please fill the form below
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form method='POST' action="https://getform.io/f/475dd1c4-e075-4a9a-ae78-0f0f72a146aa">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600 font-bold">
                    FullName
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Fullname"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                 />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600 font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="tel"
                    className="leading-7 text-sm text-gray-600 font-bold"
                    >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter PhoneNumber"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                    />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600 font-bold"
                    >
                    Message (Complain)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter Message (Complain)"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                    ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                 Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-gray-400 text-md font-medium">&copy; All Right Reserved For Tayo-Tech</p>
              
              </div>
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
