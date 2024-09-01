import { ContrAgent } from "../domain/contrAgent"
import Header from "./header/header"
import Table from "./table/table"
import { useState } from "react"
import "./app.css"
import Modal from "./modal/modal"
import Footer from "./footer/footer"

export default function App() {
    const [contrAgents, setContrAgents] = useState<ContrAgent[]>([])
    const [isModalOpen, setModalOpen] = useState(false)

    const addContrAgent = (contrAgent: ContrAgent) => {
        setContrAgents((prevContrAgents) => [...prevContrAgents, contrAgent])
    }

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <>
            <header>
                <Header onButtonClick={openModal} />
            </header>
            <main>
                <Table contrAgents={contrAgents} />
                {isModalOpen && <Modal onSubmit={addContrAgent} onClose={closeModal} />}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
