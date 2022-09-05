import React,{ useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Fraction from "./Fraction";
import FractionForm from "./FractionForm";
import { fetchFractionsAsync, selectFractions, selectStatus, Statuses } from "./fractionSlice";

function Fractions() {
    const fractions = useAppSelector(selectFractions);
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
          contents = <div>
                  <h3>{status}</h3>
                  <table className="table table-info table-bordered table-striped table-hover">
                  <thead className="table-primary">
                    <tr>
                      <th>Name</th>
                      <th>Primär</th>
                      <th>Sekundär</th>
                      <th>Perleffekt</th>
                      <th>Reifenqualm</th>
                      <th>Unterbodenbeleuchtung</th>
                      <th>Vertrag bis</th>
                      <th>inkl. Kennzeichen</th>
                      <th>Aktualisiert am</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                  {fractions && fractions.length > 0 && fractions.map(fraction => {
                      return (
                        
                          <Fraction 
                            dispatch={dispatch}
                            fraction = {fraction}
                            // date = {fraction.updated_at}
                            key = {fraction.id}
                          />
                         )
                   })}
                   </tbody>
                  </table>
                 
                  </div>

        
      }
    return (
      <div><h1>Fraktionen</h1>
        {contents}
        <FractionForm />
      </div>
    )
  }

export default Fractions;