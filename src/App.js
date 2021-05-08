import React from "react";
import eyglasses from "./eyeglasses.svg";
import fetchBackgroundImageData from "./API/fetchBackgroundImage.js";
import Header from "./components/header.jsx";
import TodoList from "./components/todoList.jsx";
import Footer from "./components/footer.jsx";

class App extends React.Component {
	constructor() {
		super();

		// Initialise state
		this.state = {
			backgroundImageInfo: {
				name: "",
				location: "",
				description: "",
				link: "",
			},
			backgroundImage: "",
		};
	}

	// Use background image data to update the state upon mount
	async componentDidMount() {
		// const backgroundImageResults = await fetchBackgroundImageData();
		// const backgroundImageResult = this.selectBackgroundImage(backgroundImageResults);
		// const backgroundImage = backgroundImageResult.urls.full;
		// this.handleBackgroundImageInfo(backgroundImageResult);
		// this.setState({ backgroundImage: backgroundImage });
	}

	// Selects a random background image data object from the results
	selectBackgroundImage(backgroundImageResults) {
		// Generate a random index which will be the chosen result
		const randomIndex = Math.floor(
			Math.random() * backgroundImageResults.length
		);
		return backgroundImageResults[randomIndex];
	}

	// Returns background image location and photographers full name
	handleBackgroundImageInfo(backgroundImageResult) {
		let backgroundImageInfo = { ...this.state.backgroundImageInfo };

		// Modify our cloned state object
		backgroundImageInfo = {
			name: backgroundImageResult.user.name,
			location: backgroundImageResult.user.location,
			description: backgroundImageResult.alt_description,
			link: backgroundImageResult.urls.full,
		};

		this.setState({ backgroundImageInfo: backgroundImageInfo });
	}

	render() {
		const { backgroundImageInfo, backgroundImage } = this.state;

		return (
			<div
				className="App"
				style={{ backgroundImage: `url(${backgroundImage})` }}
			>
				<div className="overlay">
					<Header eyeglasses={eyglasses} />
					<TodoList />
					<Footer backgroundImageInfo={backgroundImageInfo} />
				</div>
			</div>
		);
	}
}

export default App;
