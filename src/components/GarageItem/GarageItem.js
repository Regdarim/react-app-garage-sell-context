import React from "react";
import style from "./GarageItem.module.scss";

const GarageItem = props => (
  <div className="box section">
    <article className="media">
      <div className="media-content ">
        <div className="columns">
          <div className=" column is-one-quarter">
            <figure className="image is-128x128 is-flex">
              <img src={props.img} alt={`Authenthic Pictures ${props.title}`} />
            </figure>
          </div>
          <div className="section coulumn is-one-half">
            <h2 className="title is-4 ">{props.title}</h2>
            <h3 className="title is-6 ">Price:{props.price}</h3>
          </div>
        </div>

        {/* <p>{props.id}</p> */}
        <div className="">
          <p className="has-text-grey  column ">{props.desc}</p>
        </div>

        <div className="columns">
          <div className="column">
            <button className="button is-primary" onClick={props.counter}>
              Buy Now
            </button>
          </div>
          <div className="column">
            <button className="button is-info  " onClick={props.toggleModal}>
              Ask Question
            </button>
          </div>
          <div className="column">
            <button
              className="button is-danger  "
              onClick={() => props.deleteItem(props.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default GarageItem;
