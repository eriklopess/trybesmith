import Joi from 'joi';

export default Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': '422|Username must be a string',
    'string.min': '422|Username must be longer than 2 characters',
    'any.required': '400|Username is required' }),
  classe: Joi.string().min(3).required().messages({
    'string.base': '422|Classe must be a string',
    'string.min': '422|Classe must be longer than 2 characters',
    'any.required': '400|Classe is required' }),
  level: Joi.number().strict().integer().min(1)
    .required()
    .messages({
      'number.base': '422|Level must be a number',
      'number.min': '422|Level must be greater than 0',
      'any.required': '400|Level is required' }),
  password: Joi.string().min(8).required().messages({
    'string.base': '422|Password must be a string',
    'string.min': '422|Password must be longer than 7 characters',
    'any.required': '400|Password is required' }),
});