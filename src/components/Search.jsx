import { useState } from "react";
export default function Search({onSearching}){
    const [data, setData] = useState('');
    const handleSearch = e => {
        e.preventDefault();
        onSearching(data);
        setData('')
    }

    return (
        <form id="searchContainer" onSubmit={handleSearch}>
            <input value={data} onChange={e=>setData(e.target.value)} type="text" placeholder="Input the name of city"/>
        </form>
    );
}