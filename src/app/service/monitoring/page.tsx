import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# MONITORING OF DANGEROUS GEODYNAMIC EVENTS

Monitoring of underground leakage migration path of hazardous substances in hazardous
mineral stacking and storage sites.

Determine the regional scope of adverse effects of electromagnetic fields
on organisms and assess regional pathogenicity

Monitor dangerous Geodynamic processes on the Earth
(e.g. earthquakes, tsunamis, volcanic activity, etc)

Monitoring of oil and gas pipelines

![img](/monitoring/1.webp)

## DSF-GEOS MONITORING NETWORK
![img](/monitoring/2.webp)
![img](/monitoring/3.webp)
![img](/monitoring/4.webp)
`;

function Page() {
  return <MarkdownPage source={source} />;
}

export default Page;
