import React, { Component } from 'react';

class MovideDeats extends Component {
    // movieDeatails = () => {
    //     this.props.movies.map(m => )
    // }

    render() {
        let movieMatch = this.props.match.params.id
        console.log(movieMatch)
        let movieDetails = this.props.movies[movieMatch]
        return (
            <div className="movieDetails">
                <div>{movieDetails.title}({movieDetails.year})</div>
                <img src={movieDetails.img}/>
                <div>{movieDetails.descrShort}</div>
            </div>
        );
    }
}

export default MovideDeats;