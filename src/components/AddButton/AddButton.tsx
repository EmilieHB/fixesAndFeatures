import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import './button.css';
import { NewItemDialog } from '../NewItemDialog/NewItemDialog';

interface AddButton {
  title: string;
}

export const AddButton: React.FC<AddButton> = ({title}: AddButton) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
    <Button variant="contained" className="AddButton" onClick={() => setOpenDialog(true)}>
      <AddIcon />
      <Typography>{title}</Typography>
    </Button>
    <NewItemDialog open={openDialog} handleClose={() => setOpenDialog(false)} />
    </>
  );
};
