import React, {Component} from 'react';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            itemList: [],
            displayMovies: false,
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
        
    }
    
    handleClick = () => {
        let newState = !this.state.displayMovies
        this.setState({
            displayMovies: newState
        });
    }

    render() {
        
        //console.log(this.state.itemList);
        if(this.state.displayMovies === true) {
            return(
                <div>
                    
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
                    <button type="button" className="btn btn-primary" onClick = {this.handleClick}>Load Movies</button>
                </>
            );
        }
    }
}

export default App;

