import React from 'react';
import {View, Text, Button} from 'react-native';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';

const FileViewerComponent = ({fileUrl, fileType}) => {
  const downloadAndOpenFile = async () => {
    const localFilePath = `${RNFS.DocumentDirectoryPath}/downloadedFile.${fileType}`;

    try {
      const result = await RNFS.downloadFile({
        fromUrl: fileUrl,
        toFile: localFilePath,
      });

      if (result.statusCode === 200) {
        // File downloaded successfully, now open it
        FileViewer.open(localFilePath, {showOpenWithDialog: true});
      } else {
        console.error('Failed to download file');
      }
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  return (
    <View>
      <Text>This is the File Viewer Component</Text>
      <Button title="Open File" onPress={downloadAndOpenFile} />
    </View>
  );
};

export default FileViewerComponent;
