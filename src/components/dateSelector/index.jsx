import { DatePicker } from "@mui/x-date-pickers";
import { DemoItem } from '@mui/x-date-pickers/internals/demo';

function DateSelector({labelItem, labelDate, className, value, handleChange }) {
  return (
    <DemoItem label={labelItem} className={className}>
      <DatePicker label={labelDate} value={value} onChange={handleChange}/>
    </DemoItem>
  
)
}

export default DateSelector