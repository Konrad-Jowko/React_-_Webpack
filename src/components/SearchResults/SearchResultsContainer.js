import {connect} from 'react-redux';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  let url = props.match.params.id;
  const searchString = url.replace('/search/','');

  return {
    cards: getCardsForSearchResults(state,searchString),
  };
};



export default connect(mapStateToProps)(SearchResults);
