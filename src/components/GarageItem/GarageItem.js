import React, { useContext } from "react";
import AppContext from "../../context/context";

const GarageItem = props => {
  const { title, price, image, desc, id } = props;
  const context = useContext(AppContext);
  const { deleteGarageItem, toggleManager, counter } = context;

  //////////RETURN SEGMENTS////////////////////RETURN SEGMENTS////////////////////RETURN SEGMENTS//////////

  const _renderImageSubColumn = () => (
    <div className="column is-one-third ">
      <figure className="image is-3by4  is-flex ">
        <img src={image} alt={`Authenthic Pictures ${title}`} />
      </figure>
      <div className="column has-text-centered">
        <button
          className="button is-info"
          id="askQuestionModal"
          onClick={toggleManager}
        >
          Ask Question
        </button>
      </div>
    </div>
  );

  const _renderDescSubColumn = () => (
    <div className="column ">
      <p className="title is-2 ">{title}</p>
      <div className="container">
        <button className="button is-danger is-inline" onClick={counter}>
          Buy Now
        </button>
        <p className="subtitle is-3 is-inline column">{price}</p>
      </div>
      <div className="column"></div>
      <hr />
      <p className="content is-size-6">{desc}</p>
    </div>
  );

  const _renderMainColumn = () => (
    <div className="column is-two-thirds box ">
      <button
        className="delete is-small is-pulled-right"
        onClick={() => deleteGarageItem(id)}
      ></button>
      <div className="column columns">
        {_renderImageSubColumn()}
        {_renderDescSubColumn()}
      </div>
    </div>
  );
  //////////RETURN SEGMENTS END////////////////////RETURN SEGMENTS////////////////////RETURN SEGMENTS//////////

  return (
    <div className="columns ">
      <div className="column"></div>
      {_renderMainColumn()}
      <div className="column"></div>
      <hr />
    </div>
  );

  // return (
  //   <div className="box section">
  //     <article className="media">
  //       <div className="media-content ">
  //         <div className="columns">
  //           <div className=" column is-one-quarter">
  //             <figure className="image is-128x128 is-flex">
  //               <img src={image} alt={`Authenthic Pictures ${title}`} />
  //             </figure>
  //           </div>
  //           <div className="section coulumn is-one-half">
  //             <h2 className="title is-4 ">{title}</h2>
  //             <h3 className="title is-6 ">Price:{price}</h3>
  //           </div>
  //         </div>
  //         <div className="">
  //           <p className="has-text-grey  column ">{desc}</p>
  //         </div>

  //         <div className="columns">
  //           <div className="column">
  //             <button className="button is-primary" onClick={counter}>
  //               Buy Now
  //             </button>
  //           </div>
  //           <div className="column">
  //             <button className="button is-info  " onClick={toggleModal}>
  //               Ask Question
  //             </button>
  //           </div>
  //           <div className="column">
  //             <button
  //               className="button is-danger  "
  //               onClick={() => deleteItem(id)}
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </article>
  //   </div>
  // );
};
export default GarageItem;
