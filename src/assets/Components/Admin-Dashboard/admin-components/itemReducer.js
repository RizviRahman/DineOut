// Item reducer
export default function itemReducer(state, action) {
    // Item reducer actions
    const ACTIONS = {
        SET_ITEMS: 'set_items',
        ADD_ITEM: 'add_item',
        UPDATE_ITEM: 'update_item',
        REMOVE_ITEM: 'remove_item',
        SET_ITEM_FORM: 'set_item_form',
        RESET_ITEM_FORM: 'reset_item_form'
    };

  switch (action.type) {
    case ACTIONS.SET_ITEMS:
      return { ...state, items: action.payload };
    case ACTIONS.ADD_ITEM:
      return { 
        ...state, 
        items: [...state.items, action.payload],
        itemForm: { id: null, name: '', price: '' }
      };
    case ACTIONS.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(it => 
          it.id === action.payload.id ? action.payload : it
        ),
        itemForm: { id: null, name: '', price: '' }
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(it => it.id !== action.payload)
      };
    case ACTIONS.SET_ITEM_FORM:
      return { ...state, itemForm: action.payload };
    case ACTIONS.RESET_ITEM_FORM:
      return { ...state, itemForm: { id: null, name: '', price: '', image: '' } };
    default:
      return state;
  }
}
