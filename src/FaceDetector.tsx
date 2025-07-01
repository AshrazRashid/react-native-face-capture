import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  ImageStyle,
} from "react-native";
import { Asset } from "react-native-image-picker";
import { useFaceDetection } from "./useFaceDetection";
import { FaceRectType } from "./utils";

export type FaceDetectorProps = {
  image: Asset | { uri: string; width?: number; height?: number } | undefined;
  onDetection?: (faces: any[] | undefined) => void;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  overlayColor?: string;
};

export const FaceDetector: React.FC<FaceDetectorProps> = ({
  image,
  onDetection,
  style,
  imageStyle,
  overlayColor = "rgba(0, 255, 0, 0.3)",
}) => {
  // Normalize image object for the hook
  const imageObject = image && "uri" in image ? image : undefined;
  const { imageSize, faceRects, faces, isLoading } =
    useFaceDetection(imageObject);

  useEffect(() => {
    if (onDetection) {
      onDetection(faces);
    }
  }, [faces, onDetection]);

  if (!imageObject || !imageObject.uri) return null;

  return (
    <View style={[styles.container, style]}>
      <Image
        source={{ uri: imageObject.uri }}
        style={[
          {
            width: imageObject.width || 300,
            height: imageObject.height || 400,
          },
          imageStyle,
        ]}
        resizeMode="contain"
      />
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
      {faceRects &&
        faceRects.map((rect: FaceRectType, idx: number) => (
          <View
            key={idx}
            style={[
              styles.faceRect,
              {
                left: rect.x,
                top: rect.y,
                width: rect.width,
                height: rect.height,
                borderColor: overlayColor,
              },
            ]}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  faceRect: {
    position: "absolute",
    borderWidth: 2,
    borderRadius: 4,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});

export default FaceDetector;
