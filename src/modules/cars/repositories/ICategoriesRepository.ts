import { Category, ICategoryDTO } from '../model/Category';

interface ICategoriesRepository {
  create({ name, description }: ICategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesRepository };
