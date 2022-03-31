import Joi from 'joi';

export default Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.base': '422|Name must be a string',
    'string.min': '422|Name must be longer than 2 characters',
    'any.required': '400|Name is required' }),
  amount: Joi.string().min(2).required().messages({
    'string.base': '422|Amount must be a string',
    'string.min': '422|Amount must be longer than 2 characters',
    'any.required': '400|Amount is required' }),
});