export class RecognitionController {
    private facialRecognitionService: FacialRecognitionService;
    private storageService: StorageService;

    constructor() {
        this.facialRecognitionService = new FacialRecognitionService();
        this.storageService = new StorageService();
    }

    public async uploadSample(req: Request, res: Response): Promise<void> {
        try {
            const sampleImage = req.file;
            if (!sampleImage) {
                res.status(400).send('No sample image uploaded.');
                return;
            }

            // Process the sample image for facial recognition
            await this.facialRecognitionService.detectFaces(sampleImage.path);
            res.status(200).send('Sample image uploaded and processed successfully.');
        } catch (error) {
            res.status(500).send('Error processing sample image.');
        }
    }

    public async findSimilarImages(req: Request, res: Response): Promise<void> {
        try {
            const sampleImagePath = req.body.sampleImagePath;
            if (!sampleImagePath) {
                res.status(400).send('Sample image path is required.');
                return;
            }

            // Find similar images in the database
            const similarImages = await this.facialRecognitionService.compareFaces(sampleImagePath);
            res.status(200).json(similarImages);
        } catch (error) {
            res.status(500).send('Error finding similar images.');
        }
    }
}