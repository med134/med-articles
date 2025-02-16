export interface User {
  name: string;
  email: string;
  image: string;
}
export interface Category {
  _id: string;
  label: string;
  value: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatar: {
    url: string;
  };
  job: string;
  address: string;
  about: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  youtube_link: string;
  github_link: string;
  youtub_link: string;
  portfolio: string;
  linkedin_link: string;
  instagram_link: string;
}
export interface Blog {
  id: string;
  title: string;
  tags: string;
  image: {
    url: string;
  };
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
  isPublish: boolean;
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
