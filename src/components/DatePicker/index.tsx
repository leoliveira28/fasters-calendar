import { Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerContext } from "../../contexts/DatePickerContext";
export function InlineCalendar() {
    const [date, setDate] = useState(new Date());
    const {setDateValue } = useContext(DatePickerContext)
    setDateValue(date)
    return (
      <Box>
        <DatePicker selected={date} onChange={(date) => setDate(date)} inline />
      </Box>
    );
}