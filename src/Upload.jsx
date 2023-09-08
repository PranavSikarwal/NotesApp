import React, { useState } from "react";
import "./Upload.css"; // Import the CSS file

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can perform actions with the selected file here, like sending it to a server.
      // For this example, we'll just log the file information.
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="upload-container"> {/* Use className to apply the CSS classes */}
      <h2>Upload Notes</h2>
      {selectedFile ? (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <button className="remove-button" onClick={handleRemoveFile}>
            Remove
          </button>
        </div>
      ) : (
        <>
          <label htmlFor="file" className="upload-label">
            Select File
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf, .doc, .txt"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </>
      )}
      <button className="upload-button" onClick={handleUpload}>
        Upload
      </button>
    </div></>
  );
}

export default Upload;
