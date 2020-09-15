import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import './collection.scss';

import { selectCollection } from '../../redux/shop/shopSelector';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(Collection);
