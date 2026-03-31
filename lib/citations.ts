export interface Citation {
  id: string;
  authors: string;
  year: number;
  title: string;
  source: string;
  url: string;
}

export const CITATIONS: Citation[] = [
  {
    id: "ijltemas-2026",
    authors: "Faida Paison & Nyabanika Nzabandora",
    year: 2026,
    title:
      "Sustainable Plastic Management in Karisimbi Commune, Goma (2026)",
    source:
      "Turning Waste into Wealth: Exploring Sustainable Plastic Management Pathways in Karisimbi Commune, Goma City, DRC",
    url: "https://www.researchgate.net/publication/400198992_Turning_Waste_into_Wealth_Exploring_Sustainable_Plastic_Management_Pathways_in_Karisimbi_Commune_Goma_City_DRC",
  },
  {
    id: "niles-2026",
    authors: "Daniel Buuma",
    year: 2026,
    title:
      "The Issue of Plastic: A Global Crisis Reflected in Goma's Streets (January 2026)",
    source: "The Niles",
    url: "https://www.theniles.org/stories/the-issue-of-plastic-a-global-crisis-reflected-in-gomas-streets/",
  },
  {
    id: "survey-goma-educators",
    authors: "Cherubin Umuragwa Mangazine",
    year: 2026,
    title:
      "Community Survey - Perspectives of Goma Educators on Lake Kivu Protection",
    source: "Survey",
    url: "https://docs.google.com/document/d/1QVQy3thEA_BXWKbzL2aE7on-oyDWCIO4Sos2vV9sWmw/edit?usp=sharing",
  },
];

export function getCitation(id: string): Citation | undefined {
  return CITATIONS.find((c) => c.id === id);
}
