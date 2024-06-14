import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# Conferences - GPTS

## Table of Contents

1. [Conferences](#conferences)
##  Conferences

### Международная научно-практическая конференция

**Topic**: Актуальные аспекты научных исследований горных территорий  
**Date**: 2024  
**Location**: Бишкек  
**Details**: Доклад на тему: Применение технологии GPTS для исследования глубинных структур и перспектив нефтегазоносности в условиях высокогорья Тянь-Шань.  

### XVII International Scientific Conference

**Topic**: Monitoring of Geological Processes and Ecological Condition of the Environment  
**Date**: 7–10 November 2023  
**Location**: Kyiv, Ukraine  
**Details**: Using the GPTS to explore the deep structure and prospects of oil and gas potential in the “Mezhdurechenskaya” area of the north-eastern side of the Ferghana Basin.  

### THE XVIII INTERNATIONAL CONGRESS FOR MINE SURVEYING

**Date**: October 26-29, 2023  
**Location**: Xuzhou, China  
**Details**: Development Trend of Transparent Technology for Hidden Disasters in Coal Mines-Key Technologies and Applications of GPTS in Disaster Detection.  

### 2023年矿山安全科技进云南 科技赋能 精准治灾 大地极化激元层析成像技术进云贵受 “热捧”

**Date**: April 13, 2023  
**Location**: 曲靖市  


### XVI International Scientific Conference

**Topic**: Monitoring of Geological Processes and Ecological Condition of the Environment  
**Date**: 15–18 November 2022  
**Location**: Kyiv, Ukraine  
**Details**: Using the geopolariton tomography based on UAV to explore and monitor coalfield subsurface structures in Shaanxi, China.  


### 全国颠覆性技术创新大赛领域赛

**Date**: 2021  
**Location**: Chengdu, China  


### 第十二届中国河北高层次人才引进交流大会

**Date**: 2021  
**Location**: Hebei, China  


### 首届全国矿产勘查大会

**Date**: 2021  
**Location**: China  
**Details**: Application of the GeoPolariton Tomography based on UAV in prediction and monitoring of mountainous coal spontaneous combustion area in eastern Yunnan Plateau.  


### 中国国际大数据产业博览会

**Date**: 2021  
**Location**: Guiyang, China  
**Details**: 星天地灾害风险监测系统 (大地极化激元层析成像技术 - GPTS).  


### XXth International Conference “Geoinformatics: Theoretical and Applied Aspects”

**Date**: 11-14 May 2021  
**Location**: Kiev, Ukraine  
**Details**: Geopolariton tomography (GPTS) hardware and software platform for study of Earth's deep structure.  


### 第四届“中国创翼”创业创新大赛河北选拔赛

**Date**: 2020  
**Location**: Hebei, China  

### XIXth International Conference “Geoinformatics: Theoretical and Applied Aspects”

**Date**: 11-14 May 2020  
**Location**: Kiev, Ukraine  
**Details**: Use of GPTS technology in geoinformation security for sustainable development of megacities.  


### Third International Conference on Geology of the Caspian Sea and Adjacent Areas

**Date**: 16-18 October 2019  
**Location**: Baku  
**Details**: "Изучение глубинного строения и перспектив нефтегазоносности южной части Гурьевского свода юго-восточного борта Прикаспийской впадины методом GPTS".  

### МЕЖДУНАРОДНАЯ НАУЧНАЯ КОНФЕРЕНЦИЯ, ОДЕССА 2018г.

**Topic**: Морские геолого-геофизические исследования: Фундаментальные и прикладные аспекты  
**Date**: 2018  
**Location**: Odessa  
**Details**: "Изучение трубообразных структур на шельфе Южно-Китайского моря методом геополяритонной томографии Земли".  


### АКТУАЛЬНЫЕ ПРОБЛЕМЫ ГЕОСРЕДЫ И ЗОНДИРУЮЩИХ СИСТЕМ, КИЕВ 2017г.

**Date**: 2017  
**Location**: Kiev  

### ЮБИЛЕЙНАЯ Х МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ, ЯЛТА 2012г.

**Date**: 9-14 September 2012  
**Location**: Yalta  
**Details**: Азово-Черноморский полигон изучения геодинамики и флюидодинамики формирования месторождений нефти и газа.  


### ВТОРАЯ МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ, КИЕВ 2012г.

**Date**: 2012  
**Location**: Kiev  
**Details**: Пассивное аэроэлектромагнитное профилирование для поиска нефти и газа в осадочных бассейнах Ордос и Эрлянь (Китай).  

	`;

function ConferencesGPTS() {
  return <MarkdownPage source={source} />;
}

export default ConferencesGPTS;
