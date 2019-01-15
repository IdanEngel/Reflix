import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Movie extends Component {
    rentedTrue = () => {
        this.props.isRentedTrue(this.props.movie.id)
    }
    rentedFalse = () => {
        this.props.isRentedFalse(this.props.movie.id)
    }

    rentedSection = () => {
        if (this.props.movie.isRentedTrue) {
            return (
                <div>
                    <img src={this.props.movie.img} alt="" />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="rentedMovies">
                    <div>
                        <Link to={`/movies/${this.props.movie.id}`}><img src={this.props.movie.img} alt="" /></Link>
                        <button onClick={this.rentedTrue}>+</button>
                        <button onClick={this.rentedFalse}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;