import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE,  POSTER_SIZE } from '../../config';
import CoverImage from '../Elements/CoverImage/CoverImage';
import SearchBar from '../Elements/SearchBar/SearchBar';
import FourColGrid from '../Elements/FourColGrid/FourColGrid';
import MovieThumb from '../Elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../Elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../Elements/Spinner/Spinner';
import ThreeRowGrid from '../Elements/ThreeRowGrid/ThreeRowGrid'
import './Home.css'

class Home extends Component {
    state = {
        movies: [],
        coverImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    componentDidMount() {
        this.setState({ loading: true });
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-USpage-1`;
        this.fetchItems(endpoint);
        this.nowPlaying();
        
        
    }

    nowPlaying = () => {
        const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-USpage-1`;
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {console.log(result);
        })
    }

    searchItems = (searchTerm) => {
        let endpoint = '';
        this.setState({
            movies: [],
            loading:true,
            searchTerm: ''
        })
        
        if (searchTerm === '') {
            endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        }else{
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    } 
    
    fetchItems = (endpoint) => {
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                movies: [...this.state.movies, ...result.results],
                coverImage: this.state.coverImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
            })
        })
    }

  render() {
    return (
      <div>
        {this.state.coverImage ? 
            <CoverImage 
                title={this.state.coverImage.original_title}
                text={this.state.coverImage.overview}
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.coverImage.backdrop_path}`}
            /> :
                null }
                <SearchBar callback={this.searchItems}/>

     <div className="rmdb-home-grid">
                <FourColGrid loading={this.state.loading} >
                    {this.state.movies.map( (element, i) => {
                        return <MovieThumb 
                        key={i}
                        clickable={true}
                        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                    />
                    })}
                </FourColGrid>
     </div>
                
      </div>
      
    )
  }
}

export default Home
