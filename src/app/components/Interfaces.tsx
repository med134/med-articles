export interface User {
  name: string;
  email: string;
  image: string;
}

export interface UserInfo {
  _id: string;
  name: string;
  email: string;
  imageUrl: string;
  job: string;
  homeAddress: string;
  about: string;
  youtubeUrl: string;
  githubUrl: string;
  twitterUrl: string;
  isAdmin: string;
  instagramUrl: string;
  dribbleUrl: string;
  linkedInUrl: string;
  createdAt: Date;
}
export interface Blog {
  _id: string;
  title: string;
  tags: string;
  image: string;
  description: string;
  slug: string;
  category: string;
  content: string;
  job: string;
  status: string;
  username: string;
  userId: string;
  email: string;
  userImage: string;
  createdAt: Date;
}
export interface Template {
  _id: string;
  title: string;
  tags: string;
  image: string;
  description: string;
  slug: string;
  category: string;
  link: string;
  job: string;
  status: string;
  username: string;
  code: string;
  createdAt: Date;
}

export interface Comment {
  _id: string;
  comment: string;
  blogId: string;
  imageUser: string;
  username: string;
  createdAt: Date;
}
