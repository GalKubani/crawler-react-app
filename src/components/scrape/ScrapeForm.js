import React from 'react'

const ScrapeForm=()=>{
    

    const onSubmit=()=>{
        
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
)}

export default ScrapeForm