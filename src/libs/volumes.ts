export const calculateCylinderVolume = (diameter: number, height: number) => {
  const radius = diameter / 2;
  const radiusSquared = radius * radius;

  return Math.PI * radiusSquared * height;
};

export const calculateSquareArea = (height: number, width: number) =>
  height * width;

export const calculateTriangleArea = (height: number, width: number) =>
  calculateSquareArea(height, width) / 2;

export const calculateCuboidVolume = (
  height: number,
  width: number,
  depth: number
) => calculateSquareArea(height, width) * depth;

export const calculatePyramidVolume = (baseArea: number, height: number) =>
  (baseArea / 3) * height;

export const calculateTriangularPyramidVolume = (
  baseHeight: number,
  baseWidth: number,
  height: number
) => {
  const baseArea = calculateTriangleArea(baseHeight, baseWidth);
  return calculatePyramidVolume(baseArea, height);
};

export const calculateQuadrilateralPyramidVolume = (
  baseHeight: number,
  baseWidth: number,
  height: number
) => {
  const baseArea = calculateSquareArea(baseHeight, baseWidth);
  return calculatePyramidVolume(baseArea, height);
};
