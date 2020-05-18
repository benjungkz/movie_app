import React from "react";

class Detail extends React.Component{
    constructor(props){
        super(props);

        const { location, history } = this.props;

        // Redirect
        if( location.state === undefined ){
            history.push("/");
        }
    }

    componentDidMount(){
       

    }
    
    render(){
        // Data
        const { location } = this.props;
        
        // return <span>{ location.state.title }</span>; 
        if( location.state ){
            return <span>{ location.state.title }</span>
        }else{
            return null;
        }
       
    }
}
export default Detail;