import { Component } from 'react';


import Search from './components/search/Search'

import Content from './components/content/Content';


import styles from './App.module.css'

const dataList=[{cityName:'chennai',cityTemp:'32 c',cityll:'1234.567383'},{cityName:'coambator',cityTemp:'32 c',cityll:'1234.567383'},{cityName:'selaiyur',cityTemp:'32 c',cityll:'1234.567383'},{cityName:'tambaram',cityTemp:'32 c',cityll:'1234.567383'},{cityName:'akarai',cityTemp:'32 c',cityll:'1234.567383'},{cityName:'sholinggalur',cityTemp:'32 c',cityll:'1234.567383'}]

class App extends Component {
  state={data:dataList}

  async componentDidMount(){
const apiData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=2eab9f7001f21e3b4f3ee13a6dfc9d88`)
const res=await apiData.json()
console.log(res)
  }
  
  onSearched=(inputVal)=>{
  //console.log(inputVal)
  const {data}=this.state;

  const newData=data.filter(obj=>
    obj.cityName===inputVal
  )
  this.setState({data:newData})
  }

  render(){
    const {data}=this.state;

    return <div className={styles.appMainCont}>
    <Search onSearched={this.onSearched}/>
    <ul className={styles.content}>
      {data.map(obj=>
        <Content obj={obj}/>
      )}
    </ul>
  </div>
  }
  
}

export default App
