import axios from "axios";

const primary_url = 'http://localhost:8000/info/'
const urls = {
    "createarticle" : primary_url+"createarticle/",
    "fetcharticle"  : primary_url+"fetcharticle/",
} 

export const apicall = async (entity="", data={}) =>{
    try{
    if (entity in urls){
        const res = await axios.post(urls[entity], data)
        return res.data
    }
    else{
        console.log("Not present")
    }}
    catch(error){console.log(error)}
}

export const fetcharticledata = async () =>{
    const res = await apicall('fetcharticle')
    setRowData(res)
  }