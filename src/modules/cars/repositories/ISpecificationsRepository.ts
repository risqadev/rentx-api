import { ISpecificationDTO, Specification } from '../model/Specification';

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository };
