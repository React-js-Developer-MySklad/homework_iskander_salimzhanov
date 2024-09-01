import ContrAgentRow from "./row"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ContrAgent } from "../../../domain/contrAgent"
import { ContrAgentContext, ContrAgentContextType } from "../../../contexts/contr_agent/contrAgentContext"
import { ReactNode } from "react"

const contrAgent: ContrAgent = new ContrAgent("ID 1", "Agent 1", "12345678901", "Address 1", "123456789")

const mockContextValue: Partial<ContrAgentContextType> = {
    contrAgentToEdit: contrAgent,
    openEditModal: jest.fn(),
    deleteContrAgent: jest.fn(),
}

const MockContrAgentContextProvider = ({ children }: { children: ReactNode }) => (
    <ContrAgentContext.Provider value={mockContextValue as ContrAgentContextType}>
        {children}
    </ContrAgentContext.Provider>
)

describe("Строка контрагента", () => {
    test("Проверка отрисовки строки контрагента, и что при нажатии открывается модальное окно редактирования", async () => {
        render(
            <MockContrAgentContextProvider>
                <ContrAgentRow contrAgent={contrAgent} />
            </MockContrAgentContextProvider>
        )
        const rowElement = screen.getByTestId("contr-agent-row-test")
        expect(rowElement).toBeInTheDocument()

        fireEvent.click(rowElement)
        await waitFor(() => {
            expect(mockContextValue.openEditModal).toHaveBeenCalledWith(contrAgent)
        })
    }),
        test("Проверка отрисовки строки контрагента, и удаления его через кнопку 'Удалить'", async () => {
            render(
                <MockContrAgentContextProvider>
                    <ContrAgentRow contrAgent={contrAgent} />
                </MockContrAgentContextProvider>
            )
            const rowElement = screen.getByTestId("contr-agent-row-test")
            expect(rowElement).toBeInTheDocument()

            const deleteButton = screen.getByText("Удалить")
            fireEvent.click(deleteButton)
            await waitFor(() => {
                expect(mockContextValue.deleteContrAgent).toHaveBeenCalled()
            })
        })
})
