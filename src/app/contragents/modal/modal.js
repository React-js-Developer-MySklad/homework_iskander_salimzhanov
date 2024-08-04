import html from './modal.html'
import './modal.css'
import getContrAgents, {Contragent} from "../contrAgents"
import buildTable from "../table/table"

const errorClass = "error"

export default function buildModal() {
    let modalBlock = getModalBlock()
    modalBlock.innerHTML = html
    let addButton = modalBlock.querySelector(".add-data-button")
    addButton.addEventListener('click', addContrAgent)
}

function addContrAgent() {
    let modalBlock = getModalBlock()
    let inputs = getInputs(modalBlock)
    Object.values(inputs).forEach(unmarkError);
    let contrAgent = new Contragent(
        self.crypto.randomUUID(),
        inputs.name.value,
        inputs.inn.value,
        inputs.address.value,
        inputs.kpp.value
    )
    let isValid = validateContrAgentAndMarkInvalidFields(contrAgent, inputs)
    if (isValid) {
        getContrAgents().push(contrAgent)
        buildTable()
        closeModal()
    }
}

function validateContrAgentAndMarkInvalidFields(contrAgent, inputs) {
    let isValid = true
    if (!contrAgent.isValidId()) {
        isValid = false
        markError(inputs.id)
    }
    if (!contrAgent.isValidName()) {
        isValid = false
        markError(inputs.name)
    }
    if (!contrAgent.isValidInn()) {
        isValid = false
        markError(inputs.inn)
    }
    if (!contrAgent.isValidAddress()) {
        isValid = false
        markError(inputs.address)
    }
    if (!contrAgent.isValidKpp()) {
        isValid = false
        markError(inputs.kpp)
    }
    return isValid
}

function getInputs(modalBlock) {
    return {
        name: modalBlock.querySelector(".contragent-name"),
        inn: modalBlock.querySelector(".contragent-inn"),
        address: modalBlock.querySelector(".contragent-address"),
        kpp: modalBlock.querySelector(".contragent-kpp")
    }
}

export function openModal() {
    toggleModalVisibility(false)
}

function unmarkError(input) {
    input.classList.remove(errorClass)
}

function markError(input) {
    input.classList.add(errorClass)
}

function closeModal() {
    toggleModalVisibility(true)
}

function toggleModalVisibility(hidden) {
    let modalBlock = getModalBlock();
    const popup = modalBlock.querySelector('.contragents-modal');
    const overlay = modalBlock.querySelector('.overlay');
    popup.classList.toggle('hidden', hidden);
    overlay.classList.toggle('hidden', hidden);
    if (!hidden) {
        const closePopup = modalBlock.querySelector('.close-modal');
        closePopup.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
    }
}

function getModalBlock() {
    return document.querySelector(".contragents-modal")
}
