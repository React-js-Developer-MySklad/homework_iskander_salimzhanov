import Footer from "./footer"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Футер", () => {
    test("Проверка отрисовки футера", () => {
        render(<Footer />)

        const footerElement = screen.getByTestId("footer")
        expect(footerElement).toBeInTheDocument()

        const textElement = screen.getByText("© 2007–2024 ООО «Логнекс»")
        expect(footerElement).toBeInTheDocument()
    })
})
