import { createContext, ReactNode, useContext, useState } from "react"
import { ContrAgent } from "../../domain/contrAgent"
import * as api from "../../api/contr_agent/contrAgentsApi"

export const EMPTY_CONTR_AGENT = new ContrAgent(undefined, "", "", "", "")

export interface ContrAgentContextType {
    contrAgents: ContrAgent[]
    editModalOpen: boolean
    contrAgentToEdit: ContrAgent
    openEditModal: (contrAgent: ContrAgent) => void
    closeEditModal: () => void
    saveContrAgent: (contrAgent: ContrAgent) => Promise<void>
    loadContrAgents: () => Promise<void>
    deleteContrAgent: (contrAgentId: string) => Promise<void>
}

export const ContrAgentContext = createContext<ContrAgentContextType>(null)

export function ContrAgentContextProvider({ children }: { children: ReactNode }) {
    const [contrAgents, setContrAgents] = useState<ContrAgent[]>([])
    const [editModalOpen, setModalOpen] = useState(false)
    const [contrAgentToEdit, setContrAgentToEdit] = useState<ContrAgent>()

    const openEditModal = (contrAgent: ContrAgent) => {
        setContrAgentToEdit(contrAgent)
        setModalOpen(true)
    }
    const closeEditModal = () => {
        setModalOpen(false)
    }

    const saveContrAgent = async (contrAgent: ContrAgent): Promise<void> => {
        if (!contrAgent.id) {
            return createContrAgent(contrAgent)
        }
        return updateContrAgent(contrAgent)
    }

    const createContrAgent = async (contrAgent: ContrAgent): Promise<void> => {
        const created = await api.createContrAgent(contrAgent)
        setContrAgents((prevContrAgents) => [...prevContrAgents, created])
    }

    const updateContrAgent = async (contrAgent: ContrAgent): Promise<void> => {
        const updated = await api.updateContrAgent(contrAgent)
        setContrAgents((prevContrAgents) =>
            prevContrAgents.map((prevContrAgent: ContrAgent) =>
                prevContrAgent.id === updated.id ? updated : prevContrAgent
            )
        )
    }

    const loadContrAgents = async (): Promise<void> => {
        setContrAgents(await api.readAllContrAgents())
    }

    const deleteContrAgent = async (contrAgentId: String): Promise<void> => {
        await api.deleteContrAgent(contrAgentId)
        setContrAgents((prevContrAgents) =>
            prevContrAgents.filter((prevContrAgent: ContrAgent) => prevContrAgent.id !== contrAgentId)
        )
    }

    return (
        <ContrAgentContext.Provider
            value={{
                contrAgents,
                editModalOpen,
                contrAgentToEdit,
                openEditModal,
                closeEditModal,
                saveContrAgent,
                loadContrAgents,
                deleteContrAgent,
            }}
        >
            {children}
        </ContrAgentContext.Provider>
    )
}

export default function useContrAgentContext(): ContrAgentContextType {
    const context = useContext(ContrAgentContext)
    if (!context) {
        throw new Error("ContrAgentContext must be used within a ContrAgentProvider")
    }
    return context
}
