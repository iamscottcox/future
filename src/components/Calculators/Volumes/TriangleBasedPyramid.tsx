import { Box, TextField, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";

import { calculateTriangleBasedPyramidVolume } from "src/libs/volumes";

export const TriangleBasedPyramidVolumeCalculator: FC = () => {
  const [baseDepth, setBaseDepth] = useState("0");
  const [baseWidth, setBaseWidth] = useState("0");
  const [height, setDepth] = useState("0");
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const volume = calculateTriangleBasedPyramidVolume(
      parseInt(baseDepth),
      parseInt(baseWidth),
      parseInt(height)
    );
    setVolume(volume);
  }, [baseDepth, baseWidth, height]);

  return (
    <Box className="volume-calculator">
      <Typography variant="h6">Triangle Based Pyramid</Typography>
      <Box display="flex" alignItems="center">
        <form>
          <TextField
            id="baseDepth"
            label="Base Depth"
            value={baseDepth}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBaseDepth(e.target.value)
            }
          />
          <TextField
            id="baseWidth"
            label="Base Width"
            type="number"
            value={baseWidth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setBaseWidth(e.target.value)
            }
          />
          <TextField
            id="height"
            label="Height"
            type="number"
            value={height}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDepth(e.target.value)
            }
          />
        </form>
        <Typography variant="body1"> = {volume}</Typography>
      </Box>
    </Box>
  );
};

export default TriangleBasedPyramidVolumeCalculator;
