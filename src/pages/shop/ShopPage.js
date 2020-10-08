import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import WithSpinner from '../../components/spinner/withSpinner';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import Collection from '../../pages/collection/Collection';
import { updateCollections } from '../../redux/shop/shopActions';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebaseUtils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // CollectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    // });
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
  //console.log(match.path);
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
