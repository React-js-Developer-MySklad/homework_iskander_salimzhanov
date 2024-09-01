import { ContrAgent } from "../domain/contrAgent"
import ContrAgentHeader from "./header/header"
import ContrAgentTable from "./table/table"
import { useContext, useState } from "react"
import "./app.css"
import ContrAgentEditModal from "./modal/modal"
import Footer from "./footer/footer"
import useContrAgentContext, { ContrAgentContextProvider } from "../contexts/contr_agent/contrAgentContext"

export default function App() {
    const { editModalOpen } = useContrAgentContext()

    return (
        <>
            <header>
                <ContrAgentHeader />
            </header>
            <main>
                <ContrAgentTable />
                {editModalOpen && <ContrAgentEditModal />}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
