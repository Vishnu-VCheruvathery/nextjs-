import { serverSideFunction } from "@/utils/server-utils"



const ServerRoutePage = () => {
    const result = serverSideFunction()

    return (
    <h1>Server route {result}</h1>
  )
}

export default ServerRoutePage