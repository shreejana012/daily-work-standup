import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const inputStyle ={
    width: '70%',
    height: '20%',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '10px'
}

export default class StandUpNew extends Component {
    render() {
        return (
            <div>
                <div><Link to="/standups">Standups</Link></div>
                <input style= {inputStyle} type= "text" placeholder= "What did you work on yesterday?"/><br />
                <input style= {inputStyle} type= "text" placeholder= "What are you planning to work on today?"/><br />
                <input style= {inputStyle} type= "text" placeholder= "Any impediments in your way?"/><br />
                <button>Submit</button>
                <button>Cancel</button>
            </div>            
        );
    }
}





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
    