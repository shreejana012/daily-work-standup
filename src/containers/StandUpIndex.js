// import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions/fetch_standup';
import { Link } from 'react-router-dom';

class StandUpIndex extends Component {
    componentDidMount(){
         this.props.fetchStandUp();
    }

    renderStandup(){   
         return (this.props.standups.map((list) => {
            return (
                <ul key={list.id}>
                    <li>
                        {list.day}<br />
                        <p>What did you work on yesterday?</p>
                        {list.work_done} <br />
                        <p>What are you planning to work on today?</p>
                        {list.work_planned}<br />
                        <p>Any impediments in your way?</p>
                        {list.blocker}
                    </li>
                </ul>
                );
            })
        )    
    }
    render() {
        
        return (
            <div>
                <div><Link to="/standups/new">Add Standup</Link></div>
                <h3>StandUps</h3>
                {typeof(this.props.standups) === 'undefined' ?
                <p>Loading</p> : <div>{this.renderStandup()}</div>}
            </div>
        );
    }
            }   
function mapStateToProps(state){
    const {standups} = state.IndexStandup;
    return { standups };
}
export default connect(mapStateToProps, {fetchStandUp} )(StandUpIndex);