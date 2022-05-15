import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";


const StyledTextField = styled(TextField)({
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root' : {
        fontSize: 16,
        color: 'var(--color-ink-lighter)'
    },
    '& label.Mui-focused': {
        color: 'green',
        fontSize: 16
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
        fontSize: 16,
    },
    '& .MuiOutlinedInput-root': {
        fontSize: 16,
        '& fieldset': {
            borderColor: 'lightgray',
            fontSize: 16
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

export default StyledTextField;