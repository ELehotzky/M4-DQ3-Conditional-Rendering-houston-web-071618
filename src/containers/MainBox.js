import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPage: "profile"
    }
  }

  handleClick = (event) => {
    if (event.target.id === "profile") {
      this.setState( {
        showPage: "profile" })
    } else if (event.target.id === "photo") {
      this.setState( {
        showPage: "photo" })
      } else if (event.target.id === "cocktail") {
      this.setState( {
        showPage: "cocktail" })
      } else if (event.target.id === "pokemon") {
      this.setState( {
        showPage: "pokemon"
      })
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = () => {
      switch(this.state.showPage) {
        case "profile": return Profile();
          break;
        case "photo": return Photos();
          break;
        case "cocktail": return Cocktails();
          break;
        case "pokemon": return <Pokemon />
          break;
        default: return Profile();
      }
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
