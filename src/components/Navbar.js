import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Scenicspot from "./Scenicspot";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  appbar: {
    backgroundColor: "black",
  },

  tab: {
    marginLeft: "auto",
    marginRight: "auto",

    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#ffffff",
      // fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  citylists: {
    textDecoration: "none",
    color: "black",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: "#40a9ff",
        // minWidth: 400,
      },
    },
  },
});

export default function Navbar(props) {
  const [value, setValue] = React.useState(props.num);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const citylist = [
    "台北市Taipei",
    "新北市NewTaipei",
    "桃園市Taoyuan",
    "台中市Taichung",
    "台南市Tainan",
    "高雄市Kaohsiung",
    "基隆市Keelung",
    "新竹市Hsinchu",
    "新竹縣HsinchuCounty",
    "苗栗縣MiaoliCounty",
    "彰化縣ChanghuaCounty",
    "南投縣NantouCounty",
    "雲林縣YunlinCounty",
    "嘉義縣ChiayiCounty",
    "嘉義市Chiayi",
    "屏東縣PingtungCounty",
    "宜蘭縣YilanCounty",
    "花蓮縣HualienCounty",
    "台東縣TaitungCounty",
    "金門縣KinmenCounty",
    "澎湖縣PenghuCounty",
    "連江縣LienchiangCounty",
  ];

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed" className={classes.appbar}>
          <Tabs
            indicatorColor="Primary"
            centered
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              className={classes.tab}
              label="Home"
              {...a11yProps(0)}
              onClick={() => {
                window.location.href = "/homepage";
              }}
            />
            <Tab
              className={classes.tab}
              label="Spot"
              {...a11yProps(1)}
              onClick={() => {
                window.location.href = "/scenicSpot";
              }}
            />
            <Tab
              className={classes.tab}
              label="City"
              {...a11yProps(2)}
              aria-controls="fade-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Tab
              className={classes.tab}
              label="About Us"
              {...a11yProps(3)}
              onClick={() => {
                window.location.href = "/";
              }}
            />
            <Tab
              className={classes.tab}
              label="Contact"
              {...a11yProps(4)}
              onClick={() => {
                window.location.href = "/";
              }}
            />
          </Tabs>
        </AppBar>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {citylist.map((cities, index) => (
            <a className={classes.citylists} href={`/scenicSpot/${citylist[index].slice(3)}`}>
            <MenuItem
              onClick={handleClose}
              // component={Link}
              // to={`/scenicSpot/${citylist[index].slice(3)}`}
              
            >
              {cities}
            </MenuItem>
             </a>
          ))}
        </Menu>
        {/* <TabPanel value={value} index={0}>
        Home
        </TabPanel>
        <TabPanel value={value} index={1}>
        Spot
      </TabPanel> */}
        {/* <TabPanel value={value} index={2}>
        City Spot
      </TabPanel> */}
      </MuiThemeProvider>
    </div>
  );
}
