/**
 * @typedef {import("@prismicio/client").Content.ArticletwosliceSlice} ArticletwosliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticletwosliceSlice>} ArticletwosliceProps
 * @param {ArticletwosliceProps}
 */
const Articletwoslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for articletwoslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Articletwoslice;
