import React from 'react'
import "./SearchResults.css"

export const SearchResults = ({results}) => {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <div key={id}>{result.title}</div>
            })
        }

        
    </div>
  )
} 
