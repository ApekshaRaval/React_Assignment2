import React, { useState } from 'react'
import data from "./data.json"
import "./css/Game.css"

const Game = () => {

    data.shift();
    const [items, setItems] = useState(data)
    const [value, setValue] = useState("");
    const [filterData, setfilterData] = useState(data)
    const handleSearch = (e) => {
        e.preventDefault();
        var filteredData = items.filter(data => data.title.toLowerCase().includes(value.toLowerCase()))
        console.log(filteredData)
        setItems(filteredData)
    }
    const resetData = () => {
        setItems(data)
        console.log("in ", data)
    }
    const handleFilter = (e) => {
       
            let handler = e.target.value;
            if (handler !== "All") {
              const shortedData = filterData.filter((obj) => {
                return handler.includes(obj.platform);
              });
              setItems(shortedData);
            //   console.log(shortedData)
            } 
            else {
                setItems(filterData);
                // console.log(filterData)
              }
          
    }
 
    let uniquePlatfrom = []
    data.map((obj) => {
        if (!uniquePlatfrom.includes(obj.platform)) {
            uniquePlatfrom.push(obj.platform)
        }
    })
    // console.log(uniquePlatfrom)
    return (
        <>
            <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={resetData} />

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>

            <select className="form-select" onChange={handleFilter}>
            <option value='All' defaultChecked>All</option>
                {

                    uniquePlatfrom.map((data, i) => {
                        return (
                            <option key={i}>{data}</option>
                        )

                    })

                }

            </select>

            <div className='row'>
                {

                    items.map((data, i) => {
                        return (

                            <div key={i} className="card col-md-3 col-sm-12 p-0">
                                <ul className="list-group list-group-flush ">
                                    {/* <li className="list-group-item"><b>No  : </b> {i}</li> */}
                                    <li className="list-group-item"><b>Title  : </b>  {data.title}</li>
                                    <li className="list-group-item"> <b>Platfrom  : </b> {data.platform}</li>
                                    <li className="list-group-item"> <b>Score   : </b> {data.score}</li>
                                    <li className="list-group-item"><b>Genre  :</b> {data.genre}</li>
                                    <li className="list-group-item"><b>Editors_Choice  : </b> {data.editors_choice}</li>

                                </ul>
                            </div>


                        )
                    })

                }

            </div>
        </>

    )
}

export default Game
