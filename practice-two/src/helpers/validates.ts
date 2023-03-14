import REGEX from '@/constants/regex';
import { INPUT_MESSAGES_VALIDATE } from '@/constants/messages';

/**
 * function validateNameEmpty
 * @param {String} value - value name input
 * @returns {Boolean} return message if value is empty
 */
const validateNameEmpty = (value: string) => {
  if (!value || value.trim().length === 0) {
    return INPUT_MESSAGES_VALIDATE.INPUT_EMPTY;
  }
  return '';
};

/**
 * function validateEmailRegex
 * @param {String} value - value email
 * @returns {Boolean} return true if value not match regex pattern
 */
const validateEmailRegex = (value: string) => {
  if (value.match(REGEX)) {
    return '';
  }
  return INPUT_MESSAGES_VALIDATE.EMAIL_INVALID;
};

export { validateEmailRegex, validateNameEmpty };
