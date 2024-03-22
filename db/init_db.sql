DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'librarydb') THEN
        CREATE DATABASE librarydb;
    END IF;
END $$;

\c librarydb;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'users') THEN
        CREATE TABLE users (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'regular')),
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        INSERT INTO users (username, email, password, role) VALUES
        ('guest', 'guest@example.com', 'guestpassword', 'regular');
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'books') THEN
        IF NOT EXISTS (SELECT FROM pg_type WHERE typname = 'book_kind') THEN
            CREATE TYPE book_kind AS ENUM ('new', 'popular', 'poetry', 'fantasy', 'classique', 'sci-fi', 'adventures', 'detective');
        END IF;

        CREATE TABLE books (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            published_year INTEGER NOT NULL,
            type_of_book book_kind,
            user_id UUID,
            CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    END IF;
END $$;

DO $$
DECLARE
    guest_id UUID;
BEGIN
    SELECT id INTO guest_id FROM users WHERE username = 'guest';

    INSERT INTO books (title, author, published_year, type_of_book, user_id)
    VALUES
    ('Lord of the rings', 'R.R. Tolkien', 2000, 'fantasy', guest_id),
    ('Кобзар', 'Т.Г. Шевченко', 2001, 'poetry', guest_id);
END $$;
