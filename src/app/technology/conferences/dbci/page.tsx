import MarkdownPage from "@/components/MarkdownPage/MarkdownPage";

const source = `
# Conferences DBCI

## Международная научно-практическая конференция

**На тему «Актуальные аспекты научных исследований горных территорий»**

Посвященная дню Земли, Бишкек 2024

[Доклад на тему: Высокогорье и диастолическая дисфункция левого желудочка сердца](https://www.researchgate.net/publication/380528286_Vysokogore_i_diastoliceskaa_disfunkcia_levogo_zeludocka_serdca)

![Conference Image](/dbci/conferences/GPTS-2024-B.webp)

## International Multidisciplinary Conference

**"Challenges of Contemporary Higher Education" - CCHE 2024**

[International Multidisciplinary Conference](https://cche.rs/published-proceedings-from-the-cche-2024-conference/)

["Challenges of Contemporary Higher Education" - CCHE 2024](https://cche.rs/published-proceedings-from-the-cche-2024-conference/)

[Kopaonik January 29th - February 3rd 2024](https://cche.rs/published-proceedings-from-the-cche-2024-conference/)

[Conference paper: TRAINING FAMILY PHYSICIANS IN A MOBILE ECOSYSTEM FOR THE PREVENTION OF PROGRESSION OF CARDIOVASCULAR DISEASE](/dbci/conferences/Serbia_2024.pdf)


![Conference Image](/dbci/conferences/2024-03-20_09-48-20.webp)

## V Международная научно-практическая конференция

**Центрально Азиатского Международного Медицинского Университета, посвященная ко Дню науки Кыргызской Республики: "ЦАММУ-КЛЮЧ К НАУКЕ”, "АКТУАЛЬНЫЕ ПРОБЛЕМЫ ЗДРАВООХРАНЕНИЯ, ОБРАЗОВАНИЯ И СОВРЕМЕННОЙ НАУКИ"**

[Программа V Международной научно-практической конференции](/dbci/conferences/conference_141123.pdf)

Доклад на тему: «Новый способ диагностики диастолической дисфункции левого желудочка сердца методом спектрального анализа одноканальной электрокардиограммы»

![Conference Image](/dbci/conferences/conference_2023.webp)

## International Scientific and Practical Conference

**Digital Revolution: "New Reality and New Horizons"**

April 28, 2023, Bishkek, Kyrgyzstan

[Conference paper: Diagnosis of diastolic myocardial dysfunction of the left ventricle of the heart by Doppler electrocardiography and spectral analysis of electrocardiogram](https://adam.edu.kg/media/uploads/2023/04/28/moldotashev_i_29-04-2023.pdf)

![Conference Image](/dbci/conferences/Adam.jpeg)

## The 12th Conference on the Introduction and Communication Of High-end Talents In Hebei China 2021

![Conference Image](/dbci/conferences/2021-Med.webp)

## International Conference 2021

**Partnership opportunities for cooperation between the Kharkiv Aero Club Pilot School and flight schools in Slovenia and France**

[More details](https://aeroclub.net.ua/events/ua/735-conference.html)

![Conference Image](/dbci/conferences/aeroclub.webp)

## 张家口市科学技术局关于2020年度高层次创新团队资助单位的公示

**2020年度**

![Conference Image](/dbci/conferences/GPTS-DBCI.webp)

`;

function ConferencesGPTS() {
  return <MarkdownPage source={source} />;
}

export default ConferencesGPTS;
