import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions';
class StandUpIndex extends Component {
    componentDidMount(){
        this.props.fetchStandUp();
    }
    render() {
        return (
            <div>This is index</div>
        );
    }
}
export default connect(null, {fetchStandUp} )(StandUpIndex);