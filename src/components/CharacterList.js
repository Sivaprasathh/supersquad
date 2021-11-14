import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {addCharacterById} from "../actions";
import "../styles/index.css"
class CharacterList extends React.Component{
    render(){
  // console.log("Props:",this.props);
        return (
            <div>
                <ul className="list-group">
                <h4>All Characters</h4>
                {this.props.characters.map((character)=>{
                    return <li key={character.id} className="list-group-item">
                    <div className="list-item">{character.name}</div>
                    <div
                      className="list-item right-button"
                      onClick={() => this.props.addCharacterById(character.id)}
                    >
                      +
                    </div>
                  </li>
                })}

                </ul>
            </div>
        )
    }
}
function mapStateToProps(state){
   
    return {
        characters:state.characterss
    }
}
function mapDispatchToProps(dispatch){
  
   return bindActionCreators({ addCharacterById } ,dispatch);
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);