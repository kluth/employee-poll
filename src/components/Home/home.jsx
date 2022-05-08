import React from 'react'

const Home = () => {
  return (
    <div>
        <h2>New questions</h2>
        {/* display a grid of card containing one question each */}
        <div className="card-grid">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">{new Date().toLocaleString()}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
        <h2>Done</h2>
        {/* display a grid of card containing one question each */}
        <div className="card-grid">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">{new Date().toLocaleString()}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">{new Date().toLocaleString()}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">{new Date().toLocaleString()}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-date">{new Date().toLocaleString()}</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home