import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeName,changeSurname} from '../ReduxFiles/ActionCreators/ActionCreatorPerson';
import {store} from '../index';

class Person extends Component {
    constructor(props) {
        super(props);        
    }
    
    render() {
        return (
            <div>
                <input type="text" ref="txtName"></input>
                <button onClick={this.changeNameEvent}>Adını Değiştir</button>

                <input type="text" ref="txtSurname"></input>
                <button onClick={this.changeSurnameEvent}>Soyadını Değiştir</button>

                <h3>{this.props.nameProp}</h3>
                <h3>{this.props.surnameProp}</h3>
            </div>
        );
    }

    changeNameEvent = () => {
        const {txtName}=this.refs;
        store.dispatch(changeName(txtName.value));
    };

    changeSurnameEvent = () => {
        const {txtSurname}=this.refs;
        store.dispatch(changeSurname(txtSurname.value));
    };
}
 
function mapStateToProps(state) {
    return {
        nameProp:state.ReducerPerson.name,
        surnameProp:state.ReducerPerson.surname,
    };
}

export default connect(
    mapStateToProps,
)(Person);