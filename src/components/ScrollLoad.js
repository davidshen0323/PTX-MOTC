import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

// import './style.css';

const useStyles = makeStyles((theme) => ({
    scrollitem: {
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        // backgroundColor: 'white',
        border: '1px solid green',
        marginTop: '10px',
      },
      
    //   scrollitem: first-child {
    //     marginTop: '0',
    //   }

        }));


const ScrollLoad = ({ text }) => {
  const [loading, setLoading] = React.useState(true);
  const ref = React.createRef();
  const classes = useStyles();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(false);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  });
  return (
    <div className={classes.scrollitem} ref={ref}>
      {
        loading ? 'Loading...' : text
      }
    </div>
  )
}

export default ScrollLoad;