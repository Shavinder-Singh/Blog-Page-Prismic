/**
 * @typedef {import("@prismicio/client").Content.ArticlefoursliceSlice} ArticlefoursliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlefoursliceSlice>} ArticlefoursliceProps
 * @param {ArticlefoursliceProps}
 */
const Articlefourslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for articlefourslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Articlefourslice;
