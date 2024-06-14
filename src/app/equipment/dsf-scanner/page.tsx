import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: SCANNER DSF

## DEEP SUBSURFACE STRUCTURE SURVEY SCANNER "DSF"
![image](/equipment/scanner/1.webp)

## TECHNICAL SPECIFICATIONS

| Parameter | Designation |
|-----------|-------------|
| **1 Hardware parameters** | |
| 1.1 Frequency range | from 1 to 100kHz |
| 1.2 The sensitivity given to the antenna input of the complex | is not more than 1*10<sup>-6</sup> A/m |
| 1.3 The time of continuous recording into the internal memory of the complex at a measurement frequency of 10 Hz | 12h |
| 1.4 Continuous operation time from a fully charged battery | 20h |
| **2 Degree of protection of enclosures:** | IP65 |
| **3 Temperature range:** | |
| - operating and short-term temperature | от -30°С до +60°С |
| - long-term storage temperature | от -40°С до +70°С |
| **4 Weight, kg, no more:** | |
| - signal processing unit | 1.5kg |
| - receiving antenna unit | 0.5kg |
| **5 Overall dimensions, mm:** | |
| - signal processing unit | 160 х 100 х 65 |
| - receiving antenna unit | 100 х 100 х 70 |

## Links
- [Certificate of Grant of Patent CN114814965B](http://epub.cnipa.gov.cn/patent/CN114814965B)
- [Certificate of Grant of Patent CN114814958B](http://epub.cnipa.gov.cn/patent/CN114814958B)
- [Certificate of Grant of Patent CN307940878S](http://epub.cnipa.gov.cn/patent/CN308008878S)
- [Certificate of Grant of Patent CN307940876S](http://epub.cnipa.gov.cn/patent/CN307940876S)
- [Testing hardware in the framework of the BLACKSEAHAZNET project](https://cordis.europa.eu/project/id/246874)
- [Complex Research of Earthquake’s Prediction Possibilities](https://cordis.europa.eu/project/id/246874)
- [Testing hardware in the framework of the SUGAR project](https://dsfgeos.cn/files/Bialas.pdf)

`;

function Page() {
  return <MarkdownPage source={source} />;
}

export default Page;
