import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Survivor } from "../types/survivor";

interface SurvivorPopupProps {
  survivor: Survivor;
}

export const SurvivorPopup= ({ survivor }: SurvivorPopupProps) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {survivor.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        {survivor.gender}, {survivor.age} years
      </Typography>

      <Typography variant="caption" gutterBottom>
        <strong>Inventory</strong>
      </Typography>

      <List>
        {survivor.inventoryItems.map(item => (
          <ListItem key={item.item.id} alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText primary={<strong>{item.item.name}</strong>} secondary={
              <Typography variant="body2" component="span">
                {item.quantity} x {item.item.points} points
              </Typography>
            }/>
          </ListItem>
        ))}
      </List>

      <Box alignItems='center' justifyContent='center' display='flex'>
        <Button variant="contained" color="success" style={{marginRight: 4}}>Trade</Button>
        <Button variant="contained" color="error">Report</Button>
      </Box>
    </div>
  )
}