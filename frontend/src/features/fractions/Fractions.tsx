import React,{ useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Fraction from "./Fraction";
import { fetchFractionsAsync, selectFractions, selectStatus, Statuses } from "./fractionSlice";

function Fractions() {
    const fractions = useAppSelector(selectFractions);
    console.log(fractions);
    const status = useAppSelector(selectStatus);
    //Lädt den State von den Componenten
    const dispatch = useAppDispatch();

    // i have NO FUCKING IDEA
    useEffect(() => {
        dispatch(fetchFractionsAsync());
      }, [dispatch])

      let contents;

      if (status !== Statuses.UpToDate) {
          contents = <div>{status}</div>
      } else {
          contents = <div className="card">
              <div className="card-body">
                  <h3>{status}</h3>
                  {/** from goes here */}
                  {fractions && fractions.length > 0 && fractions.map(fraction => {

                      return <div key={fraction.id} style={{margin:"5em"}}>
                          <Fraction 
                            dispatch={dispatch}
                            fraction = {fraction}
                        
                          />
                      
                  </div>
                   })}
          </div>
          </div>
      }
    return (
      <div><h1>Fraktionen</h1>
        {contents}
      </div>
    )
  }

export default Fractions;