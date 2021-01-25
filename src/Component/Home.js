import React, { Component } from 'react';
import axios from 'axios';
import ListBuku from './Part/ListBuku';
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

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        axios.get('http://localhost:3001/buku',axiosConfig)
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

                <Container style={{marginLeft:0, marginTop: 15 }}>
                    <Row>
                        <Col sm="12" md={{ size: 7, offset:20}}>
                            <ListBuku list={this.state.data} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
