type CoreTabItem = {
  id: number;
  title: string;
  pageLink: string;
};

export const coreTabItems: CoreTabItem[] = [
  {
    id: 0,
    title: "Sprint principal",
    pageLink: "/page/maningsprint",
  },
  {
    id: 1,
    title: "Sprint's",
    pageLink: "/page/sprints",
  },
  {
    id: 2,
    title: "Análises",
    pageLink: "/page/analitics",
  },
  {
    id: 3,
    title: "Metas",
    pageLink: "/page/goals",
  },
];
