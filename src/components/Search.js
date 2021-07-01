import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('car');
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const search = async () => {
            var url = "https://en.wikipedia.org/w/api.php";
            const {data} = await axios.get(url, {
                params: {
                    action: "query",
                    format: "json",
                    list: "search",
                    origin: "*",
                    srsearch: term
                }
            })
            setResults(data.query.search);
        }
        if(term && !results.length){
            search()
        }else{
            const timeOutId = setTimeout(()=>{
                if(term){
                    search();
                }
            }, 1000)
            return ()=>{
                clearTimeout(timeOutId);
            }
        }
    },[term])

    const resnderedResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input"/>
                </div>
            </div>
            <div className="ui called list">
                {resnderedResult}
            </div>
        </div>
    )
}

export default Search;