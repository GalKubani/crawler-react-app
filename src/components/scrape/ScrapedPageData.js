import React from 'react'

const ScrapedPageData = ({ page }) => {

    return (
        <div>
            Page URL- <div>{page.pageUrl}</div>
            children:<br></br>
            {page.pageLinks.map((link) =>
                <div key={link + page.pageTitle}>{link}</div>
            )}
        </div >

    )

}


export default ScrapedPageData