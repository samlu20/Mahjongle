import { UsersRepository } from './users';
// import { ProductsRepository } from './products';

// Database Interface Extensions:
interface IExtensions {
  users: UsersRepository
}

export {
  IExtensions,
  UsersRepository
};