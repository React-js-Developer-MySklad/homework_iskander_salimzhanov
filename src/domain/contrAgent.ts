export class ContrAgent {
    id: String
    name: string
    inn: string
    address: string
    kpp: string

    constructor(id: String, name: string, inn: string, address: string, kpp: string) {
        this.id = id
        this.name = name
        this.inn = inn
        this.address = address
        this.kpp = kpp
    }
}
