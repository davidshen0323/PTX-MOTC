import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
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
    background: "transparent",
    boxShadow: "none",
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
      },
    },
  },
});

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

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
    "?????????Taipei",
    "?????????NewTaipei",
    "?????????Taoyuan",
    "?????????Taichung",
    "?????????Tainan",
    "?????????Kaohsiung",
    "?????????Keelung",
    "?????????Hsinchu",
    "?????????HsinchuCounty",
    "?????????MiaoliCounty",
    "?????????ChanghuaCounty",
    "?????????NantouCounty",
    "?????????YunlinCounty",
    "?????????ChiayiCounty",
    "?????????Chiayi",
    "?????????PingtungCounty",
    "?????????YilanCounty",
    "?????????HualienCounty",
    "?????????TaitungCounty",
    "?????????KinmenCounty",
    "?????????PenghuCounty",
    "?????????LienchiangCounty",
  ];

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <HideOnScroll {...props}>
          <AppBar position="fixed" className={classes.appbar}>
            <Tabs
              indicatorColor="primary"
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
                label="About"
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
        </HideOnScroll>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {citylist.map((cities, index) => (
            <a
              className={classes.citylists}
              href={`/scenicSpot/${citylist[index].slice(3)}`}
            >
              <MenuItem onClick={handleClose}>{cities}</MenuItem>
            </a>
          ))}
        </Menu>
      </MuiThemeProvider>
    </div>
  );
}
