import sqlite3 from 'sqlite3'

let db;

export default async function sqlite_db() {
    if (!db) {
        db = new sqlite3.Database('./tbdb.db', (err) => {
            if (err)
                console.log('error while creating db')
            else {
                console.log('Connected to db')
                db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, bot BOOL, client_id INTEGER)', (err) => {
                    if (err) {
                        console.error('Error creating table ' + err.message);
                    }
                    db.run('DELETE FROM messages', () => {
                        db.run("INSERT INTO messages(text, bot, client_id) VALUES('Vitajte, som Váš digitálny asistent pre investovanie. Poďme začať!', true, 1)")
                    })
                });

                db.run('CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT)', (err) => {
                    if (err) {
                        console.error('Error creating table ' + err.message);
                    }
                    db.run("DELETE FROM clients")
                    db.run("INSERT INTO clients(id, name, password) VALUES(1, 'user', 'heslo')")
                });

            }
        })
    }

    function exec_query(query) {
        if (!db) {
            console.log('Error db not initialized')
            return null
        }

        return db.run(query)
    }

    function select_query(query) {
        const p = new Promise((resolve, reject) => {
            db.all(query, [], (err, rows) => {
                resolve(rows)
            })
        })

        return p
    }

    return {exec_query, select_query}
}

