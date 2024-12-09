import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import dynamic from "next/dynamic";
import { useMemo } from "react";


const MapWithNoSSR = dynamic(() => import('./../../../components/map'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
}
