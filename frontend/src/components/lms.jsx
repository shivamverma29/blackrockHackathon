import React from "react";

const Lms = () => {
  return (
    <div>
      <label htmlFor="lms" className="p-8">
        Filter by category:{" "}
      </label>
      <select className="select w-full max-w-96 mt-10">
        <option disabled selected>
          all
        </option>
        <option>travel</option>
      </select>
      <div className="card bg-base-100 w-96 shadow-xl mt-10">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lms;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./LmsPage.css";

// function LMS() {
//   const [videos, setVideos] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/allMediaUploads"
//         );
//         setVideos(response.data);
//         console.log(videos);
//         const uniqueCategories = new Set(
//           response.data.flatMap((video) => video.videoTag)
//         );
//         setCategories(Array.from(uniqueCategories));
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   const filteredVideos = selectedCategory
//     ? videos.filter((video) => video.videoTag.includes(selectedCategory))
//     : videos;

//   return (
//     <div className="lms-page">
//       <h2>Learning Management System</h2>
//       <div className="filter-container">
//         <label htmlFor="category">Filter by Category:</label>
//         <select
//           id="category"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="">All</option>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="videos-container">
//         {filteredVideos.map((video, index) => (
//           <div key={index} className="video-card">
//             <video src={video.url} controls></video>
//             <div className="video-info">
//               <h3>{video.title}</h3>
//               <p>
//                 <strong>Name:</strong> {video.name}
//               </p>
//               <p>
//                 <strong>Description:</strong> {video.description}
//               </p>
//               <p>
//                 <strong>Location:</strong> {video.location}
//               </p>
//               <div className="tags-container">
//                 {video.videoTag.map((tag, index) => (
//                   <span key={index} className="tag">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LMS;
