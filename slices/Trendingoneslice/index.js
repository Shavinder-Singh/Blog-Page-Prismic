/**
 * @typedef {import("@prismicio/client").Content.TrendingonesliceSlice} TrendingonesliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrendingonesliceSlice>} TrendingonesliceProps
 * @param {TrendingonesliceProps}
 */
const Trendingoneslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trendingoneslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Trendingoneslice;
