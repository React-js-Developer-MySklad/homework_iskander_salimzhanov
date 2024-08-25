import html from "./table.html"
import "./table.css"
import getContrAgents from "../contrAgents"

const rowClass = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
const cellClass = "px-6 py-4"
const tableClass = "contragents-table"

export default function buildTable() {
    const tableBlock = getTableBlock()
    tableBlock.innerHTML = html
    const tbody = tableBlock.querySelector("tbody")
    for (const contrAgent of getContrAgents()) {
        tbody.appendChild(createRow(contrAgent))
    }
    return tableBlock
}

function getTableBlock() {
    return document.querySelector(`.${tableClass}`)
}

function createCell(content, cellTag, scope) {
    const cell = document.createElement(cellTag)
    if (scope) {
        cell.scope = scope
    }
    cell.className = cellClass
    cell.innerHTML = content
    return cell
}

function createRow(contrAgent) {
    const row = document.createElement("tr")
    row.className = rowClass
    row.appendChild(createCell(contrAgent.id, "th", "row"))
    row.appendChild(createCell(contrAgent.name, "td"))
    row.appendChild(createCell(contrAgent.inn, "td"))
    row.appendChild(createCell(contrAgent.address, "td"))
    row.appendChild(createCell(contrAgent.kpp, "td"))
    return row
}
