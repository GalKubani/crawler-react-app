import React from 'react'

const ScrapedPage=({page})=>{
    return(
        <li>
            <div>{page.pageTitle}</div> - 
             in depth {page.pageDepth}</li>
    )

}


export default ScrapedPage