import { useCallback } from 'react';
import { List, ListItem } from '@mui/material';
import { FieldsGroupWrapper, Textarea } from 'shared/components';

const Paragraph = ({ id, content, accent, setBlog }) => {
  const handleChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      setBlog((p) =>
        p.map((el) =>
          el.id !== id
            ? el
            : name === 'content'
              ? {
                  ...el,
                  content: value,
                }
              : name === 'accent'
                ? {
                    ...el,
                    accent: value.split('\n'),
                  }
                : el
        )
      );
    },
    [setBlog, id]
  );
  return (
    <FieldsGroupWrapper label={'Paragraph'}>
      <List>
        <ListItem>
          <FieldsGroupWrapper
            label="Текст"
            sx={{ width: '100%', border: 'none' }}
          >
            <Textarea
              name="content"
              value={content}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
          </FieldsGroupWrapper>
        </ListItem>
        <ListItem>
          <FieldsGroupWrapper
            label="Акцент"
            sx={{ width: '100%', border: 'none' }}
          >
            <Textarea
              name="accent"
              value={accent?.join('\n') || ''}
              onChange={handleChange}
              sx={{ width: '100%' }}
            />
          </FieldsGroupWrapper>
        </ListItem>
      </List>
    </FieldsGroupWrapper>
  );
};

export default Paragraph;
