const innRegex = new RegExp("\\d{11}")
const kppRegex = new RegExp("\\d{9}")

export function isValidId(contrAgent: ContrAgent, contrAgents: ContrAgent[]) {
    if (!contrAgent.id) {
        return false
    }
    for (const otherContrAgent of contrAgents) {
        if (otherContrAgent.id === contrAgent.id) {
            return false
        }
    }
    return true
}

export class ContrAgent {
    id: string
    name: string
    inn: string
    address: string
    kpp: string

    constructor(id: string, name: string, inn: string, address: string, kpp: string) {
        this.id = id
        this.name = name
        this.inn = inn
        this.address = address
        this.kpp = kpp

        this.isValidName.bind(this)
        this.isValidInn.bind(this)
        this.isValidAddress.bind(this)
        this.isValidKpp.bind(this)
    }

    isValidName() {
        return this.name
    }

    isValidInn() {
        return isExactMatch(this.inn, innRegex)
    }

    isValidAddress() {
        return this.address
    }

    isValidKpp() {
        return isExactMatch(this.kpp, kppRegex)
    }
}

function isExactMatch(string: string, regex: RegExp) {
    if (!string) {
        return false
    }
    const match = string.match(regex)
    return match && string === match[0]
}
