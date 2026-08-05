import { Hero } from "@/components/sections/Hero";
import { Dossier } from "@/components/sections/Dossier";
import { RecoveredFiles } from "@/components/sections/RecoveredFiles";
import { CollectionInfo } from "@/components/sections/CollectionInfo";
import { OperationTimeline } from "@/components/sections/OperationTimeline";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Dossier />
      <RecoveredFiles />
      <CollectionInfo />
      <OperationTimeline />
    </main>
  );
}
