/**
 * @typedef {import("@prismicio/client").Content.TrendingfoursliceSlice} TrendingfoursliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrendingfoursliceSlice>} TrendingfoursliceProps
 * @param {TrendingfoursliceProps}
 */
const Trendingfourslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trendingfourslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Trendingfourslice;
