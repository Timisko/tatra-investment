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
                    db.run("INSERT INTO clients(id, name, password) VALUES(1, 'Jan Pekny', 'heslo')")
                    db.run("INSERT INTO clients(id, name, password) VALUES(2, 'Juraj Vedomy', 'heslo')")
                    db.run("INSERT INTO clients(id, name, password) VALUES(3, 'Michal Lavy', 'heslo')")
                    db.run("INSERT INTO clients(id, name, password) VALUES(4, 'Matej Pravy', 'heslo')")
                    db.run("INSERT INTO clients(id, name, password) VALUES(5, 'Stefan Stary', 'heslo')")
                });

                db.run('CREATE TABLE IF NOT EXISTS portfolios (id INTEGER PRIMARY KEY AUTOINCREMENT, strategy TEXT, regularity TEXT, investment DECIMAL, private BOOL, client_id INTEGER)', (err) => {
                })
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

