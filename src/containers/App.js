import React, { Component } from "react";
// import { robots } from "./robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) =>{
        console.log(event.target.value);
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filterdRobots = this.state.robots.filter( (robo)=>{
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filterdRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;