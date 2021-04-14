//import React from 'react';
import { Button } from 'react-bootstrap'
import Particles from "react-tsparticles";
//import AllIssuesPage from './components/AllIssuesPage'
//import AddIssuePage from './components/AddIssuePage'
//import * as React from "react";
import React, { Suspense} from "react";
import EditIssue from './components/EditIssuePage';
import DarkModeToggle from "react-dark-mode-toggle";
//import IssueDetailPage from './components/IssueDetailPage'
//import SignInPage from './Users/SignInPage';
//import SignUp from './Users/SignUpPage';
import { NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import backgroundH from './cool-background.png';

// ES6 or ES2015

class Links extends React.Component {
	render() {
		return (
			<nav>&nbsp;
				<NavLink exact activeClassName="active" to="/">About</NavLink> &nbsp;
				<NavLink activeClassName="active" to="/issues">Issues</NavLink> &nbsp;
				<NavLink activeClassName="active" to="/SignIn">Sign In</NavLink> &nbsp;
				<NavLink activeClassName="active" to="/SignUp">Sign Up</NavLink> &nbsp;
			</nav>
		);
	}
}
	

  
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.particlesInit = this.particlesInit.bind(this);
    	this.particlesLoaded = this.particlesLoaded.bind(this);
	}
	particlesInit(main) {
		console.log(main);
	
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	}
	particlesLoaded(container) {
		console.log(container);
	}
	
	render() {
		//const [isDarkMode, setIsDarkMode] = useState(() => false);
		// style={{
		// 	backgroundImage: "url(" + backgroundH + ")",
		// 	backgroundSize: "cover",
		// 	height: "100vh",
		//   }}
		const AllIssuesPage = React.lazy(()=>import('./components/AllIssuesPage'));
		const AddIssuePage = React.lazy(()=>import('./components/AddIssuePage'));
		const IssueDetailPage = React.lazy(()=>import('./components/IssueDetailPage'));
		const SignInPage =  React.lazy(()=>import('./Users/SignInPage'));
		const SignUp = React.lazy(()=>import('./Users/SignUpPage'));
		return (
			
				<Router>
					<div
			          style={{
        			    position: "relative",
        			    top: 0,
        			    left: 0,
    			        width: "100%",
    			        height: "100%"
    		        }}>
					<Particles
					width='100vw'
					height= '100vh'
		    	    id="tsparticles"
					init={this.particlesInit}
					loaded={this.particlesLoaded}
					options={{
					  background: {
						color: {
						  value: "#FFFF99",
						},
					  },
					  fpsLimit: 60,
					  interactivity: {
						detectsOn: "window",
						events: {
						  onClick: {
							enable: false,
							mode: "push",
						  },
						  onHover: {
							enable: true,
							mode: "repulse",
						  },
						  resize: true,
						},
						modes: {
						  bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						  },
						  push: {
							quantity: 4,
						  },
						  repulse: {
							distance: 200,
							duration: 0.4,
						  },
						},
					  },
					  particles: {
						color: {
						  value: "#008b8b",
						  opacity : 0.9
						},
						links: {
						  color: "#008b8b",
						  distance: 100,
						  enable: true,
						  opacity: 0.9,
						  width: 1,
						},
						collisions: {
						  enable: true,
						},
						move: {
						  direction: "none",
						  enable: true,
						  outMode: "bounce",
						  random: false,
						  speed: 3,
						  straight: false,
						},
						number: {
						  density: {
							enable: true,
							value_area: 800,
						  },
						  value: 80,
						},
						opacity: {
						  value: 0.5,
						},
						shape: {
						  type: "circle",
						},
						size: {
						  random: true,
						  value: 5,
						},
					  },
					  detectRetina: true,
					}}
		    	  />
				  <div
			          style={{
        			    position: "absolute",
        			    top: 10,
        			    left: 0,
    			        width: "100%",
    			        height: "100%"
    		        }}>
					<Links />
					<Switch>
						<Suspense fallback={<h1>Loading...</h1>}>
						<Route path="/issues" component={AllIssuesPage} />
						<Route exact path="/" render={() => <h2>About: This application is used to track the status of issues raised</h2>} />
						<Route path="/addIssue" component={AddIssuePage} />
						<Route path="/SignIn" component={SignInPage} />
						<Route path="/SignUp" component={SignUp} />
						<Route path="/editIssue/:id" component={EditIssue} />
						<Route path="/issuedetail/:description" component={IssueDetailPage} />
						</Suspense>
					</Switch>
					</div></div>
				</Router>
				
				
			
			
		);
	}
}
