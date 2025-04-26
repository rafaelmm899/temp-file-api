import Joi from 'joi';

const uploadFileSchema = Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string().valid('image/jpeg', 'image/png').required(),
    size: Joi.number()
        .max(5 * 1024 * 1024)
        .required(), // 5MB máximo
}).unknown();

export default uploadFileSchema;
