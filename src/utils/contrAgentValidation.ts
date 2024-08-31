import { ContrAgent } from "src/domain/contrAgent"

const innRegex = new RegExp("\\d{11}")
const kppRegex = new RegExp("\\d{9}")

export function isValidInn(inn: string | undefined) {
    return inn && isExactMatch(inn, innRegex)
}

export function isValidKpp(kpp: string | undefined) {
    return isExactMatch(kpp, kppRegex)
}

function isExactMatch(string: string, regex: RegExp) {
    if (!string) {
        return false
    }
    const match = string.match(regex)
    return match && string === match[0]
}
