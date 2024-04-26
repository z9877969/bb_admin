import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormGroup, List, ListItem, Typography } from '@mui/material';
import { getBlogsList } from '@redux/blogs/blogsOperations';
import { selectBlogsList } from '@redux/blogs/blogsSelectors';

const BlogsListPage = () => {
  const dispatch = useDispatch();
  const blogsList = useSelector(selectBlogsList);

  useEffect(() => {
    dispatch(getBlogsList());
  }, [dispatch]);

  return (
    <>
      <Typography variant="h4" component={'h1'}>
        Список блогів
      </Typography>
      <List sx={{ '& > :not(style)': { m: 1, pr: 2 } }}>
        {blogsList.map((el) => (
          <ListItem key={el._id} sx={{ p: '0' }}>
            <Link
              to={'/blogs/' + el._id}
              style={{ display: 'block', width: '100%' }}
            >
              <FormGroup
                sx={{
                  borderTop: '1px solid #00000050',
                  borderBottom: '1px solid #00000050',
                  p: 1,
                  width: '100%',
                }}
              >
                <Typography variant="button" color={'InfoText'} component={'p'}>
                  {el.items[0].content}
                </Typography>
              </FormGroup>
              {/* <ReadOnlyTextFiald /> */}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BlogsListPage;
