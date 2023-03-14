/**
 * function convertBase64
 * @param {Blob} file - file user uploaded
 * @return {Object} Promise - return resolve or reject
 */
function convertBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
  });
}
export default convertBase64;
