import { Box } from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export function InlineCalendar() {
    const [date, setDate] = useState(new Date());
    return (
      <Box>
        <DatePicker selected={date} onChange={(date) => setDate(date)} inline />
      </Box>
    );
}