import * as React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Asset } from 'react-native-image-picker';
import ImagePickerButtons from './ImagePickerButtons';
import FaceOverlay from './FaceOverlay';
import { useFaceDetection } from './useFaceDetection';

export default function App() {
  const [imageObject, setImageObject] = React.useState<Asset | undefined>();
  const { imageSize, faceRects, faces, isLoading, setIsLoading, setFaceRects } =
    useFaceDetection(imageObject);

  return (
    <View style={styles.container}>
      {!isLoading &&
        imageObject &&
        imageSize?.width &&
        imageSize.height &&
        faceRects && (
          <>
            <FaceOverlay
              faceRects={faceRects}
              imageSize={imageSize}
              imageUri={imageObject.uri!}
            />
            {faces && faces.length > 0 && (
              <ScrollView style={styles.faceInfoContainer}>
                {faces.map((face, idx) => (
                  <View key={idx} style={styles.faceInfoBox}>
                    <Text style={styles.faceInfoTitle}>Face #{idx + 1}</Text>
                    <Text selectable style={styles.faceInfoText}>
                      {JSON.stringify(face, null, 2)}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            )}
          </>
        )}
      <View style={styles.buttonContainer}>
        <ImagePickerButtons
          onImagePicked={setImageObject}
          setIsLoading={setIsLoading}
          setFaceRects={setFaceRects}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  buttonContainer: {
    marginTop: 8,
  },
  faceInfoContainer: {
    marginTop: 16,
    width: '90%',
    maxHeight: 200,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 4,
  },
  faceInfoBox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  faceInfoTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  faceInfoText: {
    fontFamily: 'Courier',
    fontSize: 12,
  },
});
