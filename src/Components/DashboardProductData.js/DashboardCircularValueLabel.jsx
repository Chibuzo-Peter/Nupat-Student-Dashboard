import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props,{size}) {
  return (
    <Box sx={{ position: 'relative', border:"none",   marginTop:"-0.8rem", display: 'inline-flex' }}>
      <CircularProgress size="5rem" variant="determinate" border="none"   {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0, 
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          border:"none",
            
          
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export  function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel sx={{ width: '100vw', paddingBottom:"50%", }} height="100vh" value={progress}  />;
}