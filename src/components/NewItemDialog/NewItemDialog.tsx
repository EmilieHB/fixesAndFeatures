import { Autocomplete, Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import React from 'react';
import './newItemDialog.css';
import { NewItemForm } from '../NewItemForm/NewItemForm';

interface NewItemDialog {
  open: boolean;
  handleClose: () => void;
}

export const NewItemDialog: React.FC<NewItemDialog> = ({ open, handleClose }: NewItemDialog) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add new feature or bug</DialogTitle>
      <DialogContent className="DialogContentWrapper">
        <NewItemForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};
