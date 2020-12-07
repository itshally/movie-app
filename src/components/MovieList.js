import React, { Component } from 'react'
import axios from 'axios'
import { Container, ListGroup} from 'react-bootstrap'
import { MovieItem } from './index'
import { css } from '@emotion/core'
import { PuffLoader } from 'react-spinners'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: rgb(17, 125, 187);
  padding: 5rem;
`;

export default class MovieList extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
            loading: true
        }
    }

    getTrendingMovies = () => {
        return setTimeout( () => {
                const key = process.env.REACT_APP_API_KEY
                axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`)
                        .then( response => this.setState({items: response.data.results}))
                        .catch( error => error)
            }, 500)
    }

    componentDidMount(){
        this.getTrendingMovies();
    }

    render() {
        if(this.state.items.length === 0){
            return (
                <Container>
                    <PuffLoader
                        css={override}
                        size={150}
                        color={"#123abc"}
                        loading={this.state.loading}
                    />
                </Container>
            )
        }
        else{
            return (
                <Container>
                    <ul className="list-unstyled">
                        {
                            this.state.items.map( item => {
                                const { backdrop_path } = item
                                const base_url = "https://image.tmdb.org/t/p/w500/";
                                return (
                                    <ListGroup.Item style={{backgroundImage: `url(${base_url+backdrop_path})`}}>
                                        <MovieItem key={item.id} item={item} />
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ul>
                </Container>
            )
        }
        
    }
}