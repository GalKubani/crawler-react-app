import React, { useState } from 'react'
import ScrapedPageData from './ScrapedPageData'

const ScrapedPage = ({ page }) => {
    const [wasNodeClicked, setWasNodeClicked] = useState(false)
    const onClick = (e) => {
        e.preventDefault()
        setWasNodeClicked(!wasNodeClicked)
    }
    return (
        <div onClick={onClick}>
            <div>{page.pageTitle}</div>
            {wasNodeClicked ? <ScrapedPageData page={page} /> : ""}
        </div>

    )

}


export default ScrapedPage