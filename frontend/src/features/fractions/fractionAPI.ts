import { FractionFormData, FractionsState } from "./fractionSlice";

const API_URL = "http://localhost:3000";

// API CALL fetch, response, error
export async function fetchFractions() {
    return fetch(`${API_URL}/fractions.json`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .catch((error) => {
        console.log("Error:", error);
        return {} as FractionsState[]
    });
}

export async function createFraction(payload: FractionFormData) {
    const fraction = payload.fraction;
    return fetch(`${API_URL}/fractions.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       fraction
      })
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log("Error: ", error);
        return {} as FractionsState;
      });
  }