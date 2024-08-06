import {decode} from 'base64-arraybuffer';
import {S3} from 'aws-sdk';
// import {showMessage} from 'react-native-flash-message';
import fs from 'react-native-fs';
// upload to s3

const awsConfig = {
  accessKeyId: 'AKIATCKAN6C3DQW3GOXV',
  secretAccessKey: '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',
  region: 'us-east-2',
  signatureVersion: 'v4',
  Bucket: 'greenboom-bucket',
};

const useS3 = () => {
  const uploadImageOnS3 = async (file, onSuccessCallBack) => {
    let fileName = new Date().getTime().toString();
    console.log(fileName);
    const s3bucket = new S3(awsConfig);
    let contentType = 'image/jpeg';
    let contentDeposition = 'inline;filename="' + fileName + '"';
    console.log(contentDeposition);
    const base64 = await fs.readFile(file, 'base64');
    console.log({
      base64,
    });
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(async () => {
      const params = {
        Bucket: awsConfig.Bucket,
        Key: fileName,
        Body: arrayBuffer,
        ContentDisposition: contentDeposition,
        ContentType: contentType,
      };
      await s3bucket
        .upload(params)
        .promise()
        .then(data => {
          console.log(data.Location);
          onSuccessCallBack(data.Location);
          return data.Location;
        })
        .catch(err => {
          console.log(err);
          onSuccessCallBack(null);
          return null;
        });
    });
  };

  function uploadImage(image) {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //     console.log(`Uploaded ${image}`);
      //     resolve(); // Resolve the promise after uploading
      // }, Math.random() * 3000); // Simulate upload time with random delay (up to 3 seconds)
      uploadImageOnS3(image, url => {
        resolve(url);
      });
    });
  }

  return {
    uploadImageOnS3,
    uploadImage,
  };
};

export default useS3;
