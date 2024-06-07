import { Box, FormGroup, IconButton, TextField } from '@mui/material';
import IconPlus from '@mui/icons-material/ControlPoint';
import IconMinus from '@mui/icons-material/RemoveCircleOutline';
import { FieldsGroupWrapper } from 'shared/components';

const ImagesList = ({ images, setImages }) => {
  return (
    <FieldsGroupWrapper label={'Зображення'} sx={{ pl: 1 }}>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
            position: 'relative',
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={() => setImages([...images, ''])}
          >
            <IconPlus />
          </IconButton>
        </Box>
        <FormGroup
          sx={{
            '& > :not(style)': { mb: 1 },
          }}
        >
          {images.map((el, idx) => (
            <Box key={el} sx={{ display: 'flex', width: '100%' }}>
              <TextField
                variant="outlined"
                fullWidth
                label={`Зображення-${idx + 1}`}
                value={el}
                onChange={(e) => {
                  setImages(
                    images.map((el, i) => (i !== idx ? el : e.target.value))
                  );
                }}
              />
              <IconButton
                aria-label="delete"
                onClick={() => setImages(images.filter((_, i) => i !== idx))}
              >
                <IconMinus />
              </IconButton>
            </Box>
          ))}
        </FormGroup>
      </Box>
    </FieldsGroupWrapper>
  );
};

export default ImagesList;
