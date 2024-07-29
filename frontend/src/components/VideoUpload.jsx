import React, { useState } from "react";
// import "./video.css";
import axios from "axios";

function VideoUpload() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [videoTag, setVideoTag] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput && !videoTag.includes(tagInput)) {
      setVideoTag([...videoTag, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tag) => {
    setVideoTag(videoTag.filter((t) => t !== tag));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("title", title);
    formData.append("file", url);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("videoTag", videoTag.join(",")); // Sending tags as a comma-separated string

    try {
      const response = await axios.post(
        "http://localhost:5000/api/mediaUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error.response ? error.response.data : error.message); // Handle the error as needed
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Upload Video</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="url">Video</label>
          <input
            type="file"
            id="url"
            accept="video/*"
            onChange={handleUrlChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="videoTag">Video Tags</label>
          <input
            type="text"
            id="videoTag"
            value={tagInput}
            onChange={handleTagInputChange}
          />
          <button type="button" onClick={handleAddTag}>
            Add Tag
          </button>
          <div className="tags-container">
            {videoTag.map((tag) => (
              <div key={tag} className="tag">
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)}>
                  x
                </button>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VideoUpload;
