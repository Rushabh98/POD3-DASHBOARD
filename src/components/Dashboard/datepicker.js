import React, { Fragment, useState } from "react";
import {DatePicker, KeyboardDatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";



function KeyboardDatePickerExample(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      {/* <KeyboardDatePicker
        clearable
        value={selectedDate}
        placeholder="10/10/2018"
        onChange={date => handleDateChange(date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      /> */}

      <KeyboardDatePicker
        placeholder="2020/10/10"
        value={selectedDate}
        onChange={date => handleDateChange(date)}
        format="yyyy/MM/dd"
      />
    </Fragment>
  );
}

export default KeyboardDatePickerExample;