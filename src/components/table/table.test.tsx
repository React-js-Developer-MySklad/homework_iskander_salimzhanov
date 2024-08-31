import ContrAgentTable from "./table"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ContrAgent } from "../../domain/contrAgent"
import { ContrAgentContext, ContrAgentContextType } from "../../contexts/contr_agent/contrAgentContext"
import { ReactNode } from "react"

describe("Таблица контрагентов", () => {
    test("Проверка отрисовки таблицы и отображения двух контрагентов", () => {
        const contrAgents = [
            new ContrAgent("ID 1", "Agent 1", "12345678901", "Address 1", "123456789"),
            new ContrAgent("ID 2", "Agent 2", "12345678901", "Address 2", "123456789"),
        ]
        const mockContextValue: Partial<ContrAgentContextType> = {
            contrAgents: contrAgents,
            loadContrAgents: async () => {
                contrAgents
            },
        }

        const MockContrAgentContextProvider = ({ children }: { children: ReactNode }) => (
            <ContrAgentContext.Provider value={mockContextValue as ContrAgentContextType}>
                {children}
            </ContrAgentContext.Provider>
        )

        render(
            <MockContrAgentContextProvider>
                <ContrAgentTable />
            </MockContrAgentContextProvider>
        )

        const tableElement = screen.getByTestId("table-test")
        expect(tableElement).toBeInTheDocument()

        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(contrAgents.length + 1)
    })
})
