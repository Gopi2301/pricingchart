import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Planlist />
    </div>
  );
}

function Planlist() {
  const plans = [0, 9, 49];
  return (
    <div className="plancards">
      {plans.map((ele) => (
        <PricingFun ele={ele} />
      ))}
    </div>
  );
}
function PricingFun({ ele }) {
  var planname = "FREE";
  if (ele == 9) {
    planname = "BASIC";
  } else {
    planname = "PRO";
  }
  const styles = { opacity: ele > 0 && ele >= 9 ? "1" : "0.7" };
  const styles2 = { opacity: ele == 49 ? "1" : "0.7" };

  return (
    <Card className="pricing">
      <div className="cardheader">
        <div className="cardheading">{planname}</div>
        <div className="price">
          $ {ele}/<span className="headspan"> month</span>
        </div>
      </div>
      <div className="cardbody">
        <hr></hr>
        <Grid container spacing={2}>
          <Grid item>
            <List>
              <ListItemText className="listcontent">Single User </ListItemText>
              <ListItemText className="listcontent">5GB Storage </ListItemText>
              <ListItemText className="listcontent">
                Unlimited Public Projects{" "}
              </ListItemText>
              <ListItemText className="listcontent">
                Community Access{" "}
              </ListItemText>
              <ListItemText style={styles} className="listcontent">
                Unlimited Private Projects
              </ListItemText>
              <ListItemText style={styles} className="listcontent">
                Dedicated Phone Support
              </ListItemText>
              <ListItemText style={styles} className="listcontent">
                Free Subdomain
              </ListItemText>
              <ListItemText style={styles2} className="listcontent">
                Monthly Status Reports
              </ListItemText>
              <Button sx={{ marginTop: 2 }} className="Button" variant="contained">Button</Button>
            </List>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

export default App;
