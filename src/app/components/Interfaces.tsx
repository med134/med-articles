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
  job: string;
  status: string;
  username: string;
  userId: string;
  email: string;
  userImage: string;
  createdAt: Date;
}
