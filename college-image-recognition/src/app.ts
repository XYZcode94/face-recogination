import express from 'express';
import bodyParser from 'body-parser';
import { setAuthRoutes } from './routes/authRoutes';
import { setUploadRoutes } from './routes/uploadRoutes';
import { setRecognitionRoutes } from './routes/recognitionRoutes';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(authMiddleware);

setAuthRoutes(app);
setUploadRoutes(app);
setRecognitionRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});