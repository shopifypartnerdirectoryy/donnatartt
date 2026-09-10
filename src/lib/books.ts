export type Book = {
  slug: string;
  title: string;
  year: number;
  publisher: string;
  pages: number;
  isbn: string;
  epigraphNote: string;
  opening: string;
  summary: string[];
  facts: { label: string; value: string }[];
  reception: { quote: string; source: string }[];
};

export const books: Book[] = [
  {
    slug: "the-secret-history",
    title: "The Secret History",
    year: 1992,
    publisher: "Alfred A. Knopf",
    pages: 524,
    isbn: "978-0-679-41032-3",
    epigraphNote:
      "Epigraphs from Plato's Republic and Nietzsche's Birth of Tragedy.",
    opening:
      "The snow in the mountains was melting and Bunny had been dead for several weeks before we came to understand the gravity of our situation.",
    summary: [
      "A first novel written over roughly eight years, begun while Tartt was an undergraduate at Bennington College and completed in the years after. It follows Richard Papen, a scholarship student from California, who is admitted into a closed circle of five classics students at a small Vermont college.",
      "The narrative inverts the detective form: the killing is disclosed in the first sentence, and the book proceeds as an account of how it came about and what it cost. Its subject is less the crime than the seduction of aesthetic distance — the wish, as the students' tutor Julian puts it, to live in a world made beautiful by exclusion.",
    ],
    facts: [
      { label: "Published", value: "September 1992" },
      { label: "Publisher", value: "Alfred A. Knopf (US)" },
      { label: "Advance", value: "Reported at $450,000" },
      { label: "First printing", value: "75,000 copies" },
      { label: "Working title", value: "The God of Illusions" },
    ],
    reception: [
      {
        quote:
          "A remarkably powerful novel, a ferociously well-paced entertainment.",
        source: "The New York Times, 1992",
      },
      {
        quote:
          "It is a novel about the corrupting effects of beauty, and it is itself beautifully made.",
        source: "The Times Literary Supplement, 1992",
      },
    ],
  },
  {
    slug: "the-little-friend",
    title: "The Little Friend",
    year: 2002,
    publisher: "Alfred A. Knopf",
    pages: 555,
    isbn: "978-0-679-43938-6",
    epigraphNote: "Set in Mississippi in the 1970s.",
    opening:
      "For the rest of her life, Charlotte Cleve would blame herself for her son's death because she had decided to have the Mother's Day dinner at six in the evening instead of noon, after church, which is when the Cleves usually had it.",
    summary: [
      "Ten years after her first novel, Tartt published a book set in the Mississippi of her own childhood. Harriet Cleve Dufresnes, twelve years old and formidably literal-minded, decides to identify and punish the person who killed her brother Robin, found hanged in the family's yard when she was an infant.",
      "The novel refuses the resolution its premise promises. It is a book about a child's conviction that the world can be set right by will and reading, and about the adult world's indifference to that conviction.",
    ],
    facts: [
      { label: "Published", value: "October 2002" },
      { label: "Publisher", value: "Alfred A. Knopf (US)" },
      { label: "Time between novels", value: "Ten years" },
      { label: "Setting", value: "Alexandria, Mississippi, 1970s" },
      { label: "Award", value: "WH Smith Literary Award, 2003" },
    ],
    reception: [
      {
        quote:
          "A book of extraordinary atmospheric density, with a heroine of real and disquieting force.",
        source: "The Guardian, 2002",
      },
    ],
  },
  {
    slug: "the-goldfinch",
    title: "The Goldfinch",
    year: 2013,
    publisher: "Little, Brown and Company",
    pages: 771,
    isbn: "978-0-316-05543-7",
    epigraphNote:
      "Titled after Carel Fabritius's 1654 painting, held at the Mauritshuis, The Hague.",
    opening:
      "While I was still in Amsterdam, I dreamed about my mother for the first time in years.",
    summary: [
      "Theodore Decker survives a bombing at a New York museum that kills his mother. In the confusion he carries away Fabritius's small painting of a chained goldfinch, and the picture governs the next fourteen years of his life — through Park Avenue, suburban Las Vegas, and the antiques trade of lower Manhattan.",
      "The novel is explicit about its inheritance from the nineteenth-century novel of a boy adrift, and equally explicit in its argument that a work of art can be a private, illegitimate, life-sustaining possession.",
    ],
    facts: [
      { label: "Published", value: "October 2013" },
      { label: "Publisher", value: "Little, Brown and Company (US)" },
      { label: "Award", value: "Pulitzer Prize for Fiction, 2014" },
      { label: "Award", value: "Andrew Carnegie Medal for Excellence, 2014" },
      { label: "Shortlisted", value: "Baileys Women's Prize for Fiction, 2014" },
      { label: "Adaptation", value: "Feature film, Warner Bros., 2019" },
    ],
    reception: [
      {
        quote:
          "A glorious Dickensian novel, a novel that pulls together all of Ms. Tartt's remarkable storytelling talents.",
        source: "The New York Times, 2013",
      },
    ],
  },
];

export const getBook = (slug: string) => books.find((b) => b.slug === slug);
