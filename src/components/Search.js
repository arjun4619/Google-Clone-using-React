import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hideButton = false }) {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('')
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        console.log('You Hit the enter key', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    }

    return (
        <form className='search'>
            {/* Input */}
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                <MicIcon className='mic__icon'/>
            </div>
            {/* Search Button */}

            {!hideButton ? (
                <div className='search__buttons'>
                    
                <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
                
                </div>
            ) : (
                <div className='search__buttons'>
                
                <Button className='searchbtn__hidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
                <Button className='searchbtn__hidden' variant='outlined'>I'm Feeling Lucky</Button>
                
                </div>
            )}
            
        </form>
    )
}

export default Search
