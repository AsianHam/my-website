import { Caret } from "../caret";
import { ComponentHeader } from "../component-header";
import MenuButton from "../menu-button";

export const AnimationSection = () => {
  return (
    <section className="w-full">
      <ComponentHeader title="Animations" />
      <div className="flex w-full px-5 768:px-30 flex-col 900:flex-row 900:gap-28">
        <div className="flex flex-col py-16 gap-8 items-start">
          <h3 className="text-iron text-4xl">Menu Button</h3>
          <span className="flex flex-row gap-6">
            <span className="flex flex-col gap-6">
              <h4 className="flex text-iron text-2xl text-opacity-70 pointer-events-none">
                Closed State
              </h4>
              <MenuButton isOpen={false} />
            </span>
            <span className="flex flex-col gap-6">
              <h4 className="flex text-iron text-2xl text-opacity-70 pointer-events-none">
                Open State
              </h4>
              <MenuButton isOpen={true} />
            </span>
          </span>
        </div>
        <div className="flex flex-col py-16 gap-8">
          <h3 className="text-iron text-4xl">Flashing Caret</h3>
          <Caret />
        </div>
      </div>
    </section>
  );
};
