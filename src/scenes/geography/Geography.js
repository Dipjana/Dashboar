import { Box , useTheme} from "@mui/system"
import Header from "../../component/Header"
import { tokens } from "../../Theme";
import GrographyChart from "../../component/GrographyChart"
export default function Geography() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
    <Header title="Geography" subtitle="Simple Geography Chart" />

    <Box
      height="75vh"
      border={`1px solid ${colors.grey[100]}`}
      borderRadius="4px"
    >
      <GrographyChart/>
    </Box>
  </Box>
  )
}
