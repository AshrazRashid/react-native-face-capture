import React from 'react';
import { View, Button } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  Asset,
} from 'react-native-image-picker';

interface ImagePickerButtonsProps {
  onImagePicked: (asset: Asset) => void;
  setIsLoading: (loading: boolean) => void;
  setFaceRects: (rects: any) => void;
  isLoading: boolean;
}

const ImagePickerButtons: React.FC<ImagePickerButtonsProps> = ({
  onImagePicked,
  setIsLoading,
  setFaceRects,
  isLoading,
}) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Button
        title="Camera"
        onPress={async () => {
          launchCamera(
            { mediaType: 'photo' },
            (response: ImagePickerResponse) => {
              if (response.didCancel) return;
              setFaceRects(undefined);
              setIsLoading(true);
              if (response.assets && response.assets.length > 0) {
                onImagePicked(response.assets[0]);
              } else {
                setIsLoading(false);
              }
            },
          );
        }}
        disabled={isLoading}
      />
      <Button
        title="Pick Image"
        onPress={async () => {
          launchImageLibrary(
            { mediaType: 'photo' },
            (response: ImagePickerResponse) => {
              if (response.didCancel) return;
              setFaceRects(undefined);
              setIsLoading(true);
              if (response.assets && response.assets.length > 0) {
                onImagePicked(response.assets[0]);
              } else {
                setIsLoading(false);
              }
            },
          );
        }}
        disabled={isLoading}
      />
    </View>
  );
};

export default ImagePickerButtons;
