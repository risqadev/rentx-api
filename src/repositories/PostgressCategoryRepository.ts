import { Category, ICategoryDTO } from '../model/Category';
import { ICategoriesRepository } from './ICategoriesRepository';

class PostgressCategoryRepository implements ICategoriesRepository {
  create({ name, description }: ICategoryDTO): void {
    console.log(name, description);
  }
  list(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { PostgressCategoryRepository };
