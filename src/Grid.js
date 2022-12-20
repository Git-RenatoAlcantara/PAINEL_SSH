import "./styles.css";

import MenuLateral from "./components/dashboard/menu_lateral";
import MenuTopo from "./components/dashboard/menu_topo";
import { Grid } from "@mui/material";


export default function GridView() {
  return (
    <Grid container>
      {/* MENU LATERAL */}
      <Grid item xl={2} md={2} lg={2}>
        <MenuLateral />
      </Grid>
      {/* FIM MENU LATERAL */}
      <Grid item xs={12} xl={10} lg={10}>
        <Grid container>
          {/* MENU TOPO */}
          <Grid item md={12} sm={12} xs={12} xl={12} lg={12}>
            <MenuTopo />
          </Grid>
          {/* FIM MENU TOPO */}

          {/* CONTEUDO */}
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            xl={12}
            lg={12}
            sx={{ width: "100%", height: "100vh", background: "#F5F7FB" }}
          >
            Content
          </Grid>
          {/* FIM CONTEUDO */}
        </Grid>
      </Grid>

      {/* FIM CONTAINER */}
    </Grid>
  );
}
//npm install @mui/material @emotion/react @emotion/styled
