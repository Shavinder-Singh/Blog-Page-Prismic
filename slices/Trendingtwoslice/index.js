/**
 * @typedef {import("@prismicio/client").Content.TrendingtwosliceSlice} TrendingtwosliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrendingtwosliceSlice>} TrendingtwosliceProps
 * @param {TrendingtwosliceProps}
 */
const Trendingtwoslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trendingtwoslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Trendingtwoslice;
