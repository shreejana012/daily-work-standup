// import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStandUp} from '../actions';

class StandUpIndex extends Component {
    componentWillMount(){
         this.props.fetchStandUp();
    }
    
    renderStandup(){   
         return (this.props.standups.map((list) => {
            return (
                <li key= {list.id} >
                    {list.day} <br />
                    <p>What did you work on yesterday?</p>
                    {list.work_done} <br />
                    <p>What are you planning to work on today?</p>
                    {list.work_planned}<br />
                    <p>Any impediments in your way?</p>
                    {list.blocker}
                </li>
                );
            })
        )    
    }
    render() {
        
        return (
            <div>
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