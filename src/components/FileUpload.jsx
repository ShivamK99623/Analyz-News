// // src/About.js
// import React from 'react';
// import { useState, useRef } from 'react';

// const About = () => {
//   const [files, setFiles] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files);
//     setFiles([...files, ...selectedFiles]);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setIsDragging(true);
//   };

//   const handleDragLeave = () => {
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const droppedFiles = Array.from(e.dataTransfer.files)
//       .filter(file => ['image/jpeg', 'image/png'].includes(file.type));
//     setFiles([...files, ...droppedFiles]);
//   };

//   const removeFile = (index) => {
//     const updatedFiles = [...files];
//     updatedFiles.splice(index, 1);
//     setFiles(updatedFiles);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (files.length === 0) {
//       alert('Please select at least one file');
//       return;
//     }

//     const formData = new FormData();
//     files.forEach((file, index) => {
//       formData.append(`files[${index}]`, file);
//     });

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
      
//       if (response.ok) {
//         alert('Files uploaded successfully!');
//         setFiles([]);
//       } else {
//         throw new Error('Upload failed');
//       }
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       alert('Error uploading files');
//     }
//   };

//   return (
//     <div className="max-w-400 mx-auto my-auto p-6 bg-white rounded-lg shadow-md mt-[100px]">
//       <h2 className="text-xl font-semibold mb-4">Upload Newspaper Files</h2>
//       <p className="text-gray-600 mb-4">
//         Upload newspaper scans for analysis. Supported formats: JPG, PNG.
//       </p>

//       <div
//         className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 ${
//           isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
//         }`}
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDrop}
//         onClick={() => fileInputRef.current.click()}
//       >
//         <input
//           type="file"
//           ref={fileInputRef}
//           className="hidden"
//           onChange={handleFileChange}
//           accept="image/jpeg,image/png"
//           multiple
//         />
//         <svg
//           className="mx-auto h-12 w-12 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//           />
//         </svg>
//         <p className="mt-2 text-sm text-gray-600">
//           Drag and drop files here or{' '}
//           <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
//             browse files
//           </span>
//         </p>
//         <p className="text-xs text-gray-500 mt-1">Maximum file size: 20MB</p>
//       </div>

//       {files.length > 0 && (
//         <div className="mb-4">
//           <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h3>
//           <ul className="divide-y divide-gray-200">
//             {files.map((file, index) => (
//               <li key={index} className="py-2 flex justify-between items-center">
//                 <span className="text-sm text-gray-600 truncate max-w-xs">
//                   {file.name}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => removeFile(index)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
//       >
//         Upload Files
//       </button>
//     </div>
//   );
// };

// export default About;
// src/About.js
import React from 'react';
import { useState, useRef } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [edition, setEdition] = useState('morning'); // State for edition dropdown
  const fileInputRef = useRef(null);

  // Edition options
  const editionOptions = [
    { value: 'morning', label: 'Morning Edition' },
    { value: 'evening', label: 'Evening Edition' },
    { value: 'special', label: 'Special Edition' },
    { value: 'weekend', label: 'Weekend Edition' },
  ];

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files)
      .filter(file => ['image/jpeg', 'image/png'].includes(file.type));
    setFiles([...files, ...droppedFiles]);
  };

  const removeFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (files.length === 0) {
      alert('Please select at least one file');
      return;
    }

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`files[${index}]`, file);
    });
    // Add the selected edition to form data
    formData.append('edition', edition);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Files uploaded successfully!');
        setFiles([]);
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files');
    }
  };

  return (
    <div className="max-w-400 mx-auto my-auto p-6 bg-white rounded-lg shadow-md mt-[100px]">
      {/* Header section with edition dropdown */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Upload Newspaper Files</h2>
          <p className="text-gray-600">
            Upload newspaper scans for analysis. Supported formats: JPG, PNG.
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="edition-select" className="text-sm font-medium text-gray-700">
            Edition:
          </label>
          <select
            id="edition-select"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          >
            {editionOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Rest of your existing code */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center mb-4 ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept="image/jpeg,image/png"
          multiple
        />
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here or{' '}
          <span className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            browse files
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-1">Maximum file size: 20MB</p>
      </div>

      {files.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h3>
          <ul className="divide-y divide-gray-200">
            {files.map((file, index) => (
              <li key={index} className="py-2 flex justify-between items-center">
                <span className="text-sm text-gray-600 truncate max-w-xs">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
      >
        Upload Files
      </button>
    </div>
  );
};

export default FileUpload;