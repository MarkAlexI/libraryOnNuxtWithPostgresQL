interface Book {
  id: number;
  title: string;
  author: string;
  published_year: number;
  type_of_book?: string;
  user_id?: number;
  added_at?: string;
};

interface BookForm {
  id: number | null;
  title: string | undefined;
  author: string | undefined;
  year: number | null;
  genre: string | undefined;
};
