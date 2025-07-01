# FaceApp

A React Native application that demonstrates real-time face detection capabilities using the device's camera or photo library.

## Features

- 📸 Take photos using device camera
- 🖼️ Select images from photo library
- 👤 Real-time face detection
- 📐 Face bounding box visualization
- 📱 Cross-platform (iOS & Android)

## Prerequisites

- Node.js (v14 or newer)
- Xcode (for iOS development)
- Android Studio (for Android development)
- React Native development environment set up

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/FaceApp.git
cd FaceApp
```

2. Install dependencies:

```bash
yarn install
```

3. Install iOS dependencies:

```bash
cd ios
bundle install
pod install
cd ..
```

## Running the App

### iOS

```bash
yarn ios
```

### Android

```bash
yarn android
```

## Development

Start the Metro bundler:

```bash
yarn start
```

## Available Scripts

- `yarn start` - Start the Metro bundler
- `yarn ios` - Run the app on iOS simulator
- `yarn android` - Run the app on Android emulator
- `yarn test` - Run tests
- `yarn lint` - Run ESLint

## Dependencies

- react-native-face-detection
- react-native-image-picker
- React Native 0.70.4
- React 18.1.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## About

FaceApp is a React Native application that showcases face detection capabilities. It allows users to either take a photo using their device's camera or select an image from their photo library. The app then processes the image to detect faces and displays bounding boxes around detected faces.

The project uses:

- React Native for cross-platform mobile development
- react-native-face-detection for face detection capabilities
- react-native-image-picker for camera and photo library access

This project serves as a demonstration of implementing face detection in a React Native application and can be used as a starting point for more complex face-related features.
