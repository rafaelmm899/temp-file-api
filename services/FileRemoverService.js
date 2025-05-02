import fs from 'node:fs';

const folderPath = process.env.UPLOAD_FOLDER;
export const FileRemoverService = () => {
    fs.readdir(folderPath, (err, files) => {
        files.forEach((file) => {
            let fileDate = new Date(getFileCreationDate(folderPath + '/' + file));
            let now = new Date();
            if (new Date(fileDate).setMinutes(fileDate.getMinutes() + 25) < now) {
                fs.unlink(folderPath + '/' + file, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    });
};

function getFileCreationDate(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.birthtime;
    } catch (error) {
        console.error(`Error getting file stats: ${error}`);
        return null;
    }
}
