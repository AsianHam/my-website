import { ComponentHeader } from "../component-header";
import { NavItem } from "../nav-item";
import Java from "/public/java.svg";

export const LinkSection = () => (
  <section className="w-full">
    <ComponentHeader title="Links" />
    <div className="flex px-5 768:px-30">
      <div className="flex flex-col py-16">
        <h2 className="text-iron text-4xl">Nav Item</h2>
        <div className="flex gap-2 mt-8">
          <NavItem
            icon={<Java className="h-full w-full text-torch-red" />}
            href="/components"
            label="example link"
            linkClassName="pointer-events-none"
          />
          <div className="flex h-full gap-2 items-center">
            <span className="flex h-full w-0.5 rounded bg-iron" />
            <h3 className="text-iron">2 rem</h3>
          </div>
        </div>
        <span className="flex w-8 h-0.5 rounded bg-iron mt-2" />
        <h3 className="text-iron">2 rem</h3>
      </div>
    </div>
  </section>
);
