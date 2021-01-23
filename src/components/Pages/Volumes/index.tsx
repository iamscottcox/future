import React, { FC } from "react";

import CuboidVolumeCalculator from "src/components/Calculators/Volumes/Cuboid";
import CylinderVolumeCalculator from "src/components/Calculators/Volumes/Cylinder";
import Page from "src/components/Pages/Page";
import QuadrilateralBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/QuadrilateralBasedPyramid";
import TriangleBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/TriangleBasedPyramid";
import { Typography } from "@material-ui/core";

export const VolumesPage: FC = () => (
  <Page>
    <Typography variant="h4">Volumes</Typography>
    <CylinderVolumeCalculator />
    <CuboidVolumeCalculator />
    <QuadrilateralBasedPyramidVolumeCalculator />
    <TriangleBasedPyramidVolumeCalculator />
  </Page>
);

export default VolumesPage;
