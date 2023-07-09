import React from 'react';
import './Modal.css';
import { HiOutlineArrowSmRight } from "react-icons/hi";


const Modal = ({ onClose, children, id }) => {

  let selectedItem = children.filter((item) => item.id === id);
  console.log(selectedItem);
  console.log(id);

  return (
    <div className="modal active-modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>
          &times;
        </span>

        <div>
          
            <div>
              <h1>{selectedItem[0].title}</h1>
              <h4>{selectedItem[0].description}</h4>

  <div className="modalButton">

                {selectedItem[0].hasCode &&
              
              
              <a href={selectedItem[0].Code} target='blank'>
                 <button className="project__button" >
                Code <HiOutlineArrowSmRight className="project__button-icon" />
              </button>
              </a>
              }
              
             {selectedItem[0].hasDemo && 
             
              <a href={selectedItem[0].Demo} target='blank'>
                 <button className="project__button" >
                Live Demo <HiOutlineArrowSmRight className="project__button-icon" />
              </button>
              </a>
              }


</div>


              
              
              
              <div className="modal__technologies">
                <hr></hr>
                <div className=" parted">
                    <h5 style={{fontSize:'15px'}}>Skills:</h5>
                    <span className='modal__technologies technology-icon'>{selectedItem[0].technologies}</span>
                </div>
                
              </div>
              
            </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
