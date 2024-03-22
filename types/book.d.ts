interface Book {
  id: string;
  title: string;
  author: string;
  published_year: number;
  type_of_book?: string;
  user_id?: string;
  added_at?: string;
}

interface BookForm {
  id: string | undefined;
  title: string | undefined;
  author: string | undefined;
  year: number | null;
  genre: string | undefined;
}
