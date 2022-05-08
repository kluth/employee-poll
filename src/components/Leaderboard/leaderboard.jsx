import React from 'react'

const Leaderboard = () => {
  return (
    <div>
        {/* display a table of users with the number of answered questions and number of created questions each */}
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Answered questions</th>
                    <th scope="col">Created questions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>50</td>
                    <td>50</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>40</td>
                    <td>40</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>30</td>
                    <td>30</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Leaderboard