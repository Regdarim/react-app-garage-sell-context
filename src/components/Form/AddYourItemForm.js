import React, { useContext } from "react";
import AppContext from "../../context/context";

const AddYourItemForm = props => {
  const context = useContext(AppContext);
  const { addGarageItem } = context;

  return (
    <>
      <h2 className="title is-4 has-text-centered	">Add Your Item</h2>

      <form id="close" onSubmit={addGarageItem}>
        <div className="column">
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Title"
            value="Baby Yoda"
          />
          <input
            className="input "
            type="text"
            name="desc"
            placeholder="Description"
            value="The Child, colloquially known as Baby Yoda among fans and the media, is a fictional character from the Star Wars Disney+ original television series The Mandalorian."
          />
          <input
            className="input"
            type="text"
            name="price"
            placeholder="Price"
            value="Priceless"
          />
          <input
            className="input"
            type="text"
            name="itemImage"
            placeholder="put your image source"
            value="https://cdn.vox-cdn.com/thumbor/oS1KzbdusRO2_VaqpdDuZ22fO58=/152x62:1340x953/1200x800/filters:focal(615x92:829x306)/cdn.vox-cdn.com/uploads/chorus_image/image/66220207/the_child_star_wars_gallery_5e3204be4f668.0.jpg"
          />
          <div className="column has-text-centered">
            <button className="button is-primary" type="submit">
              Add Item
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddYourItemForm;
