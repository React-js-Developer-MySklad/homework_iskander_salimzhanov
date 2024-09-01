const contrAgents = []
const innRegex = new RegExp("\\d{11}")
const kppRegex = new RegExp("\\d{9}")

export default function getContrAgents() {
    return contrAgents
}

export function isValidId(contrAgent) {
    if (!contrAgent.id) {
        return false
    }
    for (const otherContrAgent of getContrAgents()) {
        if (otherContrAgent.id === contrAgent.id) {
            return false
        }
    }
    return true
}

export class Contragent {
    constructor(id, name, inn, address, kpp) {
        this.id = id
        this.name = name
        this.inn = inn
        this.address = address
        this.kpp = kpp

        this.isValidName.bind(this)
        this.isValidInn.bind(this)
        this.isValidAddress(this)
        this.isValidKpp(this)
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

function isExactMatch(string, regex) {
    if (!string) {
        return false
    }
    const match = string.match(regex)
    return match && string === match[0]
}
