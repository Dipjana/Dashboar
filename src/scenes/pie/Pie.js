import { Box } from "@mui/system"
import Header from "../../component/Header"
import PieChart from "../../component/PieChart"
export default function Pie() {
  return (
    <Box m="20px">
    <Header title="Pie Chart" subtitle="Simple Pie Chart" />
    <Box height="75vh">
      <PieChart />
    </Box>
  </Box>
  )
}
