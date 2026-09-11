import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import TabsNav from "../components/TabsNav";
import { cropMeta } from "../data/mandis";

export default function DashboardLayout({ farmer }) {
  const cropIcon = cropMeta[farmer?.crop || "wheat"].icon;

  return (
    <div>
      <Header farmerName={farmer?.name} village={farmer?.village} cropIcon={cropIcon} />
      <TabsNav />
      <main className="dash">
        {/* Child route (MandiPricePage, LotPage, etc.) renders here.
            farmer is passed down via Outlet context so nested pages can read it
            with useOutletContext() instead of prop-drilling. */}
        <Outlet context={{ farmer }} />
      </main>
    </div>
  );
}
