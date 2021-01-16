import React from 'react'
import axios from 'axios'
import {
    Container,
    Col,
    Row,
} from 'reactstrap';
import Forms from './Part/FormEdit'
import Navs from './Part/nav'

class EditBuku extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            data: [],
            kd_buku:'',
            judul:'',
            isbn:'',
            cover:'',
            penulis:'',
            tahun:'',
            ket:'',
            kategori:'',
            no: this.props.match.params.no,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
    }
    componentDidMount(){
        axios.get('http://localhost:3001/buku/' + this.state.kd_buku)
        .then((results) => {
            const data = results.data.data
            this.setState({
                kd_buku: data.kd_buku,
                judul: data.judul,
                isbn: data.isbn,
                cover: data.cover,
                penulis: data.penulis,
                tahun: data.tahun,
                ket: data.ket,
                kategori: data.kategori,
            })
        })
    }
    
    InputChangeHandler(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const id = this.state.id
        const data = this.state
        // delete data.id
        console.log(data)
        axios.put('http://localhost:3001/buku/edit', data)
            .then((result) => {
                    console.log(result)
                    this.setState({ redirect: true })
                    window.location.href = '/';
                })
    }
        
    render() {
        // console.log(this.state)
        return (

            <div>
                <Navs />

                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Edit Buku</h2><br />
                            <Forms
                                props = {this.state.data}
                                kd_buku={this.state.kd_buku}
                                judul={this.state.judul}
                                isbn={this.state.isbn}
                                cover={this.state.cover}
                                kategori={this.state.kategori}
                                penulis={this.state.penulis}
                                tahun={this.state.tahun}
                                handleSubmit={this.handleSubmit}
                            />

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EditBuku