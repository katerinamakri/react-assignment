import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    cursor: 'pointer',
    justifyContent: ' space-between',
    '&.Mui-selected.haveData,&.Mui-selected.haveData:hover': {
      backgroundColor: 'rgba(41, 150, 243, .3)'
    },
    '&:hover, &.Mui-selected,&.Mui-selected:hover': {
      backgroundColor: theme.palette.default.light
    },
    '&::selection': { backgroundColor: 'transparent' }
  }
});
const useStyles = makeStyles(styles);

const classes = useStyles();
const [selectedOptions, setSelect] = useState([]);

const EsaList = props => {
	// console.log(props)
	

  const handleSelect = value => {
    const currentIndex = selectedOptions.indexOf(value);
    const newSelectedOptions = [...selectedOptions];
    if (currentIndex === -1) {
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }
    setSelect(newSelectedOptions);
  };

  const isSelected = value => selectedOptions.includes(value);

	return (
    <List>
      {props.list.map(
        option => (
          <ListItem
            key={option}
            className={classes.listItem}
            selected={isSelected(option)}
            onClick={() => handleSelect(option)}
          >
            <ListItemText primary={`item-${option}`} />
          </ListItem>
        )
      )}
    </List>
	)
  // return isMulti ? <MultiSelect {...rest} /> : <SingleSelect {...rest} />;
};

EsaList.propTypes = {
	key: PropTypes.string,
  className: PropTypes.string,
  selected:PropTypes.func,   
  onClick: PropTypes.func,
};

export default EsaList;