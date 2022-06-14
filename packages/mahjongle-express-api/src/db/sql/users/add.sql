/*
    Inserts a new User record.
*/
INSERT INTO "user"(name, email, date_created)
VALUES($1, $2, $3);