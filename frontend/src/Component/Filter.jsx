import React from 'react'
import FilterContainer from './FilterContainer'

export default function Filter() {
    let data = ["All","Artificial Intelligence","Comedy","Gaming","Vlog","Beauty","Travel","Food","Fashion"];

  return (
    <div >
      <FilterContainer filter={data}/>
    </div>
  )
}