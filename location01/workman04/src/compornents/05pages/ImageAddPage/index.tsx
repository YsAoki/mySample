import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const ImageUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // ファイル選択処理
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    // 文字列データを追加
    formData.append('productName', productName);
    formData.append('productPrice', productPrice);

    try {
      const response = await axios.post('APIのURL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // レスポンス処理
    } catch (error) {
      console.error('アップロードに失敗しました', error);
    }
  };
  // ファイルを削除する関数
  const removeFile = (fileIndex: any) => {
    const newFiles = files.filter((_, index) => index !== fileIndex);
    setFiles(newFiles);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <input type="text" value={productName} onChange={e => setProductName(e.target.value)} placeholder="商品名" />
      <input type="text" value={productPrice} onChange={e => setProductPrice(e.target.value)} placeholder="価格" />
      <button onClick={handleSubmit}>商品をアップロード</button>
      <div>
        {/* 画像プレビュー */}
      </div>
    </div>
  );
};

export default ImageUpload;