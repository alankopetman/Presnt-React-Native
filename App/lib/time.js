export default formatTime = (time) => {
	time = time.split(':'); // convert to array

	// fetch
	var hours = Number(time[0]);
	var minutes = Number(time[1]);
	var seconds = Number(time[2]);

	// calculate
	var timeValue;

	if (hours > 0 && hours <= 12) {
		timeValue= "" + hours;
	} else if (hours > 12) {
		timeValue= "" + (hours - 12);
	} else if (hours == 0) {
		timeValue= "12";
	}
	 
	timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
	timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

	return timeValue;
}

