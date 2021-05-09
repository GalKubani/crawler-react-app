import Axios from 'axios'



const scrapeURL=`http://localhost:4040`
export const startScraping = async(url,maxDepth,maxPages,QueueName)=>{
    try{
        console.log("scraping")
        let page=await Axios.post(scrapeURL+`/start-scarping`,{
            url,
            maxDepth,
            maxPages,
            messageBody:url,
            QueueName
        })
        return page
    }catch(err){
        console.log(err)
    }

}
export const getDataFromRedis=async(QueueName)=>{
    try{
        let pages=await Axios.get(scrapeURL+`/get-pages?key=`+QueueName)
        return pages
    }catch(err){
        console.log(err)
    }
}