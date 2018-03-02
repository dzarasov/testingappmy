import React, { Component } from 'react';
import style from './styles';

class PageHeader extends Component {

	render() {
		return (
			<div>
			<header className="text-center">
				<div className="containerz">
			        <h1 style={style.zoneName}>Trucking Schools</h1>
			        <hr className="" />
			        <h2 style={style.zoneName}className="">Find Trucking School Next To Your Home</h2>
				</div>
			</header>
			</div>
		)
	}
}


export default PageHeader
