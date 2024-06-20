import { Component } from 'react'

import styles from './Search.module.css'

class Search extends Component{
state={inputData:''}

onTyped=(event)=>{
   
       
    this.setState({inputData:event.target.value})
}
onEntered=(event)=>{
    const {inputData}=this.state;
        const {onSearched}=this.props;
    if(event.key==='Enter'){
        
        onSearched(inputData)
    }

}
    
    render(){
        const {inputData}=this.state
        //console.log(inputData)

        return <div className={styles.searchMainCont}>
        <input type='text' className={styles.searchCont} value={inputData} onChange={this.onTyped} onKeyDown={this.onEntered}/>
    </div>
    }

}

export default Search