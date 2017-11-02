export class User {
  id = 0;
  email = '';
  password = '';
  firstname = '';
}

export const users: User[] = [
  {
    id: 1,
    firstname: 'pam1',
    email: "pamsp@sourcepad.com",
    password: "strings1"
  },
  {
    id: 2,
    firstname: 'pam2',
    email: "pam@sp.com",
    password: "strings1"
  },
  {
    id: 3,
    firstname: 'pam3',
    email: "a@b",
    password: "1"
  }
]

export class Products {
  id = 0;
  name = '';
  description = '';
  price = '';
}

export const products: Products[] = [
  {
    id: 1,
    name: 'Apple',
    description: "Medium sized - Fuji Apple",
    price: "100"
  }
]
