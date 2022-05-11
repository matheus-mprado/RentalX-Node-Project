import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification;

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        })

        this.specifications.push(specification)
    }

    findByName(name: string) {
        console.log("name repositor",name)
        const specification = this.specifications.find(specification => specification.name === name);
        console.log("name S",this.specifications)

        return specification;
    }
}

export { SpecificationsRepository }