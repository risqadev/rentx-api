import { v4 as uuidV4 } from 'uuid';

interface ICategoryDTO {
  name: string;
  description: string;
}

class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICategoryDTO) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Category, ICategoryDTO };
