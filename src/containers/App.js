import React,{PropTypes} from 'react';
import {Button} from 'react-bootstrap'
import Progress from "react-progress-2";
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('react-progress-2/main.css');

 class   App extends React.Component{

    constructor(props){
        super(props);
    }



    componentDidMount(){


        }

    render(){

        return (<div className="container">
                <Progress.Component/>
                    Redux is running
                      {this.props.children}
                </div>);
    }
}


function mapStateToProps(state) {

    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        routerActions: bindActionCreators(routerActions, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
