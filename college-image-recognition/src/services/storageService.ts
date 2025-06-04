import { promises as fs } from 'fs';
import path from 'path';

class StorageService {
    private imageDirectory: string;

    constructor() {
        this.imageDirectory = path.join(__dirname, '../../uploads');
    }

    async saveImage(userId: string, imageBuffer: Buffer, imageName: string): Promise<string> {
        const userDir = path.join(this.imageDirectory, userId);
        await fs.mkdir(userDir, { recursive: true });
        const imagePath = path.join(userDir, imageName);
        await fs.writeFile(imagePath, imageBuffer);
        return imagePath;
    }

    async retrieveImages(userId: string): Promise<string[]> {
        const userDir = path.join(this.imageDirectory, userId);
        try {
            const files = await fs.readdir(userDir);
            return files.map(file => path.join(userDir, file));
        } catch (error) {
            console.error('Error retrieving images:', error);
            return [];
        }
    }
}

export default StorageService;