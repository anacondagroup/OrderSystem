import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { LocalShipping } from '@mui/icons-material';
import Context from './context';

export default function Orders({ orders=[]}) {
  const context = React.useContext(Context);
  console.log("context", context)
  console.log("orders", orders)
  return (
    <List sx={{ maxWidth: 400 }} data-testid="orders">
      <ListSubheader>Orders</ListSubheader>
      {context.orders.map((order, index) => (
        <ListItem key={order.id}>
          {/** * You do not need to change the way orders are displayed; */}
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText
            primary={`OrderID: ${order.id}, Description: ${order.comment}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
