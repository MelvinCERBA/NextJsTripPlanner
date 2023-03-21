export const Button = ({ label = "Button", alternate = false }) => {
  const PRIMARY_CLASS = "border px-5 py-2 rounded-lg bg-orange-main text-white text-l";
  const SECONDARY_CLASS = "border border-orange-main px-5 py-2 rounded-lg bg-white text-orange-main text-l";

  return (
    <button type="button" className={alternate ? SECONDARY_CLASS : PRIMARY_CLASS}>
      {label}
    </button>
  );
};