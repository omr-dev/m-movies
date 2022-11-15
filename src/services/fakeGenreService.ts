export enum GenreName {
  Action="Action",
    Comedy="Comedy",
    Thriller="Thriller"
}
export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: GenreName.Action },
  { _id: "5b21ca3eeb7f6fbccd471814", name: GenreName.Comedy},
  { _id: "5b21ca3eeb7f6fbccd471820", name: GenreName.Thriller }
];

export function getGenres() {
  return genres.filter(g => g);
}
