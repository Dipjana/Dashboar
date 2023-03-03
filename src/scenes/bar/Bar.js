import { Box } from "@mui/system"
import Header from "../../component/Header";
import BarChart from  "../../component/BarChart";

export default function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}
