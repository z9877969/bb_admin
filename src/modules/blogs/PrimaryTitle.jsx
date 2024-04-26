import { TextField } from '@mui/material';
import { useCallback } from 'react';

const PrimaryTitle = ({ id, content, setBlog }) => {
  const handleChange = useCallback(
    (e) => {
      setBlog((p) =>
        p.map((el) => (el.id !== id ? el : { ...el, content: e.target.value }))
      );
    },
    [id, setBlog]
  );
  return (
    <TextField
      label="Заголовок 1го рівня"
      size="small"
      value={content}
      onChange={handleChange}
    />
  );
};

export default PrimaryTitle;
