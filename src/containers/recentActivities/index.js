import React, { Component } from 'react';
import './recentActivities.css';


export default class RecentActivities extends Component {
  render() {
    return (
    	<div className="recent-activities-wrapper">
	    	<nav>
	    		<a>Recent activities</a>
	    	</nav>
	      	<div className="recent-activities">Recent activities</div>
	    </div>
    );
  }
};
