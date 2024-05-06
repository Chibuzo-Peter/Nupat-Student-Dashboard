const styles = (theme) => ({
    root: {
      backgroundColor: 'blue',
      // Match [sm, md)
      //       [600px, 900px)
      [theme.breakpoints.between('sm', 'md')]: {
        backgroundColor: 'red',
      },
    },
  });
  