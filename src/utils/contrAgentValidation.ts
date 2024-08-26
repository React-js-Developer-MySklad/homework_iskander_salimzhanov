import { ContrAgent } from "src/domain/contrAgent"

const innRegex = new RegExp("\\d{11}")
const kppRegex = new RegExp("\\d{9}")

export function isValidName(contrAgent: ContrAgent) {
    return contrAgent.name
}

export function isValidInn(contrAgent: ContrAgent) {
    return isExactMatch(contrAgent.inn, innRegex)
}

export function isValidAddress(contrAgent: ContrAgent) {
    return contrAgent.address
}

export function isValidKpp(contrAgent: ContrAgent) {
    return isExactMatch(contrAgent.kpp, kppRegex)
}

function isExactMatch(string: string, regex: RegExp) {
    if (!string) {
        return false
    }
    const match = string.match(regex)
    return match && string === match[0]
}
