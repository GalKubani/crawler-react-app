import React from 'react'
import ScrapedPage from './ScrapedPage'

const ScrapedDepth = ({ depth }) => {
    return (

        <div className="depth">
            {depth.map((page) => {
                return (<span>

                    <ScrapedPage key={page.pageUrl} page={page} />
                </span>)
            })}
        </div>
    )
}


export default ScrapedDepth