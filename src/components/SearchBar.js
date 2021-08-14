import './SearchBar.css';

const SearchBar = ({onChange}) => {
  
    return (
        <div className='searchBar' class='text-white'>
            <input onChange={onChange} type='text' placeholder='Search' className='searchInput'/>
        </div>
    );

}

export default SearchBar;
