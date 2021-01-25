import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'reactstrap';
import Navs from './Part/nav'
import Form from './Part/FormAdd'
// import Redirect from 'react-router-dom'

class AddBuku extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            judul: '',
            isbn: '',
            penulis: '',
            tahun: '',
            cover: '',
            kategori_buku: '',
            ket: '',
            redirect: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.InputChangeHandler = this.InputChangeHandler.bind(this)
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
        const data = this.state
        delete data.redirect

        console.log(data);
        axios.post('http://localhost:3001/buku/save',data)
            .then((result) => {
                //console.log(result)
                //console.log(result.data)
                this.setState({redirect: true})
                window.location.href = '/Dashboard';
            })
            .catch(({ response }) => { 
                console.log(response.data);  
                console.log(response.status);  
                console.log(response.headers);  
            })
    }

    render(){
        // if (this.state.redirect) {
        //     return (<Redirect to='/' />)
        // }
        return(
            <div>
                <Navs/>
            
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2 >Tambah Buku</h2><br/>
                            <Form
                                judul={this.state.judul}
                                isbn={this.state.isbn}
                                cover={this.state.cover}
                                penulis={this.state.penulis}
                                tahun={this.state.tahun}
                                ket={this.state.ket}
                                kategori_buku={this.state.kategori_buku}
                                InputChangeHandler={this.InputChangeHandler}
                                handleSubmit={this.handleSubmit}
                            />
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AddBuku