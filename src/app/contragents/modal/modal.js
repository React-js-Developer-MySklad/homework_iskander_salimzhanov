import html from "./modal.html"
import "./modal.css"
import getContrAgents, { Contragent } from "../contrAgents"
import buildTable from "../table/table"
import { isValidId } from "../contrAgents"

const errorClass = "error"

export default function buildModal() {
    const modalBlock = getModalBlock()
    modalBlock.innerHTML = html
    const addButton = modalBlock.querySelector(".add-data-button")
    addButton.addEventListener("click", addContrAgent)
}

function addContrAgent() {
    const modalBlock = getModalBlock()
    const inputs = getInputs(modalBlock)
    Object.values(inputs).forEach(unmarkError)
    const contrAgent = new Contragent(
        self.crypto.randomUUID(),
        inputs.name.value,
        inputs.inn.value,
        inputs.address.value,
        inputs.kpp.value
    )
    const invalidFields = validateContrAgent(contrAgent)
    if (invalidFields.length === 0) {
        getContrAgents().push(contrAgent)
        buildTable()
        closeModal()
    } else {
        markErrors(invalidFields, inputs)
    }
}

function markErrors(invalidFields, inputs) {
    for (const field of invalidFields) {
        markError(inputs[field])
    }
}

function validateContrAgent(contrAgent) {
    const invalidFields = []
    if (!isValidId(contrAgent)) {
        invalidFields.push("id")
    }
    if (!contrAgent.isValidName()) {
        invalidFields.push("name")
    }
    if (!contrAgent.isValidInn()) {
        invalidFields.push("inn")
    }
    if (!contrAgent.isValidAddress()) {
        invalidFields.push("address")
    }
    if (!contrAgent.isValidKpp()) {
        invalidFields.push("kpp")
    }
    return invalidFields
}

function getInputs(modalBlock) {
    return {
        name: modalBlock.querySelector(".contragent-name"),
        inn: modalBlock.querySelector(".contragent-inn"),
        address: modalBlock.querySelector(".contragent-address"),
        kpp: modalBlock.querySelector(".contragent-kpp"),
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
    const modalBlock = getModalBlock()
    const popup = modalBlock.querySelector(".contragents-modal")
    const overlay = modalBlock.querySelector(".overlay")
    popup.classList.toggle("hidden", hidden)
    overlay.classList.toggle("hidden", hidden)
    if (!hidden) {
        const closePopup = modalBlock.querySelector(".close-modal")
        closePopup.addEventListener("click", closeModal)
        overlay.addEventListener("click", closeModal)
    }
}

function getModalBlock() {
    return document.querySelector(".contragents-modal")
}
