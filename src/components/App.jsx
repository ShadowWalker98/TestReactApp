import React, {Component} from 'react';


class App extends Component {
    
    constructor() {
        super();
        this.state = {
            itemList: [],
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
    

    render() {
        //console.log(this.state.itemList);
        return(
            <div>
                <h3> API test</h3>
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
    }
}

export default App;

