import { Box, TextField, Typography } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import {
  calculateCuboidVolume,
  calculateCylinderVolume,
} from "src/libs/volumes";

import Page from "src/components/Pages/Page";

const CylinderVolumeCalculator: FC = () => {
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
    <Box>
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
    console.log("volume", volume);
    setVolume(volume);
  }, [height, width, depth]);

  return (
    <Box>
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
export const VolumesPage: FC = () => (
  <Page>
    <Typography variant="h4">Volumes</Typography>
    <CylinderVolumeCalculator />
    <CuboidVolumeCalculator />
  </Page>
);

export default VolumesPage;
