import React, { useState } from 'react'
import { startScraping,getDataFromRedis } from '../../server/db'
import ScrapedPage from '../scrape/ScrapedPage'




const Home=()=>{

    const [scrapedPages,setScrapedPages]=useState([])
    const onSubmit=(e)=>{
        setScrapedPages([])
        e.preventDefault()
        let url=e.target.children[1].value
        let maxDepth=e.target.children[2].value
        let maxPages=e.target.children[3].value
        let QueueName=(Math.floor(Math.random() * (1000 - 1 + 1) + 1))+""
        startScraping(url,maxDepth,maxPages,QueueName).then((res)=>{
            if(!res.data){
                alert("Invalid URL")
                clearInterval(pageFetcherInterval)
                return
            }
            clearInterval(pageFetcherInterval)
        })
        console.log("Started scraping, waiting for result")
        let pageFetcherInterval= setInterval(() => {
            getDataFromRedis(QueueName).then((result)=>{
                console.log(result.data)
                setScrapedPages(result.data)
            })
        }, 500);
    }

    return (
    <div className="home">
        <form onSubmit={onSubmit}>
            <h3>Please enter these paramaters in order to scrape</h3>
            <input type="text" placeholder="URL" />
            <input type="number" placeholder="Max depth" />
            <input type="number" placeholder="Max total pages" />
            <button type="submit">Submit</button>
        </form>
        {<ul>
            {scrapedPages.map((page)=>{
            return (<ScrapedPage key={page.pageUrl+page.pageDepth} page={page} />)
            })}
        </ul>}

    </div>
)
}

export default Home