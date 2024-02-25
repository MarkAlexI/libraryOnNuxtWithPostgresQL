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
            id SERIAL PRIMARY KEY,
            username VARCHAR(100) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'regular'))
        );

        INSERT INTO users (username, email, password, role) VALUES
        ('guest', 'guest@example.com', 'guestpassword', 'regular');
    END IF;
END $$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'books') THEN
        CREATE TABLE books (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            year INTEGER NOT NULL,
            user_id INTEGER,
            CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id)
        );
    END IF;
END $$;

DO $$
DECLARE
    guest_id INTEGER;
BEGIN
    SELECT id INTO guest_id FROM users WHERE username = 'guest';

    INSERT INTO books (title, author, year, user_id)
    VALUES
    ('Lord of the rings', 'R.R. Tolkien', 2000, guest_id),
    ('Кобзар', 'Т.Г. Шевченко', 2001, guest_id);
END $$;
