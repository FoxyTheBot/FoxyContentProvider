import express, { Application } from 'express';

const app: Application = express();

app.use('/', require('./routes/index'));
app.use('/memes', express.static('./assets/commands/memes'));
app.use('/image', express.static('./assets/commands/image'));
app.listen(8080, () => console.info('Server started on port 8080'));