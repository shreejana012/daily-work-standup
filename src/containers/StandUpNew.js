import React, {Component} from 'react';

export default class StandUpNew extends Component {
    componentWillReciveProps(nextProps){
        debugger;
        console.log('component will recive props');        
    }
    render() {
        return (
            <div>this is new</div>
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
    