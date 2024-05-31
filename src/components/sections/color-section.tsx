import { ColorDisplay } from "../color-display";
import { ComponentHeader } from "../component-header";

export const ColorSection = () => (
  <section className="w-full">
    <ComponentHeader title="Colors" />
    <div className="flex w-full flex-wrap px-5 768:px-30 py-16 flex-row gap-4 768:gap-0 768:justify-evenly">
      <ColorDisplay
        colorClassName="bg-torch-red"
        colorName="Torch Red"
        colorHex="#FF014F"
      />
      <ColorDisplay
        colorClassName="bg-iron"
        colorName="Iron"
        colorHex="#DCDEDD"
      />
      <ColorDisplay
        colorClassName="bg-alabaster"
        colorName="Alabaster"
        colorHex="#F9F9F9"
      />
      <ColorDisplay
        colorClassName="bg-shark"
        colorName="Shark"
        colorHex="#212428"
      />
      <ColorDisplay
        colorClassName="bg-neutral-800"
        colorName="Neutral"
        colorHex="#262626"
        circleText="800"
      />
    </div>
  </section>
);
