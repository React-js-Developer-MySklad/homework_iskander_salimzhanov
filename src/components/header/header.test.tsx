import ContrAgentHeader from "./header"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ContrAgentContextProvider } from "../../contexts/contr_agent/contrAgentContext"

describe("Заголовок страницы", () => {
    test("Проверка отрисовки заголовка страницы", () => {
        render(
            <ContrAgentContextProvider>
                <ContrAgentHeader />
            </ContrAgentContextProvider>
        )

        const logoElement = screen.getByAltText("MoySklad Logo")
        expect(logoElement).toBeInTheDocument()

        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
    })
})
