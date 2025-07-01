import { useState, useEffect } from 'react';
import FaceDetection, {
  FaceDetectorContourMode,
  FaceDetectorLandmarkMode,
} from 'react-native-face-detection';
import { Asset } from 'react-native-image-picker';
import {
  calculateImageSize,
  calculateFaceRectInsideImage,
  ImageSizeType,
  FaceRectType,
} from './utils';

export function useFaceDetection(imageObject: Asset | undefined) {
  const [imageSize, setImageSize] = useState<ImageSizeType | undefined>();
  const [faceRects, setFaceRects] = useState<FaceRectType[] | undefined>();
  const [faces, setFaces] = useState<any[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const processImage = async () => {
      if (imageObject && imageObject.uri) {
        setIsLoading(true);
        const options = {
          landmarkMode: FaceDetectorLandmarkMode.ALL,
          contourMode: FaceDetectorContourMode.ALL,
        };
        const facesResult = await FaceDetection.processImage(
          imageObject.uri,
          options,
        );
        setFaces(facesResult);
        const imageSizeResult = calculateImageSize(
          imageObject.width as number,
          imageObject.height as number,
        );
        const faceRectResults: FaceRectType[] = facesResult.map(face =>
          calculateFaceRectInsideImage(face.boundingBox, imageSizeResult),
        );
        setImageSize(imageSizeResult);
        setFaceRects(faceRectResults);
        setIsLoading(false);
      }
    };
    processImage();
  }, [imageObject]);

  return { imageSize, faceRects, faces, isLoading, setIsLoading, setFaceRects };
}
