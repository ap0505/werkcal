import React from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import 'rc-calendar/assets/index.css';
import Select from 'rc-select';
import 'rc-select/assets/index.less';
import DayCell from './DayCell.jsx';
import DayDetails from './DayDetails.jsx';

class CustomCalendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showDetails: false,
			selectedDateKey: null
		};
	}

	getDateKey(moment) {
		return moment.month()+ "-" + moment.date() + "-" + moment.year();
	}

	setShiftName(e, name, dateKey) {
  	e.stopPropagation();

  	localStorage.setItem(dateKey, name);
  	this.setState({ showDetails: false });
  }

	showDayDetails(dateKey) {
		this.setState({
			showDetails: true,
			selectedDateKey: dateKey
		});
	}

	onClose(e) {
  	e.stopPropagation();
		this.setState({ showDetails: false, selectedDateKey: null });
	}

	onClear(e) {
  	e.stopPropagation();
		this.setState(prevState => {
			const { selectedDateKey } = prevState;
	  	localStorage.removeItem(selectedDateKey);
			return { selectedDateKey: null, showDetails: false };
		});
	}

	render() {
		const { showDetails, selectedDateKey } = this.state;

		return (
			<div className="custom-calendar">
	      <FullCalendar
	      	Select={Select}
	      	dateCellContentRender={(moment) =>
	          <DayCell date={moment.date()} dateKey={this.getDateKey(moment)}
	          	onClick={dateKey => this.showDayDetails(dateKey)} />
	        }
	    	/>
	    	{ showDetails && (
					<DayDetails
						onClickName={(e, name) => this.setShiftName(e, name, selectedDateKey)}
						onClose={(e) => this.onClose(e)}
						onClear={(e) => this.onClear(e)}
					/>
				) }
    	</div>
  	);
	}
}

export default CustomCalendar;
