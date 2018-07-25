// Models

export type User = {
  _id: string;
  phone: string;
}

export type Query = {
  allUsers: User[];
}

export type Mutation = {
  upvotePost: User;
}
