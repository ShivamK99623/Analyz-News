// // src/Home.js
// import React from 'react';

// const Home = () => {
//   return (
//     // <div className="max-w-600 p-6 bg-white rounded-lg shadow-md">
//       <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
//         <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4 bg-white dark:bg-gray-900 ">
//         {/* <div>
//             <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
//                 <span class="sr-only">Action button</span>
//                 Action
//                 <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//                 </svg>
//             </button>
//             <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
//                 <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
//                     <li>
//                         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
//                     </li>
//                     <li>
//                         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
//                     </li>
//                 </ul>
//                 <div class="py-1">
//                     <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
//                 </div>
//             </div>
//         </div> */}
//         <label for="table-search" class="sr-only">Search</label>
//         <div class="relative">
//             <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//             </div>
//             <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
//         </div>
//     </div>
//     <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-all-search" class="sr-only">checkbox</label>
//                     </div>
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Title
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Discription
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Sentiment
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Action
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td class="w-4 p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
//                     <div class="ps-3">
//                         <div class="text-base font-semibold">Neil Sims</div>
//                     </div>  
//                 </th>
//                 <td class="px-6 py-4">
//                     React Developer
//                 </td>
//                 <td class="px-6 py-4">
//                     <div class="flex items-center">
//                         <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
//                     </div>
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td class="w-4 p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <div class="ps-3">
//                         <div class="text-base font-semibold">Bonnie Green</div>
//                     </div>
//                 </th>
//                 <td class="px-6 py-4">
//                     Designer
//                 </td>
//                 <td class="px-6 py-4">
//                     <div class="flex items-center">
//                         <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
//                     </div>
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td class="w-4 p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <div class="ps-3">
//                         <div class="text-base font-semibold">Jese Leos</div>
//                     </div>
//                 </th>
//                 <td class="px-6 py-4">
//                     Vue JS Developer
//                 </td>
//                 <td class="px-6 py-4">
//                     <div class="flex items-center">
//                         <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
//                     </div>
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td class="w-4 p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <div class="ps-3">
//                         <div class="text-base font-semibold">Thomas Lean</div>
//                     </div>
//                 </th>
//                 <td class="px-6 py-4">
//                     UI/UX Engineer
//                 </td>
//                 <td class="px-6 py-4">
//                     <div class="flex items-center">
//                         <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
//                     </div>
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
//             <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
//                 <td class="w-4 p-4">
//                     <div class="flex items-center">
//                         <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
//                         <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
//                     </div>
//                 </td>
//                 <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     <div class="ps-3">
//                         <div class="text-base font-semibold">Leslie Livingston</div>
//                     </div>
//                 </th>
//                 <td class="px-6 py-4">
//                     SEO Specialist
//                 </td>
//                 <td class="px-6 py-4">
//                     <div class="flex items-center">
//                         <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
//                     </div>
//                 </td>
//                 <td class="px-6 py-4">
//                     <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>
// // </div>

//   )
// };

// export default Home;
// src/Home.js
import React, { useState } from 'react';
import { FaDownload, FaTrash, FaSearch } from 'react-icons/fa';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleDownload = () => {
    // Add your download logic here
    alert(`Downloading item: ${selectedItem}`);
    closeModal();
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Download Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Download</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to download "{selectedItem}"?</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Section */}
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 p-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"/>
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Sentiment
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id={`checkbox-table-search-${item}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label htmlFor={`checkbox-table-search-${item}`} className="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <div className="ps-3">
                  <div className="text-base font-semibold">News Title {item}</div>
                </div>  
              </th>
              <td className="px-6 py-4">
                Description of news item {item}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className={`h-2.5 w-2.5 rounded-full ${item % 2 === 0 ? 'bg-green-500' : 'bg-red-500'} me-2`}></div> 
                  {item % 2 === 0 ? 'Positive' : 'Negative'}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button 
                    onClick={() => openModal(`News Title ${item}`)}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
                    title="Download"
                  >
                    <FaDownload className="h-5 w-5" />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900 dark:text-red-500 dark:hover:text-red-300 cursor-pointer"
                    title="Delete"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Home;