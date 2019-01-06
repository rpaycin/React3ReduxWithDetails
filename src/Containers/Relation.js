import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addRelation} from '../ReduxFiles/ActionCreators/ActionCreatorRelation';
import {store} from '../index';

class Relation extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="txtRelationName"></input>
                <button onClick={this.addRelationEvent}>Relation Ekle</button>

                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
    
    addRelationEvent = () => {
        const {txtRelationName}=this.refs;
        store.dispatch(addRelation(txtRelationName.value));
    };

    renderList = () => {
        if (this.props.relationProp == null)
            return;
        let liItems = [];

        this.props.relationProp.map(function (item, i) {
            liItems.push(<li key={i}>{item}</li>);
        });

        return liItems;
    }
}

function mapStateToProps(state) {
    return {
        relationProp:state.ReducerRelation
    };
}

export default connect(
    mapStateToProps,
)(Relation);