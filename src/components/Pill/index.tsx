export const Pill = ({ label }: { label: string }) => {
  return (
    <div className="pill bg-neutral-100 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm shadow-md">
      {label}
    </div>
  );
};
