import { Box, Button } from '@mui/material';

// const options = [
//   {
//     text: 'Save',
//     variant: 'contained',
//     color: 'primary',
//     type: 'submit',
//     disabled: disabledSave,
//     onClick: null,
//   },
//   {
//     text: 'Del',
//     variant: 'contained',
//     color: 'error',
//     type: 'button',
//     disabled: false,
//     onClick: onDelete,
//   },
//   {
//     text: 'Cancel',
//     variant: 'outlined',
//     color: 'error',
//     type: 'button',
//     disabled: disabledCancel,
//     onClick: onCancel,
//   },
// ];
/* 
 {options.map(({ text, variant, color, type, disabled, onClick }) => (
        <Button
          key={text}
          variant={variant}
          color={color}
          type={type}
          sx={{ display: 'flex', width: '150px' }}
          disabled={disabled}
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
*/

const FormButtons = ({
  disabledSave = false,
  disabledCancel = false,
  onCancel,
  onDelete,
}) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ display: 'flex', width: '150px' }}
        disabled={disabledSave}
      >
        Save
      </Button>
      {onDelete && (
        <Button
          variant="contained"
          color="error"
          type="button"
          sx={{ display: 'flex', width: '150px' }}
          onClick={onDelete}
        >
          Delete
        </Button>
      )}
      <Button
        variant="outlined"
        color="error"
        type="button"
        sx={{ display: 'flex', width: '150px' }}
        disabled={disabledCancel}
        onClick={onCancel}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default FormButtons;
