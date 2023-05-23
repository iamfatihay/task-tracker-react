import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = ({array,setArray}) => {
// console.log(array);

  const Update=(id)=>{

    const updatedArray = array.map((gorev)=>{
      if(gorev.id===id){
        return {...gorev,bitti:!gorev.bitti};
      }
        return gorev;
    })
    setArray(updatedArray);
  }

  const Delete = (id) => {
    const updatedArray = array.filter(gorev => gorev.id !== id);
    setArray(updatedArray);
  };


  return (
    <div>
      {array.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No Task to show, good job!</p>
      ) : (
        array.map((x) => (
          <div
            key={x.id}
            className={`${x.bitti ? "done" : "gorev"}`}
            onDoubleClick={() => Update(x.id)}
          >
            <h3>
              {x.text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => Delete(x.id)}
              />
            </h3>
            <h6>{x.day}</h6>
          </div>
        ))
      )}
    </div>
  );
};

export default GorevleriGoster;
