/**
 * @typedef {import("@prismicio/client").Content.ArticlethreesliceSlice} ArticlethreesliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlethreesliceSlice>} ArticlethreesliceProps
 * @param {ArticlethreesliceProps}
 */
const Articlethreeslice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for articlethreeslice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Articlethreeslice;
