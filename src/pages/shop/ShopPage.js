import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/spinner/withSpinner';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverviewContainer';
import Collection from '../../pages/collection/Collection';
import {
  // updateCollections,
  fetchCollectionsStartAsync
} from '../../redux/shop/shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebaseUtils';

const CollectionPageWithSpinner = WithSpinner(Collection);

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
    const { match, isCollectionLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
  //console.log(match.path);
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
