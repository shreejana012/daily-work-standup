import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showStandup} from '../actions/show_standup';

class StandUpShow extends Component {
    componentWillMount() {
        this.props.showStandup(this.props.match.params.id);
    }

    render() {
        const {standup} = this.props
        if(!standup){return(<p>hu</p>);}
        return (
            <div>
                {typeof(standup) === 'undefined' ?
                    <p>Loading</p> : 
                    <div>
                        {standup.day}<br />
                        {standup.work_done}<br />
                        {standup.work_planned}<br />
                        {standup.blocker}<br />
                    </div>}
            </div>
        );
    }
}
function mapStateToProps(state){
    const {standup} = state.ShowStandupReducer;
    return { standup };
}
export default connect(mapStateToProps,{showStandup})(StandUpShow);