"use client"

import { useState } from "react"
import { ClientComponentTwo } from "./client-component-two"
export const ClientComponentOne = () => {
    const [name, setName] = useState("Batman")
    

    return <>Client Component one
    <ClientComponentTwo />
    </>
}