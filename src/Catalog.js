import React, { Component } from 'react';
import Movie from './Movie';
// import font, { FontAwesomeIcon } from 'react-fontawesome'

class Catalog extends Component {

    checkRented = () => {
        this.props.movies.filter(f => f.isRented)
    }

    movieRender = () => {
        return this.searchBar().map(m => {
            return (
                <Movie movie={m} isRentedTrue={this.props.isRentedTrue}
                    isRentedFalse={this.props.isRentedFalse} />
            )
        })
    }
    rentedRender = () => {
        const movieComp = this.searchBar().filter(m => m.isRented === true)
        return movieComp.map(m => {
            return (
                <Movie movie={m} isRentedTrue={this.props.isRentedTrue}
                    isRentedFalse={this.props.isRentedFalse} />
            )
        })
    }

    updateSearchVal = (event) => {
        this.props.updateSearchVal(event.target.value)
    }

    searchBar = () => {
        let relevantMovie
        !this.props.search ?
            relevantMovie = this.props.movies :
            relevantMovie = this.props.movies.filter(f => this.props.searchArray.every(e => f.title.includes(e)))
        return relevantMovie
    }

    render() {
        return (
            <div>
                <div className="movieHeader">
                    <input type="text" placeholder="Search" value={this.props.search}
                        onChange={this.updateSearchVal} />
                    <div>Budget: {this.props.budget}$</div>
                </div><br />
                {this.rentedRender() ?
                    <div>Rented:</div> : null}
                {this.rentedRender()} <br />
                <div>Catalog:</div>
                <div className="images">
                    {this.movieRender()}
                </div>
            </div >
        );
    }
}



export default Catalog;