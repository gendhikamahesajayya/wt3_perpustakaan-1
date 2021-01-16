import React from 'react'
import {
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,

} from 'reactstrap';
class FormEdit extends React.Component{
    render(){
        return(
            <Form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>KD Buku</Label>
                    <Col sm={10}>
                        <Input
                            name="kd_buku"
                            type="text"
                            placeholder="KD_Buku"
                            value={this.props.kd_buku}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Judul</Label>
                    <Col sm={10}>
                        <Input
                            name="judul"
                            type="text"
                            placeholder="Judul"
                            value={this.props.judul}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>ISBN</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="isbn"
                            placeholder="ISBN"
                            value={this.props.isbn}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Cover</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="cover"
                            placeholder="Cover"
                            value={this.props.cover}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Penulis</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="penulis"
                            placeholder="Penulis"
                            value={this.props.penulis}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Tahun</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="tahun"
                            placeholder="Tahun"
                            value={this.props.tahun}
                            onChange={this.props.InputChangeHandler}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color="primary">Submit</Button>
                    </Col>
                </FormGroup>
            </Form> 
            
        )
        
    }
}

export default FormEdit