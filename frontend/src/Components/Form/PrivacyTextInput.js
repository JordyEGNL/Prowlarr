import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import IconButton from 'Components/Link/IconButton';
import { icons } from 'Helpers/Props';
import translate from 'Utilities/String/translate';
import TextInput from './TextInput';
import styles from './PrivacyTextInput.css';

function PrivacyTextInput(props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible, setIsVisible]);

  // Prevent a user from copying (or cutting) the password from the input
  const onCopy = useCallback((e) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  }, []);

  return (
    <div className={styles.container}>
      <TextInput
        {...props}
        onCopy={onCopy}
        type={isVisible ? 'text' : 'password'}
      />

      <IconButton
        className={styles.toggle}
        name={isVisible ? icons.VIEW : icons.HIDE}
        title={translate('Toggle')}
        onPress={toggleVisibility}
      />
    </div>
  );
}

PrivacyTextInput.propTypes = {
  privacy: PropTypes.string
};

export default PrivacyTextInput;
