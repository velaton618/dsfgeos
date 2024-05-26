import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";;

const source = `
# Technology - DBCI

<video width="100%" height="100%" controls>
	<source src="/dbci/video.mp4" type="video/mp4">
</video>

## Table of Contents

1. [What is DBCI Technology?](#what-is-dbci-technology)
2. [Applications of DBCI Technology](#applications-of-dbci-technology)
3. [Advantages of DBCI Technology](#advantages-of-dbci-technology)

## What is DBCI Technology?

DBCI stands for Brains-Blood Coupling Interface. It is a bio-electromagnetic technology that operates in the field of biological electromagnetic edge science. By analyzing the electromagnetic signals emitted by the organism, DBCI can determine physiological, pathological, and psychological changes in the organism. A sensor and software analysis system has been developed for trial production, aiming to apply this technology in life safety testing, monitoring, and artificial intelligence.

## Applications of DBCI Technology

DBCI technology can be applied in various fields, including:

- **Life Safety Testing and Monitoring**: Monitoring passenger transport, high-speed rail, and aircraft pilots for fatigue and mental tension.
- **Artificial Intelligence**: Enhancing AI systems with biological signal analysis.
- **Medical Diagnostics**: Using spectrum analysis for early detection of conditions such as myocardial infarction and stroke, as well as detecting viral infections.

## Advantages of DBCI Technology

- **Non-Invasive**: DBCI provides a passive and non-invasive diagnostic system.
- **Early Detection**: Capable of identifying precursors to serious health conditions.
- **Comprehensive Monitoring**: Effective in monitoring fatigue and psycho-emotional stress, improving safety in various fields.

## Diagnostic Sanogenesis Frequency
![Diagnostic Sanogenesis Frequency](/dbci/dbci-0.webp)

## Passive, Non-Invasive Diagnostic System for Detecting Fatigue and Psycho Emotional Stress
![Passive, Non-Invasive Diagnostic System for Detecting Fatigue and Psycho Emotional Stress](/dbci/dbci-1.webp)
![Passive, Non-Invasive Diagnostic System for Detecting Fatigue and Psycho Emotional Stress](/dbci/dbci-2.webp)
![Passive, Non-Invasive Diagnostic System for Detecting Fatigue and Psycho Emotional Stress](/dbci/dbci-3.webp)

	`;

function TechnologyDBCI() {
  return (
    <MarkdownPage source={source}/>
  );
}

export default TechnologyDBCI;
