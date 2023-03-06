import React, { useState } from 'react'


const NavBar = (props) => {
    const [value, setValue] = useState("");
    console.log(props.data);
    const handleSearch=(term)=>{
    //  e.preventDefault();
     console.log("search" ,term);

}
    return (
        <nav className="navbar navbar-light bg-light ">
            <a className="navbar-brand">GAME STORE</a>
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button  className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>handleSearch(value)}>Search</button>
                <button className="btn btn-outline-success my-2 my-sm-0" type="reset" onClick={(e)=>setValue("")}>Reset</button>
            </form>

        </nav>
    )
}

export default NavBar
