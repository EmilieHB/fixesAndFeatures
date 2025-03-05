import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useItems } from '../../hooks/ItemContext';
import './itemCard.css';

interface ItemCard {
  title: string;
  description: string;
  type: string;
  id: number;
  status: string;
}

export const ItemCard: React.FC<ItemCard> = ({ title, description, type, id, status }: ItemCard) => {
  const { setStatus } = useItems();

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(id, event.target.value);
  };

  return (
    <div className="ItemCard" key={id}>
      <div className="CardSection">
        <Typography className="TextField" variant="h6">
          {title}
        </Typography>
        <Typography className="TextField">{description}</Typography>
      </div>
      <div className="CardSection">
        <Typography className='Type'>Type: {type}</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="label">Status</InputLabel>
          <Select labelId="label" label="Status" value={status} onChange={handleChange}>
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
