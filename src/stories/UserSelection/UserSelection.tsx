import React from "react";
import { InputLabel, Box, Select, MenuItem } from "@mui/material";

type selectValueType = number | string | Date;
type listOfDataType = number[] | string[];

interface UserSelectionPropsType {
    label?: string;
    selectValue: selectValueType;
    selectValueHandler: () => void;
    listOfData: listOfDataType;
    placeholder: string | undefined;
}

export function UserSelection({ label, selectValue, selectValueHandler, listOfData, placeholder }: UserSelectionPropsType) {
    return (
        <Box component="div">
            {label && <InputLabel id="select-helper-label">{label}</InputLabel>}
            <Select id="select" labelId="select-helper-label" value={selectValue} onChange={selectValueHandler} placeholder={placeholder} fullWidth>
                {listOfData.map((data, index) => {
                    return (
                        <MenuItem key={index} value={data}>
                            {data}
                        </MenuItem>
                    );
                })}
            </Select>
        </Box>
    );
}
