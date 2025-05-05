import React, { useEffect, useState } from 'react';
import { FaDownload, FaTrash, FaSearch, FaEye } from 'react-icons/fa';

import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver'; // install via `npm install file-saver`


const reportName = "April News Report";
const logoUrl = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

// const ColorCode = {
//   Positive: 'bg-green-500',
//   Negative: 'bg-red-500',
//   Neutral: "bg-gray-300"
// }
const ColorCode = {
  COMPLETE: 'bg-green-500',
  FAILED: 'bg-red-500',
  PENDING: "bg-gray-300"
}
const allNews = [
  {
    id: 1,
    name: "News 1 Title",
    status: "PENDING",
    summary: "A brief overview of News 1.",
    description: "Full description of News 1...",
  },
  {
    id: 2,
    name: "News 2 Title",
    status: "COMPLETE",
    summary: "A brief overview of News 2.",
    description: "Full description of News 2...",
  },
  {
    id: 3,
    name: "News 3 Title",
    status: "FAILED",
    summary: "A brief overview of News 3.",
    description: "Full description of News 3...",
  },
];

import { ReportPDF } from '../components/Pdfgenerate'
import { getReportById, getReports } from '../services/news.api';
import Pagination from '../components/element/Pagination';
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [pageinfo, setPageinfo] = useState({
    total_record:1
  });
  const [error, setPageError] = useState("Loading...");

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };



  const [selectedNews, setSelectedNews] = useState([]);
  const isChecked = (id) => selectedNews.some((item) => item.id === id);
  const toggleNewsSelection = (newsItem) => {
    setSelectedNews((prev) =>
      prev.find((item) => item.id === newsItem.id)
        ? prev.filter((item) => item.id !== newsItem.id)
        : [...prev, newsItem]
    );
  };

  const handleDownloadPDF = async (selectedNews) => {
    selectedNews.map(({id})=>{
      getReportById(id).then(async (response)=>{
        if(response.status_code===200 && response.data){
        let {report_data:{description,name}={},report_data,news_clip}=response.data
        console.log({news_clip})
        const blob = await pdf(
          <ReportPDF
            reportName={name}
            logoUrl={logoUrl}
            newsList={selectedNews.map((n) => n.name)}
            newsDetails={news_clip}
            description={description}
          />
        ).toBlob();
        saveAs(blob, `${reportName}.pdf`);
        closeModal()
      }
  
  
      })
    })


  };

  const handlePreviewPDF = async (selectedNews) => {
    selectedNews.map(({ id }) => {
      getReportById(id).then(async (response) => {
        if (response.status_code === 200 && response.data) {
          let { report_data: { description, name } = {}, news_clip } = response.data;
  
          const blob = await pdf(
            <ReportPDF
              reportName={name}
              logoUrl={logoUrl}
              newsList={selectedNews.map((n) => n.name)}
              newsDetails={news_clip}
              description={description}
            />
          ).toBlob();
  
          const blobURL = URL.createObjectURL(blob);
          window.open(blobURL, '_blank');
        }
      });
    });
  };
  

  useEffect(() => {
    getReports(pageNumber, pageSize).then(res => {
      if (res.status_code === 200) {
        let { record, page_info } = res.data
        setNewsList(record)
        setPageinfo(page_info)
        setPageError(!record.length && "No Data Available !")
      } else throw res
    }).catch(err => {
      setPageError("Unable to load data !")
      console.log({ err })
    })
  }, [pageNumber, pageSize])

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Download Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Download</h3>
            {selectedItem.map(x => <p className="text-gray-600 mb-6">Are you sure you want to download "{x.name}"?</p>)}
            <div className="flex justify-end space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDownloadPDF(selectedItem)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Section */}
      <div className="flex items-center justify-end flex-column gap-2 flex-wrap md:flex-row space-y-4 md:space-y-0 p-4 bg-white border-b-2">
        {/* <label htmlFor="table-search" className="sr-only">Search</label> */}
        {/* {selectedNews.length > 0 && (
          <button onClick={() => openModal(selectedNews)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Download
          </button>
        )} */}
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
          <tr className='text-base'>
            {/* <th scope="col" className="p-4">
              <div className="flex items-center">
                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 " />
                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
              </div>
            </th> */}
            <th scope="col" className="px-4 py-3">
              Title
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              Status
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className='border-b-2 max-h-52 relative'>
          {!newsList.length && <tr className='flex justify-center  min-h-64    items-center'>
            <td colSpan={5}>

                <div className='absolute left-0 top-0 h-full w-full bg-white flex justify-center text-3xl items-center'>{error}</div>

            </td>
          </tr>}
          {newsList.map((item) => (
            <tr key={item.id} className="bg-white border-b  border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              {/* <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    checked={isChecked(item.id)}
                    onChange={() => toggleNewsSelection(item)}
                    id={`checkbox-table-search-${item.id}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor={`checkbox-table-search-${item.id}`} className="sr-only">checkbox</label>
                </div>
              </td> */}
              <th scope="row" className="flex items-center px-4 py-4  whitespace-nowrap ">
                <div className="">
                  <div className="text-base font-semibold">{item.name}</div>
                </div>
              </th>
              <td className="px-4 py-4">
                {item.description}
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className={`h-2.5 w-2.5 mr-2 rounded-full ${ColorCode[item.status]}`}></div>
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex space-x-2 justify-center">
                  <button
                    onClick={() => openModal([item])}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
                    title="Download"
                  >
                    <FaDownload className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handlePreviewPDF([item])}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-300 cursor-pointer"
                    title="Download"
                  >
                    <FaEye className="h-5 w-5" />
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
        <tfoot>
          <tr>
            <th scope="row" colSpan={4} className='text-end p-2'>
             <Pagination 
              pageSize={pageSize}
              onPageSize={setPageSize}
              totalPages={Math.round(pageinfo.total_record/pageSize)}
              currentPage={pageNumber}
              onPageChange={(e)=>setPageNumber(e)}/>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
};

export default Home;