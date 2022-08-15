import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../../app/store";
import { createFraction, fetchFractions } from './fractionAPI';

export enum Statuses {
    Initial = "Nicht geladen",
    Loading = "Wird geladen",
    UpToDate = "Aktuell",
    Deleted = "Gelöscht",
    Error = "Error"
}

export interface FractionFormData{
    fraction: {
        id?: string;
        name: string,
        primary: string,
        secondary: string,
        pearl: string,
        smoke: string,
        lights: string,
        contract: any,
        plate: any,
      }
}
// Beschreibung EINE Fraktion
export interface FractionState{
    id?: number;
    name?: string;
    primary?: string;
    secondary?: string;
    pearl?: string;
    smoke?: string;
    lights?: string;
    contract?: any;
    plate?: any;
    created_at?: any;
    updated_at?: any;
    // "url": "http://localhost:3000/fractions/1.json"
}

//Beschreibung aller Fraktionen. Fraktion ist ein Teil von Fraktionen inkl den dazugehörigen Status
export interface FractionsState{
    fractions: FractionState[]
    status: string;
}
// InitialState gehört zu FractionsState und wird hier initialisiert
const initialState: FractionsState = {
    fractions:[
        {
        id: 0,
        name: "",
        primary: "",
        secondary: "",
        pearl: "",
        smoke: "",
        lights: "",
        contract: "",
        plate: false,
        created_at: "",
        updated_at: "",
        }
    ],
    // Initial Status wird gesetzt
    status: Statuses.Initial
}

//??
export const fetchFractionsAsync = createAsyncThunk(
    //api/function
    'fractions/fetchFractions',
    async () => {
        const response = await fetchFractions();
        return response;
    }
)

export const createFractionAsync = createAsyncThunk(
    //api/function
    'fractions/createFraction',
    async (payload: FractionFormData) => {
        const response = await createFraction(payload);
        return response;
    }
)

//TODO: name of slice, was passiert mit den Daten/state
export const fractionSlice = createSlice({
    name: "fractions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFractionsAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            //missed the action the whole time
            .addCase(fetchFractionsAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.fractions = action.payload;
                    draftState.status = Statuses.UpToDate;
                })
            })
            .addCase(fetchFractionsAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
            .addCase(createFractionAsync.pending, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Loading;
                })
            })
            .addCase(createFractionAsync.fulfilled, (state, action) => {
                return produce(state, (draftState) => {
                    draftState.fractions.push(action.payload);
                    draftState.status = Statuses.UpToDate;
                })
            })            
            .addCase(createFractionAsync.rejected, (state) => {
                return produce(state, (draftState) => {
                    draftState.status = Statuses.Error;
                })
            })
    }
})

//Synchactions
export const {} = fractionSlice.actions;
//state von Status und Fractions initieren
export const selectFractions = (state: RootState) => state.fractions.fractions;
export const selectStatus = (state: RootState) => state.fractions.status;

export default fractionSlice.reducer;