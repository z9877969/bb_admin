import { Box, Button } from '@mui/material';

const AddBlogTooltip = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Button variant="outlined" color="success">
        Абзац
      </Button>
      <Button variant="outlined" color="success">
        Заголовок-1
      </Button>
      <Button variant="outlined" color="success">
        Заголовок-2
      </Button>
      <Button variant="outlined" color="success">
        Список
      </Button>
      <Button variant="outlined" color="success">
        Зображення
      </Button>
      <Button variant="outlined" color="success">
        Автор
      </Button>
    </Box>
  );
};

export default AddBlogTooltip;
