/**
 * @typedef {import("@prismicio/client").Content.TrendingthreeSliceSlice} TrendingthreeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrendingthreeSliceSlice>} TrendingthreeSliceProps
 * @param {TrendingthreeSliceProps}
 */
const TrendingthreeSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trendingthree_slice (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default TrendingthreeSlice;
