/** clean percentage returns valid percentage for a given value
 * @param {number} percentage
 */

export const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};
