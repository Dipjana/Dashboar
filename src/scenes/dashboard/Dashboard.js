// import { useEffect } from "react"
import { Box } from "@mui/system"
import Header from "../../component/Header"


export const Dashboard = () => {

// useEffect(()=>{
// console.log("dipsundar");
// },[])

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center"></Box>
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
    </Box>
  )
}

