import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# METROLOGY GPTS

## Metering Certification and Equipment Calibration
![Metrology GPTS](/equipment/metrology/5.webp)
![Kazakhstan Certification](/equipment/metrology/6.webp)
![TESEQ GTEM 1500](/equipment/metrology/7.webp)

## Test GTEM Camera TESEQ GTEM 1500
![GTEM 1500](/equipment/metrology/1.webp)

## The Equipment of the Test System TESEQ
<div class="hor">
    <img src="/equipment/metrology/2.jpeg" alt="CSM-2" class="not-full">
    <img src="/equipment/metrology/3.jpeg" alt="CSM-1" class="not-full">
</div>

Gigahertz Transverse Electro-Magnetic test cell – test chamber for transverse electromagnetic waves in the gigahertz frequency range, where field strength measurements are performed in accordance with international standards IEC/EN 61000-4-3, IEC/EN 61000-4-20, IEC/EN 55022 in the frequency range from zero to 20 GHz.

## Testing Equipment at the Test Site
Testing was conducted with the support of the Changsha Uranium Geology Research Institute, CNNC.

![METRO-GPTS](/equipment/metrology/4.webp)

`;

function Page() {
    return (
        <MarkdownPage source={source} />
    );
}

export default Page;
