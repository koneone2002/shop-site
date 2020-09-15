import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import './collection.scss';

import { selectCollection } from '../../redux/shop/shopSelector';

const Collection = ({ collection }) => {
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(Collection);
