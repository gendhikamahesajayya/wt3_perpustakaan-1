import React from 'react'
import axios from 'axios'
import { 
    Container,
    Col, 
    Row,
} from 'reactstrap';
import Navs from './Part/nav'
import Forms from './Part/Form'
// import Redirect from 'react-router-dom'

class AddBuku extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nama: '',
            jurusan: '',
            kelas: '',
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
        axios.post('http://localhost:3001/buku/add',data)
            .then((result) => {
                console.log(result)
                this.setState({redirect: true})
                window.location.href = '/';
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
                            <Forms
                                kd_buku={this.InputChangeHandler}
                                judul={this.InputChangeHandler}
                                isbn={this.InputChangeHandler}
                                cover={this.InputChangeHandler}
                                penulis={this.InputChangeHandler}
                                tahun={this.InputChangeHandler}
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