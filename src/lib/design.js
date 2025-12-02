// utils/design.js
export const design = {
  padding: {
    phone: "p-2",
    tablet: "p-4",
    laptop: "p-6",
    fold: "p-4",
  },
  text: {
    phone: "text-sm leading-tight",
    tablet: "text-base leading-relaxed",
    laptop: "text-lg leading-relaxed",
    fold: "text-xl leading-loose",
  },
  grid: {
    phone: "grid-cols-1", // single column on small screens
    tablet: "grid-cols-2", // two columns on tablets
    laptop: "grid-cols-3", // three columns on laptops
    fold: "grid-cols-4", // four columns on large/fold screens
  },
};
