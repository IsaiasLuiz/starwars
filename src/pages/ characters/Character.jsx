import React, {Component} from 'react'
import Loading from '../../components/loading/Loading'
import API from '../../services/API'
import './Character.css'

export default class Character extends Component{
  state={
    loading: false,
    character: {}
  }
  componentDidMount = () =>{
    this.setState({loading: true})
    const {pathname} = this.props.location
    const id = pathname.split("").pop()
    API.get(`/people/${id}`).then((response)=>{
      const {data} = response
      this.setState({character: data})
    }).catch(()=>{
      console.log("Error")
    }).finally(()=>{
      this.setState({loading: false})
    })
  }
  render(){
    console.log(this.state.character)
    const character = this.state.character
    return(
      <div className="character">
        <Loading active={this.state.loading}/>
        <ul className="physical-data">
          <li>Name: {character.name}</li>
          <li>Height: {character.height}</li>  
          <li>Mass: {character.mass}</li>        
          <li>Eye Color: {character.eye_color}</li>
          <li>Gender: {character.gender}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin Color: {character.skin_color}</li>
        </ul>
      </div>
    )
  }
}