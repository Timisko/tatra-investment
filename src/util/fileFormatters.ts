// export function blobToBase64(blob: Blob) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//
//         reader.onload = () => {
//             const base64String = reader.result.split(',')[1];
//             resolve(base64String);
//         };
//
//         reader.onerror = () => {
//             reject(new Error('Unable to convert Blob to Base64'));
//         };
//
//         reader.readAsDataURL(blob);
//     });
// }