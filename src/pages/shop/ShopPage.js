import React from 'react';
import { Route } from 'react-router-dom';
// import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded
// } from '../../redux/shop/shopSelector';
// import WithSpinner from '../../components/spinner/withSpinner';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import CollectionContainer from '../../pages/collection/CollectionContainer';

import {
  // updateCollections,
  fetchCollectionsStartAsync
} from '../../redux/shop/shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebaseUtils';

class ShopPage extends React.Component {
  // state = {
  //   isLoading: true
  // };
  // This is before Thunk was added:
  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection('collections');
  //   // CollectionRef.onSnapshot(async snapshot => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   // });

  //   // Using Observable + Observer Pattern
  //   // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({ isLoading: false });
  //   // });

  //   collectionRef.get().then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     updateCollections(collectionsMap);
  //     this.setState({ isLoading: false });
  //   });
  // }
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
  //console.log(match.path);
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
