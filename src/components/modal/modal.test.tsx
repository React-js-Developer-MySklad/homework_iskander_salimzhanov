import ContrAgentEditModal from "./modal"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import {
    ContrAgentContext,
    ContrAgentContextProvider,
    ContrAgentContextType,
} from "../../contexts/contr_agent/contrAgentContext"
import { ContrAgent } from "../../domain/contrAgent"
import { ReactNode } from "react"

const contrAgent = new ContrAgent(undefined, "", "", "", "")

const mockContextValue: Partial<ContrAgentContextType> = {
    contrAgentToEdit: contrAgent,
    saveContrAgent: async (_contrAgent: ContrAgent) => {},
    closeEditModal: async () => {},
}

const MockContrAgentContextProvider = ({ children }: { children: ReactNode }) => (
    <ContrAgentContext.Provider value={mockContextValue as ContrAgentContextType}>
        {children}
    </ContrAgentContext.Provider>
)

describe("Модальное окно добавления контрагента", () => {
    test("Проверка сохранения пустого модального окна", async () => {
        render(
            <MockContrAgentContextProvider>
                <ContrAgentEditModal />
            </MockContrAgentContextProvider>
        )

        const modalElement = screen.getByTestId("contr-agent-edit-modal-test")
        expect(modalElement).toBeInTheDocument()

        fireEvent.click(screen.getByTestId("add-contr-agent-button"))
        await waitFor(() => {
            expect(screen.getByTestId("contr-agent-name-input-test")).toHaveClass("error")
            expect(screen.getByTestId("contr-agent-inn-input-test")).toHaveClass("error")
            expect(screen.getByTestId("contr-agent-address-input-test")).toHaveClass("error")
            expect(screen.getByTestId("contr-agent-kpp-input-test")).toHaveClass("error")
        })
    }),
        test("Проверка сохранения модального окна с заполнеными данными", async () => {
            render(
                <MockContrAgentContextProvider>
                    <ContrAgentEditModal />
                </MockContrAgentContextProvider>
            )

            const modalElement = screen.getByTestId("contr-agent-edit-modal-test")
            expect(modalElement).toBeInTheDocument()

            fireEvent.change(screen.getByTestId("contr-agent-name-input-test"), { target: { value: "New ContrAgent" } })
            fireEvent.change(screen.getByTestId("contr-agent-inn-input-test"), { target: { value: "12345678901" } })
            fireEvent.change(screen.getByTestId("contr-agent-address-input-test"), { target: { value: "Some Adress" } })
            fireEvent.change(screen.getByTestId("contr-agent-kpp-input-test"), { target: { value: "123456789" } })

            fireEvent.click(screen.getByTestId("add-contr-agent-button"))
            await waitFor(() => {
                expect(screen.getByTestId("contr-agent-name-input-test")).not.toHaveClass("error")
                expect(screen.getByTestId("contr-agent-inn-input-test")).not.toHaveClass("error")
                expect(screen.getByTestId("contr-agent-address-input-test")).not.toHaveClass("error")
                expect(screen.getByTestId("contr-agent-kpp-input-test")).not.toHaveClass("error")
            })
        })
})
