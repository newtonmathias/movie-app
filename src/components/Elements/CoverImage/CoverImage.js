import React, { Component } from 'react'
import { API_KEY, API_URL,} from '../../../config';
import ThreeRowGrid from "../ThreeRowGrid/ThreeRowGrid";


class CoverImage extends Component {
    state = { 
        nowPlaying: []
    }

    componentDidMount() {
        this.nowPlaying();
        

    }

    nowPlaying = () => {
        const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-USpage-1`;
        fetch(endpoint)
        .then(result => result.json())
        .then(result => {this.setState({ nowPlaying: [...this.state.nowPlaying, ...result.results] })
        })
    }
  render() {

    return <div className="mdb-wrapper">
        <div><img src={this.props.image} alt="movie"/></div>
        <div>
            <h1>{this.props.title}</h1>
            <p>{this.props.text}</p>
        </div>
        <ThreeRowGrid>
            { this.state.nowPlaying.map((element) => {
                return <minThumb/>
            })}
        </ThreeRowGrid>
    </div>
  }
}

export default CoverImage
