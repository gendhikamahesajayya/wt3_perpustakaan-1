import React, { Component } from 'react';
import axios from 'axios';
import Buku from './Part/Buku';
import Navs from './Part/nav';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
// 
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }


    componentDidMount() {

        axios.get('http://localhost:3001/buku')
            .then((results) => {
                // const data = results.data.data;
                delete this.state.data;
                this.setState({
                    data : results.data.data
                });
            })
            
    }

    render() {
        //console.table(this.state.data);
        //console.log(this.state.data)
        return (
            <div>
                <Navs />

                <div className="result">
                    <Buku list={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Home;
