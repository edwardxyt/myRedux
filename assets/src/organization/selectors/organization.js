import { VisibilityFilters } from '../actions/todo'

const getTrees = (state) => state.postsByTrees;

export const getAllTeers = createSelector(
    [ getTrees ],
    ( postsByTrees ) => {
        return postsByTrees
    }
)
