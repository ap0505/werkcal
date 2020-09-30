import React from 'react';

class DayDetails extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayedList: this.fullList
		};
	}

	get fullList() {
		const item = localStorage.getItem("shifts-list");
		return item ? JSON.parse(item) : [];
	}

	handleKeyDown(event) {
		const shiftName = event.target.value;
		// if user hits 'Return', make new shift
		if (event.which === 13 && shiftName.length > 0) {
			const list = this.fullList;
			list.push(shiftName);
			localStorage.setItem("shifts-list", JSON.stringify(list));
			event.target.value = "";
			this.setState({ displayedList: list });
		} else {
			this.setState(prevState => {
				const displayedList = this.fullList.filter(name =>
					name.toLowerCase().startsWith(shiftName.toLowerCase()));
				return { displayedList };
			});
		}
	}

	handleClickOutside(e) {
		if (!this.node.contains(e.target)) {
			this.props.onClose(e);
		}
	}

	removeShift(e, shiftName) {
		e.stopPropagation();
		const newList = this.fullList.filter(name => name !== shiftName);
		localStorage.setItem("shifts-list", JSON.stringify(newList));
		this.setState({ displayedList: newList });
	}

	render() {
		const { displayedList } = this.state;
		const { onClickName, onClose, onClear } = this.props;

		return (
	    <div className="day-details-wrapper" onClick={(e) => this.handleClickOutside(e)}>
	     	<div ref={node => this.node = node} className="day-details">
		    	<div className="options-row">
		    		<div onClick={(e) => onClose(e)}>&#10060;</div>
		    		<button onClick={(e) => onClear(e)}>Clear</button>
		    	</div>
		    	<input autoFocus type="text" onKeyUp={this.handleKeyDown.bind(this)}/>
		    	<ul className="shift-list">
		    		{ displayedList.map(shift => (
		    			<li key={shift} onClick={(e) => onClickName(e, shift)}>
		    				<span>{shift}</span>
		    				<span className="remove" onClick={e => this.removeShift(e, shift)}>&#10060;</span>
	    				</li>
	    			)) }
		    	</ul>
		  	</div>
	    </div>
	  );
	}
}


export default DayDetails;
