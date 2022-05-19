/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Image, media} from 'react-native-pytorch-core';
import useImageFromBundle from '../../../utils/useImageFromBundle';

function arrayEqual(array1: Uint8Array, array2: Uint8Array) {
  if (array1 === array2) {
    return true;
  }

  if (array1.length !== array2.length) {
    console.log(
      'size not matched: array1: ' +
        array1.length +
        ', array2: ' +
        array2.length,
    );
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

export default function BlobExample() {
  const loadingState = 'Loading';
  const [testState, setTestState] = useState<string>(loadingState);

  const wbrgbImage = useImageFromBundle(
    require('../../../../assets/images/wbrgb_255_170_85_5x3.png'),
  );

  useEffect(() => {
    if (wbrgbImage !== undefined && testState === loadingState) {
      const blob = media.toBlob(wbrgbImage as Image);
      const jsonData = require('./wbrgbImageUint8Array.json');
      let arrayData = Uint8Array.from(Object.values(jsonData));
      if (arrayEqual(blob.arrayBuffer(), arrayData)) {
        setTestState('Test Passed');
      } else {
        setTestState('Test Failed');
      }

      const convertedImage = media.imageFromBlob(
        blob,
        wbrgbImage.getWidth(),
        wbrgbImage.getHeight(),
      );
      console.log(convertedImage.getWidth());
    }
  }, [wbrgbImage, testState]);

  return <Text style={styles.textArea}>{testState}</Text>;
}

const styles = StyleSheet.create({
  textArea: {
    alignSelf: 'center',
    marginTop: 100,
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
