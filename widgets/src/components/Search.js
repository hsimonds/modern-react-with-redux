import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        //alternative
        //(async  () => {
        //    await axios.gett('asdfsad');
        //})();
        const search = async  () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    action: 'query',
                    srsearch: term
                }
            });
            setResults(data.query.search);
        };
        
            
        const timeoutId = setTimeout(() => {
            if (term) {
                search();
            }
            else {
                setResults([]);
            }
        }, 1000);

        return () => {
            clearInterval(timeoutId);
        }
        


    }, [term]);
    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >Go

                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>

                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    >
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
}

export default Search;