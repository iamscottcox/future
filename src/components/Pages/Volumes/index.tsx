import { Box, makeStyles } from "@material-ui/core";
import React, { FC } from "react";

import CuboidVolumeCalculator from "src/components/Calculators/Volumes/Cuboid";
import CylinderVolumeCalculator from "src/components/Calculators/Volumes/Cylinder";
import Page from "src/components/Pages/Page";
import QuadrilateralBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/QuadrilateralBasedPyramid";
import TriangleBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/TriangleBasedPyramid";

const useStyles = makeStyles((theme) => ({
  volumeCalculatorStyles: {
    "& .volume-calculator": {
      padding: theme.spacing(2, 0),
    },
  },
}));

export const VolumesPage: FC = () => {
  const { volumeCalculatorStyles } = useStyles();

  return (
    <Page title="Volumes">
      <Box className={volumeCalculatorStyles}>
        <CylinderVolumeCalculator />
        <CuboidVolumeCalculator />
        <QuadrilateralBasedPyramidVolumeCalculator />
        <TriangleBasedPyramidVolumeCalculator />
      </Box>
    </Page>
  );
};

export default VolumesPage;
