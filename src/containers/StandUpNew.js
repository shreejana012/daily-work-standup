import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {UpdateStandup} from '../actions/add_standup';
const inputStyle ={
    width: '70%',
    height: '20%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px'
}

class StandUpNew extends Component {
    constructor(props){
        super(props);
        this.state = {
          standups: {
            // user_id: '',
            day: '',
            work_done: '',
            work_planned: '',
            blocker: ''
          }
        };
      }
    handleSubmit = (event)=> {
        debugger;
        event.preventDefault();        
        this.props.dispatch(UpdateStandup(this.state.standups))
    }
    handleChange = (event) => {
            const  {name, value} = event.target;
            const {standups} = this.state;
            this.setState({
              standups: {
                ...standups,
                [name]: value
              }
            });
    }
    render() {
        const {standups} = this.state
        return (
            <div>
                <div><Link to="/standups">Standups</Link></div>
                <form onSubmit={this.handleSubmit}>
                    <input style= {inputStyle} name= "user_id" value = {standups.user_id} onChange= {this.handleChange} type= "text" placeholder= "user_id"/><br />
                    <input style= {inputStyle} name= "day" value = {standups.day} onChange= {this.handleChange} type= "text" placeholder= "Day"/><br />
                    <input style= {inputStyle} name= "work_done" value = {standups.work_done} onChange= {this.handleChange} type= "text" placeholder= "What did you work on yesterday?"/><br />
                    <input style= {inputStyle} name= "work_planned" value = {standups.work_planned} onChange= {this.handleChange} type= "text" placeholder= "What are you planning to work on today?"/><br />
                    <input style= {inputStyle} name= "blocker" value = {standups.blocker} onChange= {this.handleChange} type= "text" placeholder= "Any impediments in your way?"/><br />
                    <button type="submit">Submit</button>
                </form>
            </div>            
        );
    }
}

function mapStateToProps(state){
    return{
        standups: state.standups
    }
  }
export default connect(mapStateToProps)(StandUpNew);



//componentDidMount(){
    //     debugger;
    //     console.log('component did mount');        
    //     // this.props.fetchStandUp();
    // }
    // componentWillReciveProps(nextProps){
    //     debugger;
    //     console.log('component will recive props');        
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     debugger;
    //     console.log('component should update');
    //     return true;        
    // }
    // componentWillUpdate(nextProps, nextState){
    //     debugger;
    //     console.log('component will update');        
    // }
    // componentDidUpdate(prevProps, prevState){
    //     debugger;
    //     console.log('component did update');        
    // }
    // componentWillUnmount(){
    //     debugger;
    //     console.log('component will unmount');
    // }
    