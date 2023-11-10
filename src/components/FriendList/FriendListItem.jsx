import css from "./FriendList.module.css";

const FriendListItem = ({ item }) => {
    const { avatar, name, isOnline, id } = item;
  
    return (
      <li key={id} className={css.item}>
        <span className={`${css.status} ${isOnline ? `${css.online}` : `${css.offline}`}`}></span>
        <img
          className={css.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{name}</p>
      </li>
    );
  };
  
export default FriendListItem;
  