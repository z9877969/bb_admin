import { useEffect, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { FieldsGroupWrapper, FormButtons } from 'shared/components';
import { getContentApi, updateContentApi } from 'services/mainPageApi';
import { useLoadingWrapper } from 'hooks/useLoadingWrapper';

const MainPage = () => {
  const [content, setContent] = useState(null);
  const [isContentChanged, setIsContentChanged] = useState(false);
  const { aboutUrl, socialLinks } = content || {};

  const contentRef = useRef(null);

  const loadingWrapper = useLoadingWrapper();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContent((p) => ({ ...p, [name]: value }));
    !isContentChanged && setIsContentChanged(true);
  };

  const handleSocialLinksChange = (e) => {
    const { name, value } = e.target;
    setContent((p) => ({
      ...p,
      socialLinks: p.socialLinks.map((el) =>
        el.type === name ? { ...el, url: value } : el
      ),
    }));
    !isContentChanged && setIsContentChanged(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateContent = () => updateContentApi(content);
    loadingWrapper(updateContent);
  };

  useEffect(() => {
    const getContent = getContentApi().then((content) => {
      setContent(content);
      contentRef.current = localStorage.setItem(
        'content',
        JSON.stringify(content)
      );
    });

    loadingWrapper(getContent);
  }, [loadingWrapper]);

  if (!aboutUrl || !socialLinks) return null;

  return (
    <Box sx={{ p: 3 }} component={'form'} onSubmit={handleSubmit}>
      <TextField
        label="Про нас/Зображення"
        size="small"
        name="aboutUrl"
        value={aboutUrl}
        onChange={handleChange}
        fullWidth
        sx={{ mb: 2 }}
      />
      <FieldsGroupWrapper
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 1, mb: 2 }}
      >
        <TextField
          label="Instagram"
          size="small"
          name="instagram"
          value={socialLinks.find((el) => el.type === 'instagram')?.url || ''}
          onChange={handleSocialLinksChange}
          fullWidth
        />
        <TextField
          label="Facebook"
          size="small"
          name="facebook"
          value={socialLinks.find((el) => el.type === 'facebook')?.url || ''}
          onChange={handleSocialLinksChange}
          fullWidth
        />
        <TextField
          label="Telegram"
          size="small"
          name="telegram"
          value={socialLinks.find((el) => el.type === 'telegram')?.url || ''}
          onChange={handleSocialLinksChange}
          fullWidth
        />
        <TextField
          label="Viber"
          size="small"
          name="viber"
          value={socialLinks.find((el) => el.type === 'viber')?.url || ''}
          onChange={handleSocialLinksChange}
          fullWidth
        />
      </FieldsGroupWrapper>
      <FormButtons
        disabledSave={!isContentChanged}
        onCancel={() => {
          setIsContentChanged(false);
          setContent(JSON.parse(localStorage.getItem('content')));
        }}
      />
    </Box>
  );
};

export default MainPage;
