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
            expect(screen.getByLabelText("Наименование", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("ИНН", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("Адрес", { selector: "input" })).toHaveClass("error")
            expect(screen.getByLabelText("КПП", { selector: "input" })).toHaveClass("error")
        })
    }),
        test("Проверка сохранения модального окна с заполнеными данными", () => {
            render(
                <MockContrAgentContextProvider>
                    <ContrAgentEditModal />
                </MockContrAgentContextProvider>
            )

            const modalElement = screen.getByTestId("contr-agent-edit-modal-test")
            expect(modalElement).toBeInTheDocument()

            fireEvent.change(screen.getByLabelText("Наименование", { selector: "input" }), {
                target: { value: "New ContrAgent" },
            })
            fireEvent.change(screen.getByLabelText("ИНН", { selector: "input" }), { target: { value: "12345678901" } })
            fireEvent.change(screen.getByLabelText("Адрес", { selector: "input" }), {
                target: { value: "Some Adress" },
            })
            fireEvent.change(screen.getByLabelText("КПП", { selector: "input" }), { target: { value: "123456789" } })

            fireEvent.click(screen.getByTestId("add-contr-agent-button"))
            expect(screen.getByLabelText("Наименование", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("ИНН", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("Адрес", { selector: "input" })).not.toHaveClass("error")
            expect(screen.getByLabelText("КПП", { selector: "input" })).not.toHaveClass("error")
        })
})
