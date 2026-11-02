import NexusAgencyPage from "@agency/pages/NexusAgencyPage";
// import { GlobalNexusMasterLayout } from "@shared/components/GlobalNexusMasterLayout";

export default function AgencyApp() {
  return (
    <GlobalNexusMasterLayout activeTab="agency" themeColor="#00F3FF">
      <NexusAgencyPage />
    </GlobalNexusMasterLayout>
  );
}
