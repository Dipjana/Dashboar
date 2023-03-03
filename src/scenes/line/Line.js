import { Box } from "@mui/system"
import Header from "../../component/Header"
import LineChart from "../../component/LineChart"
export default function Line() {
  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <LineChart />
    </Box>
  </Box>
  )
}
