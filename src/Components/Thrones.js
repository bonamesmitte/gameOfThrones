import React, { Component } from 'react';
import axios from 'axios';

class Thrones extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = { 
    //         data: ''
    // }
    // }

 
    // callApi = () => {
    //     fetch('https://anapioficeandfire.com/api/characters/583')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //                 data: json.gender
    //             });
    //         });
    // }
    // componentDidMount(){
    //     this.callApi();
    // }
    // render(){
    //     return (
    //         <h3>
    //             {this.state.data? this.state.data: 'the data is coming!'}
    //         </h3>
    //     )
    // }

    state = {
        data: '',
    };
    
    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')
        .then(response => {
            console.log(response);
            this.setState({
                data: response.data});
        })
    }


    render(){
        return(
            <div>
                {this.state.data}
            </div>
        )
    }
}






// componentDidMount(){
//      axios.get('https://anapioficeandfire.com/api/characters/583')
//      .then(resopnse => {this.setState})
// }

export default Thrones;
