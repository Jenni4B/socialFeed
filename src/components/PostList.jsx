import Post from './Post';
import PropTypes from 'prop-types'; 

function PostList({ posts, onLike, onComment }) {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Post 
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        author: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string.isRequired,
        }).isRequired,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
          })
        ).isRequired,
        timestamp: PropTypes.string.isRequired,
      })
    ).isRequired,
    onLike: PropTypes.func.isRequired,
    onComment: PropTypes.func.isRequired,
  };  

export default PostList;