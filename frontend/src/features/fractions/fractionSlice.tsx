import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "../../app/store";
import { fetchFractions } from './fractionAPI';

export enum Statuses {
    Initial = "Nicht geladen",
    Loading = "Wird geladen",
    UpToDate = "Aktuell",
    Deleted = "Gelöscht",
    Error = "Error"
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
    // contract?: any;
    // plate?: any;
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
        // contract: "",
        // plate: false,
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
        console.log(response);
        return response;
    }
)

//TODO: erklären
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
    }
})

//Synchactions
export const {} = fractionSlice.actions;
//state von Status und Fractions initieren
export const selectFractions = (state: RootState) => state.fractions.fractions;
export const selectStatus = (state: RootState) => state.fractions.status;

export default fractionSlice.reducer;