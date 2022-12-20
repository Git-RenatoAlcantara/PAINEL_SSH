import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";

const ButtonCustom = () => {
  return (
    <Button variant="text" sx={{ color: "#fff" }}>
      Novo
    </Button>
  );
};
const ExpandIcon = () => {
  return <ExpandMoreIcon sx={{ color: "#fff", fontColor: "#fff" }} />;
};
export default function BotaoAccordion() {
  return (
    <div>
      <Accordion
        elevation={0}
        sx={{
          color: "#fff",
          borderRadius: ".5rem",
          background: "#252631",
        }}
      >
        <AccordionSummary
          expandIcon={ExpandIcon()}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderRadius: ".5rem",
            "&:hover": {
              background: "rgba(250, 251, 255, 0.2)",
            },
          }}
        >
          <Typography>Revendedor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonCustom />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
