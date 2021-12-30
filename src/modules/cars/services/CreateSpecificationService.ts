import { ISpecificationDTO } from '../model/Specification';

class CreateSpecificationService {
  execute({ name, description }: ISpecificationDTO) {
    console.log(name, description);
  }
}

export { CreateSpecificationService };
