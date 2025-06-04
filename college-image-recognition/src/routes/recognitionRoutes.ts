import { Router } from 'express';
import { RecognitionController } from '../controllers/recognitionController';

const recognitionRouter = Router();
const recognitionController = new RecognitionController();

export function setRecognitionRoutes(app: Router) {
    app.post('/api/recognition/upload-sample', recognitionController.uploadSample.bind(recognitionController));
    app.post('/api/recognition/find-similar', recognitionController.findSimilarImages.bind(recognitionController));
}