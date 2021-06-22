import React from 'react';
import {connect} from 'react-redux';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import Meetings from '../providers/provider';
import {loadMeetingsAction, saveMeetingAction} from '../actions/calendar';

class Calendar extends React.Component {
	provider = new Meetings();

	componentDidMount() {
		this.provider.loadMeetingsFromApi()
			.then((meetings) => {
				this.props.loadMeetings(meetings)

			})
	}

	saveMeeting =(meeting) =>{
		this.provider.sendMeetingToApi(meeting).then((data) => this.props.addMeetingToState(data));
	}


	render() {
		return (
			<section>
				<CalendarList meetings={this.props.meetings}/>
				<CalendarForm saveMeeting={this.saveMeeting}/>
			</section>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		meetings: state.meetings
	};
};

const mapActionToProps = {
	loadMeetings: loadMeetingsAction,
	addMeetingToState: saveMeetingAction
};
export default connect(mapStateToProps,mapActionToProps)(Calendar);