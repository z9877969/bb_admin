import { Box, FormGroup } from '@mui/material';
import { useBlog } from 'hooks';
import {
  About,
  AddBlogTooltip,
  BlogImage,
  Paragraph,
  PrimaryTitle,
  SecondaryTitle,
  TextList,
} from 'modules/blogs';

const OneBlogPage = () => {
  const [blog, setBlog] = useBlog();

  if (!blog) return null;

  return (
    <Box sx={{ pb: 3 }}>
      {blog.length > 0 && (
        <FormGroup sx={{ pr: 2, '& > :not(style)': { mb: 1 } }}>
          {blog.map(({ block, content, accent, id }) => {
            switch (block) {
              case 'primaryTitle':
                return (
                  <PrimaryTitle id={id} content={content} setBlog={setBlog} />
                );
              case 'about':
                return <About id={id} content={content} setBlog={setBlog} />;
              case 'paragraph':
                return (
                  <Paragraph
                    id={id}
                    content={content}
                    accent={accent}
                    setBlog={setBlog}
                  />
                );
              case 'list':
                return <TextList id={id} content={content} setBlog={setBlog} />;
              case 'secondaryTitle':
                return (
                  <SecondaryTitle id={id} content={content} setBlog={setBlog} />
                );
              case 'image':
                return (
                  <BlogImage id={id} content={content} setBlog={setBlog} />
                );
              default:
                return null;
            }
          })}
        </FormGroup>
      )}
      <AddBlogTooltip />
    </Box>
  );
};

export default OneBlogPage;

// const blocks = {
//   // primaryTitle: {
//   //   block: 'primaryTitle',
//   //   content: 'Яку вибрати зубну щітку?',
//   // },
//   // about: {
//   //   block: 'about',
//   //   content: ['Лікар: Поліна Притуляк', '12.10.2024'],
//   // },
//   // paragraph: {
//   //   block: 'paragraph',
//   //   content:
//   //     'У більшості випадків, пацієнти не звертають уваги на розмір головки щітки, кількість і товщину щетинок на ній — купують або красиві, або бюджетні, які не шкода міняти через два-три місяці. Зазвичай щітки поділяють на мануальні і електричні (ультразвукові / с обертовою голівкою). Крім цих типів, бувають щітки для пацієнтів з брекетами і інтердентальні.',
//   //   accent: ['Мануальні щітки,'],
//   // },
//   // list: {
//   //   block: 'list',
//   //   content: [
//   //     'дуже м’які;',
//   //     'м’які;',
//   //     'середньої жорсткості;',
//   //     'дуже жорсткі;',
//   //     'комбіновані (використовуються щетинки з різних матеріалів);',
//   //     'загальні (використовуються щетинки різної твердості).',
//   //   ],
//   // },
//   // image: {
//   //   block: 'image',
//   //   content:
//   //     'https://res.cloudinary.com/dmfu2r8kg/image/upload/v1712044423/blogs/blog_1.1-min_mjeyzi.png',
//   // },
//   // secondaryTitle: {
//   //   block: 'secondaryTitle',
//   //   content: 'Які щетинки повинні бути на щітці: натуральні або синтетичні?',
//   // },
// };
