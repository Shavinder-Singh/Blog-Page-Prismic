/**
 * @typedef {import("@prismicio/client").Content.ArticleonesliceSlice} ArticleonesliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticleonesliceSlice>} ArticleonesliceProps
 * @param {ArticleonesliceProps}
 */
const Articleoneslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for articleoneslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Articleoneslice;
