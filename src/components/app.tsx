import { Contragent } from "src/domain/contrAgent"
import Table from "./table/table"
import { useState } from "react"

export default function App() {
    const [contrAgents, setContrAgents] = useState<Contragent[]>()

    return (
        <>
            <header></header>
            <main>
                <Table contrAgents={contrAgents} />
            </main>
            <footer> </footer>
        </>
    )
}
