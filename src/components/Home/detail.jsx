import React from 'react'

const Detail = () => {
  return (
    <div>
        {/* create detailed page for a question */}
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-date">{new Date().toLocaleString()}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  )
}

export default Detail