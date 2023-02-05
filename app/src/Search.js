import React from 'react'

export default function Search({getData}) {
    function handleInput(e) {
        if (e.key === "Enter") {
          getData(e.target.value);
         
        }
      }
  return (
<div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark mt-4 mb-2"
            placeholder="enter zip code"
            aria-label="Search"
            onKeyDown={(e) => handleInput(e)}
          />
        </div>
      </div>
      </div>
  )
}
