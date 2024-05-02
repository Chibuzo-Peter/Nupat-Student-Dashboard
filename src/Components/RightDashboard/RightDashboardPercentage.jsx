import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material';

export function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 , }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 0 , }}>
        <Typography variant="body2" sx={{fontWeight:"600", fontFamily:"inter, sans-serif", color:"#000000", fontSize:"18px"}} >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export const Theme = createTheme({
    palette: {
      povicky: {
        light: '#ffee33',
        main: '#ffea00',
        dark: '#b2a300',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

export default function LinearProgresss(props) {
  
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
    }, 18000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const { color} = props;

  return (
    <Box sx={{ width: '100%', }}>
      <LinearProgressWithLabel color={color} sx={{ borderRadius:"50px",  height:"7px"}} value={progress} />
    </Box>
  );
}