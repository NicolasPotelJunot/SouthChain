export const TitleGradient = ({ title, className }) => {
  return (
    <h2
      className={` ${className} pb-5 ld:pb-10 text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-gradient`}
    >
      {title}
    </h2>
  );
};
