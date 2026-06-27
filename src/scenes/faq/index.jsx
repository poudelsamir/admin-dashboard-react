import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMoreOutlined, ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

import React from "react";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Who am I?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color="initial">
            You are the Admin.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Where am I?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color="initial">
            Inside the admin pannel.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            what am I supposed to do?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color="initial">
            Handle admin works.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
           Am I the only one?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color="initial">
            God knows!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            Good UI!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" color="initial">
            Thanks!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
