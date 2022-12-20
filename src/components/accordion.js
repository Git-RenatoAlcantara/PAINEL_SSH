import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
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
          "&:hover": {
            background: "rgba(250, 251, 255, 0.2)"
          }
        }}
      >
        <AccordionSummary
          expandIcon={ExpandIcon()}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Revendedor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonCustom />
        </AccordionDetails>
      </Accordion>
      <Accordion
        mt="2"
        elevation="0"
        sx={{
          color: "#fff",
          borderRadius: ".5rem",
          background: "#252631",
          "&:hover": {
            background: "rgba(250, 251, 255, 0.2)"
          }
        }}
      >
        <AccordionSummary
          expandIcon={ExpandIcon()}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
