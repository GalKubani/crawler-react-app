import React from 'react'
import Axios from 'axios'



const scrapeURL=`http://localhost:4040/start-scarping`

const Home=()=>{
    const onSubmit=(e)=>{
        e.preventDefault()
        let url=e.target.children[1].value
        let maxDepth=e.target.children[2].value
        let maxPages=e.target.children[3].value
        Axios.post(scrapeURL,{
            url,
            maxDepth,
            maxPages,
            messageBody:url,
            QueueName:url
        }).then((res)=>{
            console.log(res)
        })
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <h3>Please enter these paramaters in order to scrape</h3>
            <input type="text" placeholder="URL" />
            <input type="number" placeholder="Max depth" />
            <input type="number" placeholder="Max total pages" />

            <button type="submit">Submit</button>
        </form>
    </div>
)
}

export default Home