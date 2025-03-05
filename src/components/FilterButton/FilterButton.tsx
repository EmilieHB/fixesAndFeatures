import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useItems } from '../../hooks/ItemContext';

export const FilterButton: React.FC = () => {
  const { filterItems } = useItems();
  const [filter, setFilter] = useState('');
  
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
    filterItems(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="label">Filter</InputLabel>
      <Select labelId="label" label="Filter" value={filter} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="Open">Open</MenuItem>
        <MenuItem value="Closed">Closed</MenuItem>
      </Select>
    </FormControl>
  );
};
