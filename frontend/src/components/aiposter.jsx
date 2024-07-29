import React, { useState } from "react";
import HashLoader from 'react-spinners/HashLoader';

function Poster() {
  const [companyName, setCompanyName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [poster, setPoster] = useState("");
  const [loader, setLoader] = useState(false);

  const generatePoster = async () => {
    setLoader(true);
    const response = await fetch("http://localhost:5000/generate-poster", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ companyName, postDescription }),
    });
    const data = await response.json();
    const { generated_image } = data;
  
    setLoader(false);
    setPoster(generated_image);
  };

  const downloadPoster = () => {
    const link = document.createElement("a");
    link.href = poster;
    link.download = "poster.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 min-w-1/2">
      <div
        className="relative py-3 sm:max-w-xl sm:mx-auto "
        style={{ width: "700px", maxWidth: "10000rem" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Poster Generator</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter your company name"
                    className="peer mb-5 placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                    className="peer placeholder-transparent h-10 w-full min-h-20 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Describe your post"
                    rows="4"
                  />
                  <label
                    htmlFor="description"
                    className="absolute mb-5 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Description
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="bg-cyan-500 text-white rounded-md px-2 py-1"
                    onClick={generatePoster}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {loader && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="loader"><HashLoader color="white" /></div>
          </div>
          )}
          <div className="w-full flex justify-center">
            {poster && (
              <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Generated Poster
                </h2>
                <img
                  src={poster}
                  alt="Generated Poster"
                  className="border rounded-lg shadow-md mb-4"
                />
                <a
                  className="bg-green-500 text-white rounded-md px-4 py-2"
                  //   onClick={downloadPoster}
                  download="AwesomeImage.png"
                  href={poster}
                >
                  Download Poster
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Poster;
