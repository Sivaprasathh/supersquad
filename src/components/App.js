import React from "react";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import Supersquats from "./Supersquats";
class App extends React.Component{
    render(){
        return (
            <div className = "App">
            <div className = "row">
                <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
          <Supersquats />
        </div>
        </div>
            </div>
        )
    }
}
export default App;