export interface Query {
  _id: String;
  name: String;
  timestampDateAndTime: String;
  timestamp: Number;
  message: String;
  role: String;
}

export interface QueryUser {
  _id: String;
  userId: String;
  name: String;
  timestampDateAndTime: String;
  timestamp: Number;
  query: Query[];
}
