import { Box, TextField, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";

import { calculateCuboidVolume } from "src/libs/volumes";

const CuboidVolumeCalculator: FC = () => {
  const [height, setHeight] = useState("0");
  const [width, setWidth] = useState("0");
  const [depth, setDepth] = useState("0");
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const volume = calculateCuboidVolume(
      parseInt(height),
      parseInt(width),
      parseInt(depth)
    );
    setVolume(volume);
  }, [height, width, depth]);

  return (
    <Box className="volume-calculator">
      <Typography variant="h6">Cuboid</Typography>
      <Box display="flex" alignItems="center">
        <form>
          <TextField
            id="height"
            label="Height"
            value={height}
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHeight(e.target.value)
            }
          />
          <TextField
            id="width"
            label="Width"
            type="number"
            value={width}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWidth(e.target.value)
            }
          />
          <TextField
            id="depth"
            label="Depth"
            type="number"
            value={depth}
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

export default CuboidVolumeCalculator;
