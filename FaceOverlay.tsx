import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { FaceRectType, ImageSizeType } from './utils';

interface FaceOverlayProps {
  faceRects: FaceRectType[];
  imageSize: ImageSizeType;
  imageUri: string;
}

const FaceOverlay: React.FC<FaceOverlayProps> = ({
  faceRects,
  imageSize,
  imageUri,
}) => {
  return (
    <ImageBackground
      source={{ uri: imageUri }}
      style={{ width: imageSize.width, height: imageSize.height }}
    >
      {faceRects.map((rect, index) => (
        <View
          key={index}
          style={[
            styles.box,
            {
              width: rect.width,
              height: rect.height,
              left: rect.x,
              top: rect.y,
            },
          ]}
        />
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'green',
    position: 'absolute',
  },
});

export default FaceOverlay;
