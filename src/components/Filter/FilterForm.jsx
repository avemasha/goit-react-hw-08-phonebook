import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';

import { changeFilter } from 'redux/filterSlice';
import { Input, Label, Paragraph } from './FilterForm.styled';

export const FilterForm = () => {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Label>
      <Paragraph>
      Enter contact name{' '}<span role="img" aria-label="Searching icon">
            👀
          </span>
          </Paragraph>
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};
