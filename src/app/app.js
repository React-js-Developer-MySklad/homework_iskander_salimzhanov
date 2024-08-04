import html from "./app.html"
import './app.css'
import buildTable from './contragents/table/table.js'
import buildModal, {openModal} from "./contragents/modal/modal.js"

const rootElement = document.querySelector('#root')
rootElement.innerHTML = html

buildTable()
buildModal()

let addContrAgentButton = document.querySelector(".add-data-button")
addContrAgentButton.addEventListener('click', openModal)