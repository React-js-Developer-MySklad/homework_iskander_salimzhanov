import Header from "./header"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Заголовок страницы", () => {
    test("Проверка отрисовки заголовка страницы", () => {
        render(<Header />)

        const logoElement = screen.getByAltText("MoySklad Logo")
        expect(logoElement).toBeInTheDocument()

        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument()
    })
})
