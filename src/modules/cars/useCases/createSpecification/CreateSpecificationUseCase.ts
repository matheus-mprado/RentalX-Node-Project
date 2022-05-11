import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        console.log(specificationAlreadyExists,"JA")
        if (specificationAlreadyExists) {
            throw new Error("Specification Already exists!");
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }