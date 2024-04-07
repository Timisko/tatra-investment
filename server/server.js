import express from 'express'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import {exec} from "node:child_process";
import path from "node:path";
import sqlite_db from "./database/sqlite.js";
import bodyParser from "body-parser";
import OpenAI from 'openai'

const app = express()
const port = 3000
const {exec_query, select_query} = await sqlite_db()
// const openai = new OpenAI({apiKey: gpt_key})

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const upload = multer({dest: 'server/lib/tmp/'});
const storage = multer.memoryStorage()

app.post('/voice2text', upload.single('audio'), (req, res) => {
    const audioFile = req.file;

    fs.rename(audioFile.path, path.join('server', 'lib', 'tmp', 'voice.ogg'), (err) => {
        if (err) {
            res.json({err: true, message: ''})
        }
    });

    setTimeout(() => {
        exec('python3 server/lib/speech2text.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }

            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);

            res.json({err: false, message: stdout})
        });
    }, 500)
})

app.get('/messages', async (req, res) => {
    const data = await select_query('SELECT * FROM messages')

    res.json({
        messages: data
    })
})

app.get('/is_valid_user', async (req, res) => {
    const users = await select_query('SELECT * FROM clients')

    res.json({
        users: users
    })
})

app.post('/add_message', async (req, res) => {

    const message = req.body

    exec_query(`INSERT INTO messages(text, bot, client_id) VALUES('${message.text}', false, 1)`)

    // const json = await openai.chat.completions.create({
    //     messages: [
    //         {
    //             role: "system",
    //             content: "Vráť hodnoty z tohto promptu {strategy: 'Hovorí o tom akou stratégiou sa chce riadiť user', investment: 'Hovorí o tom koľko je ochotný investovať'} ak nevieš z textu zistiť hodnotu nejakej property tak ju označ ako 'null'",
    //         },
    //         {role: "user", content: message.text}
    //     ],
    //     model: 'gpt-3.5-turbo-0125',
    //     response_format: {type: "json_object"}
    // })
    //
    // console.log(json)


})

app.post('/add_portfolio', async (req, res) => {
    const portfolio = req.body
    exec_query(`INSERT INTO portfolios(strategy, regularity, investment, private, client_id) VALUES('${portfolio.strategy}', '${portfolio.regularity}', '${portfolio.investment}', '${portfolio.private}', 1)`)
    res.json({err: false})
})

app.get('/all_portfolios', async (req, res) => {
    const data = await select_query('SELECT * FROM portfolios')

    res.json({data})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

