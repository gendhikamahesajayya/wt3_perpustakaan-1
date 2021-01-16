import React from 'react';
import { Table, Button } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
// import Pagination from "../components/Pagination";
import Modals from './Modal';


class ListBuku extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            id:''
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {

        this.setState({
            modal: !this.state.modal,
        });
    }

    
    render() {
        const url = 'http://localhost:3000/'
        //console.log(this.props);
        const lists = this.props.list.map((e, i) => {
             return (
                 <tr key={i}>
                     <td>{i+1}</td>
                     <td>{e.kd_buku}</td>
                     <td>{e.judul}</td>
                     <td>{e.isbn}</td>
                     <td>{e.penulis}</td>
                     <td>{e.tahun}</td>
                     <td>
                        <Button color="success" size='xxl' href={url + 'edit/' + e.no} ><FontAwesome name='edit' />Edit</Button>{' '}
                        <Button color="danger" size='xxl' key={e.no} onClick={() => this.setState({ id: e.no }, this.toggle)} ><FontAwesome name='trash' />Hapus</Button> 
                    </td>
                 </tr>
             )
         })
        return (
            <div>
                <Modals
                    modal={this.state.modal}
                    toggle={this.toggle}
                    id={this.state.id}
                />
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>KD_Buku</th>
                            <th>Judul</th>
                            <th>ISBN</th>
                            <th>Penulis</th>
                            <th>Tahun</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { lists }
                    </tbody>
                </Table>
            </div>
        );
    }
}
        
export default ListBuku
