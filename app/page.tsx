import React from "react";

import {Box, Typography} from "@mui/material";

import devConfig from "../public/dev.json";
import {IJson} from "@/src/model/JSONModel";

export default function Home() {
    const config: IJson = devConfig;

    return (
        <Box>
            <Typography variant={"h4"}>
                JSON Editor
            </Typography>
        </Box>
    )
}
