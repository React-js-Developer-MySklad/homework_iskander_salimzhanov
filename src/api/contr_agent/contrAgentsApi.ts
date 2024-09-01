import { ContrAgent } from "../../domain/contrAgent"

const API_URL = `http://localhost:3000/contrAgents`

export const createContrAgent = async (contrAgent: ContrAgent): Promise<ContrAgent> => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contrAgent),
        })
        return response.json()
    } catch (err) {
        console.error("Failed to create contr agent", err)
    }
}

export const readAllContrAgents = async (): Promise<ContrAgent[]> => {
    try {
        const response = await fetch(API_URL)
        return response.json()
    } catch (err) {
        console.error("Failed to read contr agents", err)
    }
}

export const updateContrAgent = async (contrAgent: ContrAgent): Promise<ContrAgent> => {
    try {
        const response = await fetch(`${API_URL}/${contrAgent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contrAgent),
        })
        return response.json()
    } catch (err) {
        console.error(`Failed to update contr ${contrAgent.id}`, err)
    }
}

export const deleteContrAgent = async (contrAgentId: String): Promise<void> => {
    try {
        const response = await fetch(`${API_URL}/${contrAgentId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
    } catch (err) {
        console.error(`Failed to delete contr agent ${contrAgentId}`, err)
    }
}
