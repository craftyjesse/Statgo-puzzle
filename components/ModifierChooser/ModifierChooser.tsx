import { useState, PropsWithChildren } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

type ModifierChooserProps = PropsWithChildren<{
  modifiers: Modifier[];
  onChange?: (selected: Modifier) => void;
}>;
export const ModiferChooser = ({
  children,
  modifiers,
  onChange
}: ModifierChooserProps) => {
  const [value, setValue] = useState(null);

  const handleOnChange = ({ target: { value } }: SelectChangeEvent<number>) => {
    if (onChange) onChange(modifiers.filter(({ id }) => id === value)[0]);
  }
  return (
    <FormControl>
      <Select label={children} onChange={handleOnChange}>
        {modifiers.map(({ id, modifier_code }) => (
          <MenuItem key={id} value={id}>
            {modifier_code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
