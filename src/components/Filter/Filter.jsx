import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styles';

export function Filter({ handleChange, filter }) {
  return (
    <>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
        />
      </FilterLabel>
    </>
  );
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
