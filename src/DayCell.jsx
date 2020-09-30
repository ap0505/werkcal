import React from 'react';
// import DayDetails from './DayDetails.jsx';

class DayCell extends React.Component {
	constructor(props) {
		super(props);
		const shiftName = localStorage.getItem(props.dateKey);

		this.state = {
			shiftName: shiftName || ""
		};
	}

	componentDidUpdate() {
		const shiftName = localStorage.getItem(this.props.dateKey);
		if (this.state.shiftName !== shiftName) {
			this.setState({ shiftName });
		}
	}

	render() {
		const { date, dateKey, onClick } = this.props;
		const { shiftName } = this.state;

		return (
			<div className="day-cell" onClick={() => onClick(dateKey)}>
        <div className="date">
          <div className="date-number"> { date } </div>
        	<div className="shift-name"> { shiftName } </div>
        </div>
			</div>
		);
	}
}

export default DayCell;
