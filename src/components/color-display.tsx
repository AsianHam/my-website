interface ColorDisplayProps {
  colorClassName: string;
  colorName: string;
  colorHex: string;
  circleText?: string;
}

export const ColorDisplay = ({
  colorClassName,
  colorName,
  colorHex,
  circleText,
}: ColorDisplayProps) => (
  <div className='flex flex-col justify-center w-fit'>
    <div
      className={`flex rounded-full h-20 w-20 border border-iron border-opacity-60 ${colorClassName}`}
    >
      <span className='flex justify-center items-center w-full text-white text-2xl'>
        {circleText}
      </span>
    </div>
    <h3 className='flex text-lg text-iron pt-4 self-center'>{colorName}</h3>
    <h4 className='flex text-lg text-iron opacity-60 self-center'>
      {colorHex}
    </h4>
  </div>
);
