import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend, index) => (
        <FriendListItem key={index} item={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
