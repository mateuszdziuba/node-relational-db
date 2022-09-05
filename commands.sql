CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content text NOT NULL,
    important boolean,
    date time
);

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes integer DEFAULT 0
);

insert into blogs (author, url, title) values ('Dan Abramov', 'reactive.io', 'React blog');

insert into blogs (author, url, title) values ('Maciej Kwiatkowski', 'szostygracz.pl', 'Szosty gracz');