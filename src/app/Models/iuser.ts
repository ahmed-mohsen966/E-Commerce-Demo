export interface IUser {
  fullName : string;
  email : string;
  phone :string[];
  address: {
    city: string;
    state: string;
    postalCode: string;
  };
  password: string;
}
