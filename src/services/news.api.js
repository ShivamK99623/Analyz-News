import { request } from "../config/helper"; // Only import what you need
export const uploadImage=(formData)=>{
    return request({
        url:'/upload',
        method:'POST',
        body:formData
    })
}