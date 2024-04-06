import express from 'express'
import cors from 'cors'
import multer from 'multer'
import fs from 'fs'
import { exec } from "node:child_process";
import path from "node:path";

const app = express()
const port = 3000

app.use(cors())
//app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const upload = multer({ dest: 'server/lib/tmp/' });
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

app.get('/messages', (req, res) => {
    res.json({
        messages: [{bot: true, message: 'Welcome'}, {bot: false, message: 'Help me pls!!'}, {bot: true, message: 'Dont help me'}, {bot: true, message: 'Welcome'}, {bot: false, message: 'Help me pls!!'}, {bot: true, message: 'Dont help me'}, {bot: true, message: 'Welcome'}, {bot: false, message: 'Help me pls!!'}, {bot: true, message: 'Dont help me'}, {bot: true, message: 'Welcome'}, {bot: false, message: 'Help me pls!!'}, {bot: true, message: 'Dont help me'}]
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

