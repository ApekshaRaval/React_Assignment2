import React, { useEffect ,useState} from 'react'
import data from "./data.json"

const Filter = () => {
    const [value, setValue] = useState("");
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        const filteredData = originalData.filter((item) =>
            item.platform.toLowerCase().includes(value.toLowerCase())
        );
        const sortedData = filteredData.sort((a, b) =>
            a.platform.localeCompare(b.platform)
        );
        setSortedData(sortedData);
    }, [originalData, value]);

    return (
        <>
            <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            
            <div>
                {sortedData.map((data,i) => (
                    <div key={i}>{data.platform}</div>
                ))}

            </div>
        </>
    )
}

export default Filter
