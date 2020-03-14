import React, { Component } from 'react'
import '../css/about.css'
import logo from '../public/home/Synapse-logo-black.png';
//import text from '../public/home/text.png';

class Team extends Component {

	render() {
		return (
    		<div className="About">
        		<header className="About-header">
     				<img src={logo} className="App-logo" alt="logo" />
     			</header>

	      		<body>
	      			<div className="Description">
	      				<h1>Who is Synapse?</h1>
	      				<br></br>
	      				<p>Synapse connects its users, allowing them to send thoughts on the blockchain.</p>
	      				<br></br>
	      				<h3>Andrew Ngo</h3>
	      				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	      				<h3>David Rider</h3>
	      				<p>David is a software engineer, security nerd, and cryptocurrency enthusiast. He lives in South Korea and plays way too many video games. You can email him at riderda@oregonstate.edu</p>
	      				<h3>Reuben Youngblom</h3>
	      				<p>Reuben is a CS major and lives in CA. He likes blockchain and dogs and is a terrible cook. He can be reached at youngblr@oregonstate.edu</p>

	      			</div>
	      		</body>
	      	</div>
		);
	}

}

export default Team
