// import React, { useState, useEffect } from 'react';

// const DetailScreen = ({ imageUrl }) => {
//   const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);
//   const [imageExists, setImageExists] = useState(true);

//   useEffect(() => {
//     const img = new Image();
//     img.onload = () => setImageExists(true);
//     img.onerror = () => setImageExists(false);

//     // タイムスタンプを追加してキャッシュを回避
//     const timestamp = new Date().getTime();
//     img.src = `${imageUrl}?t=${timestamp}`;

//     setCurrentImageUrl(`${imageUrl}?t=${timestamp}`);
//   }, [imageUrl]);

//   return (
//     <div>
//       {imageExists ? (
//         <img src={currentImageUrl} alt="詳細画像" />
//       ) : (
//         <NoImageComponent />
//       )}
//     </div>
//   );
// };

// const NoImageComponent = () => {
//   return <div>NO IMAGE</div>;
// };

// export default DetailScreen;
