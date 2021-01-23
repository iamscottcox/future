import { Box, TextField, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";

import { calculateCylinderVolume } from "src/libs/volumes";

export const CylinderVolumeCalculator: FC = () => {
  const [height, setHeight] = useState("0");
  const [diameter, setDiameter] = useState("0");
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const volume = calculateCylinderVolume(
      parseInt(height),
      parseInt(diameter)
    );
    setVolume(volume);
  }, [height, diameter]);

  return (
    <Box className="volume-calculator">
      <Typography variant="h6">Cylinder</Typography>
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
            id="diameter"
            label="Diameter"
            type="number"
            value={diameter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDiameter(e.target.value)
            }
          />
        </form>
        <Typography variant="body1"> = {volume}</Typography>
      </Box>
    </Box>
  );
};

export default CylinderVolumeCalculator;
