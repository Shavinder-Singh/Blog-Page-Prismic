/**
 * @typedef {import("@prismicio/client").Content.Trending3SliceSlice} Trending3SliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<Trending3SliceSlice>} Trending3SliceProps
 * @param {Trending3SliceProps}
 */
const Trending3Slice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trending3_slice (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Trending3Slice;
