import { UserStat } from "components/UserStat";
import { LocalGithubUser } from "types";
import styles from "./UserCard.module.scss";

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      followers={props.followers}
      following={props.following}
      repos={props.repos}
    />
  </div>
);
