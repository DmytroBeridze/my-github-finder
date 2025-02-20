import { GithubUser, User, UserError } from "../types/userTypes";

export const userGuards = (
  resp: UserError | GithubUser
): resp is GithubUser => {
  return "id" in resp;
};
