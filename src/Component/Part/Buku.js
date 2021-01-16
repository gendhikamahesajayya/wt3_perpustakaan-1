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
        //console.log(this.props);
        const lists = this.props.list.map((e, i) => {
             return (
                <div className="result">
                <div class="resultCard" >
                <figure className="image is-48x48">
                  <img
                    src={e.cover}
                    alt= {e.judul}
                  />
                </figure>
                <h4 class="bolder">{e.judul}</h4>
                <span><b>Year: </b>{e.tahun}</span>
              </div>
              </div>
             )
         })
        return (
            <div>
                { lists }
            </div>
        );
    }
}
        
export default ListBuku