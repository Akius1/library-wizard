import React from 'react';
import { connect } from "react-redux";
import AddSubgenre from './addSubgenre';
import Genre from './genre';
import Information from './information';
import SubGenre from './subGenre';
import SuccessPage from './successPage';

const LandingPage = ({genres_state}) => {
    console.log(genres_state.pages)
    switch (genres_state.pages) {
        case 1:
          return (
           <Genre />
          );
        case 2:
          return (
           <SubGenre />
          );
        case 3:
          return (
            <AddSubgenre />
          );
        case 4:
          return (
            <Information />
          );
        case 5:
          return (
            <SuccessPage />
          );
          default:
            break;
      }
}


export default connect((state) => ({
    genres_state: state.wizard_reducer,
  }))(LandingPage);