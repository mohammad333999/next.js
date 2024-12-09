import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Grapes } from "@/components/icons";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About </h1>
          <Grapes className="m-4"/>
          <h1 className={title()}>Fruit Market</h1>
          <span>
            this is web site for online marketing.
            
          </span>
        </div>
      </section>
    </DefaultLayout>
  );
}
