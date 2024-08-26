import { ContrAgent } from "../domain/contrAgent"
import Header from "./header/header"
import Table from "./table/table"
import { useState } from "react"
import "./app.css"

export default function App() {
    const [contrAgents, setContrAgents] = useState<ContrAgent[]>([])

    const addContrAgent = () => {}

    return (
        <>
            <header>
                <Header onButtonClick={addContrAgent} />
            </header>
            <main>
                <Table contrAgents={contrAgents} />
            </main>
            <footer> </footer>
        </>
    )
}
