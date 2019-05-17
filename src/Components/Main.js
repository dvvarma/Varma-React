import React, {Component} from 'react';
import Title from './Title';
import List from './List';

class Main extends Component{
    render(){
        return <div>
            <Title title ={['My Tods']}/>
            <List tasks = {['Love React', 'Friends Fun']}/>
        </div> 
    }
}


export default Main