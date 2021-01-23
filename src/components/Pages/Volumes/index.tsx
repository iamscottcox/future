import React, { FC } from "react";
import { Typography, makeStyles } from "@material-ui/core";

import CuboidVolumeCalculator from "src/components/Calculators/Volumes/Cuboid";
import CylinderVolumeCalculator from "src/components/Calculators/Volumes/Cylinder";
import Page from "src/components/Pages/Page";
import QuadrilateralBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/QuadrilateralBasedPyramid";
import TriangleBasedPyramidVolumeCalculator from "src/components/Calculators/Volumes/TriangleBasedPyramid";

const useStyles = makeStyles((theme) => ({
  styles: {
    "& .volume-calculator": {
      padding: theme.spacing(2, 0),
    },
  },
}));

export const VolumesPage: FC = () => {
  const { styles } = useStyles();

  return (
    <Page className={styles} title="Volumes">
      <CylinderVolumeCalculator />
      <CuboidVolumeCalculator />
      <QuadrilateralBasedPyramidVolumeCalculator />
      <TriangleBasedPyramidVolumeCalculator />
    </Page>
  );
};

export default VolumesPage;
