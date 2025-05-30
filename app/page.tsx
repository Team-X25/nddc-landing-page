import Archives from "@/components/archives";
import Art from "@/components/art";
import Events from "@/components/events";
import Explore from "@/components/explore";
import Header from "@/components/header";
import Heroes from "@/components/heroes";
import LifeOfDelta from "@/components/lifeOfDelta";

export default function Home() {
  return (
    <main>
      <Header />
      <Explore />
      <LifeOfDelta />
      <Art />
      <Heroes />
      <Events />
      <Archives />
    </main>
  );
}
