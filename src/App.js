import React from "react";
import eyglasses from "./eyeglasses.svg";
import fetchBackgroundImageData from "./API.js";
import Header from "./components/header.jsx";
import TodoList from "./components/todoList.jsx";

class App extends React.Component {
  constructor() {
    super();    
    // Initialise state
    this.state = {
      backgroundImage: ""
    };   
  }

  // Use image data to update the state upon mount
  async componentDidMount() {  
    const backgroundImageData = await fetchBackgroundImageData();
    const selectedBackgroundImage = this.selectBackgroundImage(backgroundImageData);
    this.setState({ backgroundImage: selectedBackgroundImage }); // store the specified image within our image state
  };

  // Selects a random background image from the results
  selectBackgroundImage(backgroundImageData) {
    // Generate a random index which will be the chosen result
    const randomIndex = Math.floor(Math.random() * backgroundImageData.length);
    return backgroundImageData[randomIndex].urls.full;
  };

  // Add a new todo item
  addTodo() {
    // TODO
  }

  render() {
    return (
      <div className="App" style={{backgroundImage: `url(${this.state.backgroundImage})`}}>
        <div className="overlay">
          <Header eyeglasses={eyglasses} />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
