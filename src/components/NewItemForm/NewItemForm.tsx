import { Autocomplete, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useItems } from '../../hooks/ItemContext';
import { Item, ItemType } from '../../types/types';
import './newItemForm.css';

interface NewItemForm {
  handleClose: () => void;
}

export const NewItemForm: React.FC<NewItemForm> = ({ handleClose }: NewItemForm) => {
  const { addItem, items } = useItems();

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [type, setType] = useState<ItemType>();
  const [error, setError] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // this needs to be unique and will cause bugs if not
    const id = items.length + 1;
    if (!title || !description || !type) {
      setError('Fields cannot be empty');
    } else {
      const newItem: Item = { title, description, type, id, status: "Open" };
      addItem(newItem);
      handleClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Form">
        <Autocomplete
          disablePortal
          options={['Bug', 'Feature']}
          sx={{ width: 300 }}
          onChange={(e, value: string | null) => setType((value as ItemType) ?? undefined)}
          renderInput={(params) => <TextField {...params} label="Request type" />}
        />
        <div>
          <Typography>Title</Typography>
          <TextField
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div>
          <Typography>Description</Typography>
          <TextField
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDescription(event.target.value);
            }}
            fullWidth
            multiline
          />
        </div>
        <div className="SaveButton">
          <Typography>{error}</Typography>
          <Button variant="outlined" className="SaveButton" type="submit">
            <Typography>Add item</Typography>
          </Button>
        </div>
      </div>
    </form>
  );
};
