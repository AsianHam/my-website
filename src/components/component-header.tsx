export const ComponentHeader = ({ title }: { title: string }) => (
  <span className="flex bg-neutral-800 py-16 border-t border-b border-iron border-opacity-60">
    <h2 className="text-iron text-5xl px-5 768:px-30 font-semibold">{title}</h2>
  </span>
);
