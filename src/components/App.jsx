import React, {Component} from 'react';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            itemList: [],
            peopleList: [],
            displayMovies: false,
            displayPeople: false,
        };
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((res) => res.json())
        .then((res) => {
            let movieList = [];
            for(let i = 0; i < res.length; i++) {
                let movieDetails = {
                    name: res[i].title,
                    desc: res[i].description,
                }
                movieList.push(movieDetails);
            }
            //console.log(movieList);
            this.setState({
                itemList: movieList,
            });
            //console.log(this.state.itemList);
        });
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((res) => {
            let listOfPeople = [];
            for(let i = 0; i < res.length; i++) {
                let personDetails = {
                    name: res[i].name,
                    age: res[i].age,
                }
                listOfPeople.push(personDetails);
            }
            this.setState({
                peopleList: listOfPeople,
            });
            console.log(this.state.peopleList);
        });


        
    }
    
    handleMovieClick = () => {
        let newState = !this.state.displayMovies;
        this.setState({
            displayMovies: newState,
        });
    }

    handlePeopleClick = () => {
        let newState = !this.state.displayPeople;
        this.setState({
            displayPeople: newState,
        });
    }

    goBackPeople = () => {
        let newState = !this.state.displayPeople;
        this.setState({
            displayPeople: newState,
        });
    }

    goBackMovies = () => {
        let newState = !this.state.displayMovies;
        this.setState({
            displayMovies: newState,
        });
    }
    render() {
        
        //console.log(this.state.itemList);
        if(this.state.displayPeople === true) {
            return(
                <div>
                    <button type="button" className="btn btn-primary" onClick = {this.goBackPeople}>Go back</button>
                    {this.state.peopleList.map((item,index) => (
                        <div key={index} className="card" style={{width: 18 + "rem"}} >
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.age}</p>
                            </div>
                        </div>
                    ))}
                </div>
        
            );

        }


        if(this.state.displayMovies === true) {
            return(
                <div>
                    <button type="button" className="btn btn-primary" onClick = {this.goBackMovies}>Go back</button>
                    {this.state.itemList.map((item,index) => (
                        <div key={index} className="card" style={{width: 18 + "rem"}} >
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
        
            );
        } else {
            return(
                <>
                    <h3> API test</h3>
                    <button type="button" className="btn btn-primary" onClick = {this.handleMovieClick}>Load Movies</button>
                    <button type="button" className="btn btn-primary" onClick = {this.handlePeopleClick}>Load People</button>
                </>
            );
        }
    }
}

export default App;

