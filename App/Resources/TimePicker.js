import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { colors } from '../Styles';

export default class TimePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date: undefined}
  }

	_changeDate = (value) => {
		this.setState({date: value});
		this.props._setTime(value);
	}

  render(){
    return (
      <DatePicker
        style={{width: '100%'}}
        date={this.state.date}
        mode="time"
        placeholder="select date"
        format="LT"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
				showIcon={false}
				duration={10}
				placeholder={this.props.placeholder}
        customStyles={{
          dateInput: {
            marginLeft: 0,
						borderWidth: 0, 
						alignItems: 'flex-start',
						paddingLeft: 5,
						},
					dateText: {
						fontSize: 17,
						color: colors.darkBlue,
					},
					placeholderText: {
						fontSize: 17,
						color: colors.darkBlue,
					},
					btnTextConfirm: {
						color: colors.darkBlue,
					},
        }}
				onDateChange={this._changeDate}
      />
    )
  }
}
