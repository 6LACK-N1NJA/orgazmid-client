import Immutable from 'seamless-immutable';
import * as types from './actionTypes.js';

const initialState = Immutable({
  mindsets: [],
  isLoading: false,
  error: null
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.MINDSETS_SET: {
      return(state.merge({actions: action.mindsets, isLoading: false}))
    }
    case types.MINDSETS_RESET: {
      return(state.merge(initialState));
    }
    case types.MINDSETS_ERROR: {
      return (state.merge({error: action.error}))
    }
    case types.MINDSETS_IS_LOADING: {
      return (state.merge({isLoading: true}))
    }
  }
}
