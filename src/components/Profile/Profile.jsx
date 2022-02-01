import PropTypes from "prop-types";
import s from '../Profile/Profile.module.scss'


const Profile = ({
   username,
   tag,
   location,
   avatar,
   stats
 }) => (
   <div className={s["profile"]}>
      <div className={s["description"]}>
        <img
          src={avatar}
          alt="User avatar"
          className={s["avatar"]}
        />
        <p className={s["name"]}>{username}</p>
        <p className={s["tag"]}>{tag}</p>
        <p className={s["location"]}>{location}</p>
      </div>
 
      <ul className={s["stats"]}>
        <li>
          <span className={s["label"]}>Followers</span>
          <span className={s["quantity"]}>{stats.followers}</span>
        </li>
        <li>
          <span className={s["label"]}>Views</span>
          <span className={s["quantity"]}>{stats.views}</span>
        </li>
        <li>
          <span className={s["label"]}>Likes</span>
          <span className={s["quantity"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
 );
 
//  Profile.propTypes = {
//   filterOptions: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string,
//     }).isRequired
//   ).isRequired,
// };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

// ProductsListItem.defaultProps = {
//   price: "no price",
// };

 export default Profile;
