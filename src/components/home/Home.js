import React, { useEffect, useState } from 'react'
import { startScraping, getDataFromRedis } from '../../server/db'
import ScrapedDepth from '../scrape/ScrapedDepth'




const Home = () => {
    const [scrapedTree, setScrapedTree] = useState({ _id: "0" })
    const [scrapedPages, setScrapedPages] = useState([])
    const [maxPages, setMaxPages] = useState(0)
    const onSubmit = (e) => {
        setScrapedPages([])
        e.preventDefault()
        let url = e.target.children[1].value
        let maxDepth = e.target.children[2].value
        let maxPagesReq = e.target.children[3].value
        setMaxPages(maxPagesReq)
        let QueueName = (Math.floor(Math.random() * (10000 - 1 + 1) + 1)) + ""
        startScraping(url, maxDepth, maxPagesReq, QueueName).then((res) => {
            if (!res.data) {
                alert("Invalid URL")
                return
            }
            setScrapedTree(res.data)
        })
        console.log("Started scraping, waiting for result")
    }

    useEffect(() => {

        const fetchData = () => {
            if (scrapedTree._id === "0") { return }
            console.log("fetching data from db")
            getDataFromRedis(scrapedTree._id).then((result) => {
                setScrapedPages(result.data)
                if (scrapedTree.totalPagesScraped < maxPages) {
                    setTimeout(fetchData, 4000)
                }
            })
        }

        setTimeout(fetchData, 2000)
    }, [scrapedTree])


    return (
        <div className="home">
            <form onSubmit={onSubmit}>
                <h3>Please enter these paramaters in order to scrape</h3>
                <input type="text" placeholder="URL" />
                <input type="number" placeholder="Max depth" />
                <input type="number" placeholder="Max total pages" />
                <button type="submit">Submit</button>
            </form>
            {<div>
                {scrapedPages.map((depth, index) => {

                    return (<div className="page-data">  <div>On depth- {index}</div>
                        <ScrapedDepth key={depth[0] + index} depth={depth} />
                    </div>
                    )
                })}
            </div>}

        </div>
    )
}

export default Home