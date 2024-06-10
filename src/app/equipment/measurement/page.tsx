import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# DSF-GEOS: MEASUREMENT TECHNIQUE

The method allows you to study the structure of geological objects and identify hydrocarbon deposits based on direct signs (anomaly of the “reservoir” type).
To measure the electromagnetic field, a multi-purpose depth scanner "DSF". A small unmanned aerial vehicle (UAV) is the most effective platform for placing equipment that ensures high productivity and information content of work, as well as independence from the terrain. Figure 1 shows a diagram of the "SAFETY DSF-GEOS" measuring complex on the UAV platform.

![image](/equipment/measurement/1.webp)

## Technical characteristics of the "SAFETY DSF-GEOS" complex:
* take-off weight of the aircraft – 10 kg;
* operating flight speed range – 60…200 km/h;
* operating flight altitude range – 40…4000 m;
* maximum flight duration – 4 hours;
* range of action of the aircraft from the ground control station - up to 200 km;
* the productivity of the complex is up to 800 linear km per day.

## Figure 2 Interpretive model
![image](/equipment/measurement/2.webp)


In Fig. 2 presents a classification of models used in data interpretation, the main principle of which is compliance with the sequence of stages of the interpretation process. As can be seen from this figure, the mathematical models used in data interpretation consist of 4 classes of models: petrophysical, spatial (structural), dynamic and minerals models. First, the recorded signal is corrected. For this purpose, various types of calibration dependencies are used to the initial information, which adapt the hardware complex to the measurement conditions, as well as eliminating hardware errors. Their goal is to obtain the true geophysical parameters of the geological objects under study. The necessary material is obtained by methods of statistical analysis of the characteristics of the electromagnetic field for a given territory or by solving direct geophysical problems for point, distributed and areal objects. Technically, for these purposes, a stationary (variable) station "DSF-GEOS-MN". Subsequently, all of these models can undergo changes (adapt) as field measurements are interpreted (due to the presence of appropriate feedback).

## Petrophysical models
Petrophysical models are models of connections of the “core-borehole geophysics” type. They can be two-dimensional or multi-dimensional. Their purpose is to ensure a transition from geophysical (for example, radiation activity, polarization, etc.) to geological parameters of formations (tension, porosity, etc.).

## Spatial models
Spatial models (graphical and analytical) are used at the stage of areal interpretation. They serve to study the spatial distribution of reservoirs, as well as to determine the location of the oil and gas potential contour - oil-water contact (OWC), gas-water contact (GWC). For this purpose, maps and profile sections are built. for various purposes, and it is very important that the correlation of the sections being studied is carried out reliably.

## Mathematical models
Mathematical models that define the basic tools (basic functions for decomposition and restoration of the original geopolariton field) of the GPTS method, for example, wavelet decompositions or singular spectral analysis, are examples of spatial models. They largely determine the choice of technology for the interpretation process. At the initial stage of processing, they are usually a priori and can be graphical and analytical. Further, in the process of processing geological and geophysical information, the a priori spatial model is refined in accordance with the real properties of the environment.

## Dynamic models
Dynamic models are used for geophysical construction of tectonic faults.
Interpretive and analytical models either reflect graphical petrophysical relationships between geophysical parameters and geological properties of the environment or between various geophysical parameters, or serve the purposes of the interpretation process itself. In this regard, they are divided into experimental (based on the analysis of graphical data of the hardware complex, that is, correlation connections of the “geophysics-geophysics” type) and theoretical (based on the use of various mathematical methods when solving processing problems). Theoretical interpretive models, first of all, include models of decision making under conditions of uncertainty, as well as various stochastic models obtained using statistical modeling methods. As an example of theoretical models, we can point to a model for selecting the most probable value of the NWC or GWC of a formation from a set of wavelet decompositions obtained on various classes of basic functions. Experimental interpretive models are divided depending on their purpose, that is, the geological properties of objects that need to be determined during data processing (stratigraphy, water saturation, compression, extension, etc.).

`;

function Page() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default Page;
