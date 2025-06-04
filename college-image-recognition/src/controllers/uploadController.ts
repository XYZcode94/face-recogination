import { Request, Response } from 'express';
import { StorageService } from '../services/storageService';

export class UploadController {
    private storageService: StorageService;

    constructor() {
        this.storageService = new StorageService();
    }

    public async uploadImage(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const file = req.file; // Assuming multer is used for file uploads

            if (!file) {
                res.status(400).json({ message: 'No file uploaded.' });
                return;
            }

            await this.storageService.saveImage(userId, file);
            res.status(201).json({ message: 'Image uploaded successfully.' });
        } catch (error) {
            res.status(500).json({ message: 'Error uploading image.', error });
        }
    }

    public async getImages(req: Request, res: Response): Promise<void> {
        try {
            const userId = req.user.id; // Assuming user ID is stored in req.user
            const images = await this.storageService.retrieveImages(userId);
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving images.', error });
        }
    }
}