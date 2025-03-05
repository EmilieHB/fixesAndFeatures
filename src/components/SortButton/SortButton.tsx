import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useItems } from '../../hooks/ItemContext';

export const SortButton: React.FC = () => {
  const { sortItems } = useItems();
  const [sort, setSort] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    sortItems(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="label">Sort</InputLabel>
      <Select labelId="label" label="Sort" value={sort} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="type">Type</MenuItem>
      </Select>
    </FormControl>
  );
};
