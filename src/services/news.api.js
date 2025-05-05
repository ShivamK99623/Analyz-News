import { request } from "../config/helper"; // Only import what you need
export const uploadImage=(formData)=>{
    return request({
        url:'/upload',
        method:'POST',
        body:formData
    })
}
export const getReports=(pageNumber,pageSize)=>{
    return request({
        url:`/get-reports?page_number=${pageNumber}&page_size=${pageSize}`,
        method:'GET',
    })
}
export const getReportById=(id)=>{
    return request({
        url:`/get-report-by-id?report_id=${id}`,
        method:'GET',
    })
}