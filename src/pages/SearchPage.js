import React from 'react'
import Response from '../response';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import googlelogo from '../googlelogo.png'
import './SearchPage.css';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';

function SearchPage() {

    const [{term}, dispatch] = useStateValue();
    
    //Live API Call
   const {data} = useGoogleSearch(term);

    //Mock API
    /* const data = Response */
    console.log(data);
    return (
        <div className='searchPage'>
            {/* Header */}
            <div className='searchPage__header'>
                <Link to='/'>
                    <img className='searchPage__logo' src={googlelogo} />
                </Link>

                <div className='searchPage__headerBody'>
                    <Search hideButton />

                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <DescriptionOutlinedIcon />
                                <Link to='/all'>News</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageOutlinedIcon />
                                <Link to='/all'>Images</Link>
                            </div>
                            <div className='searchPage__option'>
                                <LocalOfferOutlinedIcon />
                                <Link to='/all'>Shopping</Link>
                            </div>
                            <div className='searchPage__option'>
                                <RoomOutlinedIcon />
                                <Link to='/all'>Maps</Link>
                            </div>
                            <div className='searchPage__option'>
                                <MoreVertOutlinedIcon />
                                <Link to='/all'>More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Results */}
            {term && (
                <div className='searchPage__results'>
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results {`(${data?.searchInformation.formattedSearchTime} seconds)`}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a className='itemLink' href={item.link}>
                                {item.displayLink}
                            </a>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
