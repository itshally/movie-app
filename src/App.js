import React from 'react'
import './App.css';
import './styles/style.css'
import {Nav, Header, MovieList, Footer} from './components/index'

const App = (props) => {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <MovieList/>
            <Footer/>
        </div>
    );
}

export default App;
