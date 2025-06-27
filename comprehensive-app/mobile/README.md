# Mobile Application README

# Comprehensive Mobile App

## Overview

This mobile application is part of the Comprehensive App project, which includes a cloud-based backend and a web application. The mobile app is built using React Native and provides features such as device pairing, content sharing, popup notifications, and messaging.

## Features

- **Device Pairing**: Easily pair devices using QR code scanning or Bluetooth.
- **Content Sharing**: Share content seamlessly between devices.
- **Popup Notifications**: Receive real-time notifications for messages and alerts.
- **Messaging**: Send and receive messages in a user-friendly interface.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- React Native CLI
- Android Studio or Xcode (for Android and iOS development respectively)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the mobile directory:

   ```
   cd comprehensive-app/mobile
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the App

To run the app on an Android device or emulator:

```
npx react-native run-android
```

To run the app on an iOS device or simulator:

```
npx react-native run-ios
```

### Development

- The main entry point of the application is `App.js`.
- Components are located in the `src/components` directory.
- Screens are located in the `src/screens` directory.
- API calls are managed in the `src/utils/api.js` file.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.