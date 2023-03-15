/**
 * function convertBase64
 * @param {Blob} file - file user uploaded
 * @return {Object} Promise - return resolve or reject
 */
const convertBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
  });

export { convertBase64 };
