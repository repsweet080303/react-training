import UserInfo from './UserInfo';

function formatDate(props) {
  return props.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className='comment'>
      <UserInfo user={props.author} />
      <div className='comment__text'>{props.text}</div>
      <div className='comment__date'>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
