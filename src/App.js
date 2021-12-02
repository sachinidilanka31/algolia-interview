import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  InfiniteHits,
  RatingMenu,
  RangeInput,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

import CustomRangeSlider from './components/CustomRangeSlider'

const searchClient = algoliasearch(
  '0OB3PVV3GC',
  'c7ad71c2668678f891117bb6e99eff37'
);

function App() {
  return (
    <div>
      <h1>
        <a href="/">Welcome to my shop!</a>
      </h1>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="ecom-shop">
          <SearchBox className="searchbox" />

          <div class="results">
            <div class="facets">
              
                <div className="facetName">Categories</div>
                <RefinementList attribute="categories" />
                
                <div className="facetName">Brand</div>
                <RefinementList attribute="brand" />

                <div className="facetName">Price</div>
                <CustomRangeSlider attribute="price"/>


                <div className="facetName">Rating</div>
                <RatingMenu attribute="rating" />
                </div>

              <div class="products">
                <InfiniteHits hitComponent={Hit}/>
              </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  console.log(props);
  return (
    <article>
      <img src={props.hit.image} alt={props.hit.name} class="image" />
      <p class="name">{props.hit.name} </p>
      <p class="price">£{props.hit.price} </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
