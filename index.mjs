import { log } from "./log.mjs";
import { S3 } from '@aws-sdk/client-s3';

const s3Client = new S3({ region: 'us-east-2' });
export const handler = async (event, _) => {  
  const record = event.Record[0];
  const Bucket = record.s3.bucket.name;  
  const Key  = record.s3.object.key;
  const getObjectResult = s3Client.getObject({ 
    Bucket, Key 
  });

  const megaByte = 1024 * 1024;

  if (getObjectResult.contentLength > 1 * megaByte) {
    log("objeto muito grande");
    return ("objeto muito grande");
  }

  return "Objeto de tamanho OK";
};
