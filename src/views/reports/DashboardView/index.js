import React from 'react';

import { Typography } from '@material-ui/core';
// import Page from 'src/components/Page';
// import Budget from './Budget';
// import LatestOrders from './LatestOrders';
// import LatestProducts from './LatestProducts';
// import Sales from './Sales';
// import TasksProgress from './TasksProgress';
// import TotalCustomers from './TotalCustomers';
// import TotalProfit from './TotalProfit';
// import TrafficByDevice from './TrafficByDevice';

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   }
// }));

const Dashboard = () => {
  // const classes = useStyles();

  return (
    <div style={{ position: 'relative', top: 200 }}>
      <Typography style={{ fontSize: 32, textAlign: 'center' }}>
        Welcome to Admin Panel
      </Typography>
      <Typography style={{ fontSize: 16, textAlign: 'center' }}>
        Use the sidebar links to see more options
      </Typography>
    </div>
  );
};

export default Dashboard;
