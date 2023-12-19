import React from 'react';

const SingleBirthday = ({ id, image, name, age, rem }) => {
  return (
    <>
      <div className='container'>
        <div className="d-flex justify-content-between ">
          <div className="left d-flex gap-3">
            <img
              className='rounded-5 mb-3'
              style={{
                width: "70px",
                height: "70px"
              }}
              src={image}
              alt=""
            />
            <div className="info">
              <h5>{name}</h5>
              <h6>{age}</h6>
            </div>
          </div>
          <div className="right">
            <button onClick={() => rem(id)} className="btn btn-danger">
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBirthday;
