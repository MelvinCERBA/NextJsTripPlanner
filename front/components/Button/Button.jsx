export const Button = ({ label = "Button", alternate = false }) => {
  const PRIMARY_CLASS = "border px-8 py-3 rounded-lg bg-orange-main text-white text-xl";
  const SECONDARY_CLASS = "border border-orange-main px-8 py-3 rounded-lg bg-white text-orange-main text-xl";

  return (
    <button type="button" className={alternate ? SECONDARY_CLASS : PRIMARY_CLASS}>
      {label}
    </button>
  );
};