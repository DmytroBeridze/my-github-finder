import { GithubUser } from "../types/userTypes";

export const reFormattingUser = (user: GithubUser) => {
  return {
    login: user.login,
    avatar: user.avatar_url,
    url: user.url,
    html: user.html_url,
    name: user.name,
    company: user.company,
    blog: user.blog,
    location: user.location,
    email: user.email,
    bio: user.bio,
    twitter: user.twitter_username,
    repos: user.public_repos,
    gists: user.public_gists,
    followers: user.followers,
    following: user.following,
    createdAt: user.created_at,
  };
};
