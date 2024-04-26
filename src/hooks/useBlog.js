import { selectBlogsList } from '@redux/blogs/blogsSelectors';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export const useBlog = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blogsList = useSelector(selectBlogsList);
  const blog = useMemo(() => {
    const listItem = blogsList.find((el) => el._id === blogId);
    return listItem ? listItem.items : null;
  }, [blogsList, blogId]);

  const [localBlog, setLocalBlog] = useState([]);

  useEffect(() => {
    !blog && navigate('/blogs');
    blog && setLocalBlog(blog);
    // eslint-disable-next-line
  }, [blog]);

  return [localBlog, setLocalBlog];
};
