import React, {useState, useCallback, useEffect} from 'react';
import {
  LocationMajor,
  SearchMinor,
  TickSmallMinor,
} from '@shopify/polaris-icons';

import {Page, Listbox, Button, Popover, Icon, TextField} from '../src';

import styles from './Playground.scss';

const tags = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
];

export function Playground() {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState(tags.slice(3, 7));
  const [filteredTags, setFilteredTags] = useState<string[]>(tags);
  const [active, setActive] = useState(false);

  const togglePopover = () => {
    setActive(!active);
  };

  const onClose = () => {
    setActive(false);
  };

  const handleFilterOptions = useCallback(
    (inputValue: string) => {
      if (inputValue === '') {
        setFilteredTags(selectedTags);
        return;
      }

      const filterRegex = new RegExp(inputValue, 'i');
      const nextFilteredTags = tags.filter((option) =>
        option.match(filterRegex),
      );

      setFilteredTags(nextFilteredTags);
    },
    [selectedTags],
  );

  const handleInputChange = useCallback((value) => {
    setInputValue(value);
  }, []);

  useEffect(() => {
    handleFilterOptions(inputValue);
  }, [inputValue, handleFilterOptions]);

  const handleSelect = useCallback(
    (selected) => {
      if (selectedTags.includes(selected)) {
        setSelectedTags(selectedTags.filter((option) => option !== selected));
      } else {
        setSelectedTags([selected, ...selectedTags]);
        handleInputChange('');
      }
    },
    [selectedTags, handleInputChange],
  );

  const optionMarkup =
    filteredTags.length > 0
      ? filteredTags.map((option) => {
          const selected = selectedTags.includes(option);
          return (
            <Listbox.Option key={option} value={option}>
              <Listbox.TextOption selected={selected}>
                <div className={styles.LocationPickerOption}>
                  <div className={styles.LocationPickerOptionName}>
                    <span>{option}</span>
                  </div>
                  {selected ? (
                    <div>
                      <Icon source={TickSmallMinor} color="interactive" />
                    </div>
                  ) : null}
                </div>
              </Listbox.TextOption>
            </Listbox.Option>
          );
        })
      : null;

  const listboxMarkup = optionMarkup ? (
    <Listbox
      accessibilityLabel="Find tags"
      onSelect={handleSelect}
      enableKeyboardControl
    >
      {optionMarkup}
    </Listbox>
  ) : null;

  const textFieldMarkup = (
    <div className={styles.LocationSearchFieldWrapper}>
      <TextField
        value={inputValue}
        label="Search tags"
        labelHidden
        autoComplete="on"
        placeholder="Search location name, city, region"
        prefix={<Icon source={SearchMinor} color="base" />}
        onChange={handleInputChange}
      />
    </div>
  );

  const popoverMarkup = (
    <div className={styles.LocationPickerPopover}>
      {textFieldMarkup}
      <div className={styles.LocationPickerListbox}>{listboxMarkup}</div>
    </div>
  );

  const activator = (
    <Button
      onClick={togglePopover}
      icon={LocationMajor}
      plain
      monochrome
      removeUnderline
      disclosure="down"
    >
      Locations
    </Button>
  );

  return (
    <Page title="Playground">
      <div className={styles.Wrapper}>
        <Popover
          activator={activator}
          active={active}
          onClose={onClose}
          autofocusTarget="first-node"
        >
          {popoverMarkup}
        </Popover>
      </div>
    </Page>
  );
}
