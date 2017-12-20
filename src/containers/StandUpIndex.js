import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions';

class StandUpIndex extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchStandUp();
    }
    
    renderStandup(){      
        return (this.props.standups.map((list) => {
            return (
                <li key={list.id}>
                    {list.day}
                </li>
                );
            })
        )    
    }
    render() {
        if(typeof(this.props.standups !== 'undefined')) { 
            <p> Loading... </p>
        }
        return (
            <div>
                <h3>StandUps</h3>
                <ul>
                    {this.props.standups.standups.map((list) => { 
                        <li> {list.day} </li> 
                    })}
                </ul>
            </div>
        );
    }
            }   
function mapStateToProps(state){
    debugger;
    const {standups} = state;
    return { standups };
}
export default connect(mapStateToProps, {fetchStandUp} )(StandUpIndex);