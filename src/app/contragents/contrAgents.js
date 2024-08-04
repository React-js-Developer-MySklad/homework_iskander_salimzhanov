const contrAgents = []
const innRegex = new RegExp("\\d{11}")
const kppRegex = new RegExp("\\d{9}")

export default function getContrAgents() {
    return contrAgents
}

export class Contragent {
    constructor(id, name, inn, address, kpp) {
        this.id = id
        this.name = name
        this.inn = inn
        this.address = address
        this.kpp = kpp

        this.isValidId.bind(this)
        this.isValidName.bind(this)
        this.isValidInn.bind(this)
    }

    isValidId() {
        for (let otherContrAgent of getContrAgents()) {
            if (otherContrAgent.id === this.id) {
                return false
            }
        }
        return this.id
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
    let match = string.match(regex)
    return match && string === match[0]
}