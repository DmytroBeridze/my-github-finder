export interface User {
  login: string;
  avatar: string;
  url: string;
  html: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter: string | null;
  repos: number;
  gists: number;
  followers: number;
  following: number;
  createdAt: string;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
  url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}
export interface UserError {
  message: string;
  documentation_url: string;
  status: string;
}
