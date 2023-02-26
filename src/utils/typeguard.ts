//typeguard
import { GithubUser } from "types";
// доказываем, что полученный пользователь действительно имеет тип GithubUser (провекра на наличие поля id)
export const isGitubUser = (user: any): user is GithubUser => "id" in user;
