import React from "react";
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
      searchField: ''
    };
  }

  render() {

      const { collections } = this.state;
    //   const filteredItems = collections.filter( collection => {
    //     return collection.items.name.toLowerCase().includes(searchField.toLowerCase())
    //   });

      return (
          <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
          </div>
      );
  }
}

export default ShopPage;
