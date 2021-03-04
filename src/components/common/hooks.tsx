import { TypedUseSelectorHook, useSelector as untypedSelector } from 'react-redux';
import { GlobalStateType } from '../../redux/redux-store';


export const useSelector: TypedUseSelectorHook<GlobalStateType> = untypedSelector;