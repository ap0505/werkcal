import React from 'react';
// import DayDetails from './DayDetails.jsx';

class DayCell extends React.Component {
	constructor(props) {
		super(props);
		const shiftName = localStorage.getItem(props.dateKey);

		const bgKey = this.getBgKey(props.dateKey);
		const isShaded = localStorage.getItem(bgKey);

		this.state = {
			shiftName: shiftName || "",
			isShaded: !!isShaded
		};
	}

	componentDidUpdate() {
		const shiftName = localStorage.getItem(this.props.dateKey);

		if (this.state.shiftName !== shiftName) {
			this.setState({ shiftName });
		}

		const bgKey = this.getBgKey(this.props.dateKey);
		const isShaded = localStorage.getItem(bgKey);
		if (this.state.isShaded !== isShaded) {
			this.setState({ isShaded });
		}
	}

	getBgKey(dateKey) {
		return `${this.props.dateKey}-bg`;
	}

	render() {
		const { date, dateKey, onClick } = this.props;
		const { shiftName, isShaded } = this.state;

		return (
			<div className={`day-cell ${isShaded ? 'shaded': ''}`} onClick={() => onClick(dateKey)}>
        <div className="date">
          <div className="date-number"> { date } </div>
        	<div className="shift-name"> { shiftName } </div>
        </div>
			</div>
		);
	}
}

export default DayCell;
