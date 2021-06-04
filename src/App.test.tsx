import React, { Component } from "react";
import { render } from "react-dom";
import ImagePicker from "react-image-picker";

import img1 from "./assets/images/kitten/200.jpg";
import img2 from "./assets/images/kitten/201.jpg";
import img3 from "./assets/images/kitten/202.jpg";
import img4 from "./assets/images/kitten/203.jpg";

const imageList = [img1, img2, img3, img4];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      images: [],
      max_images: [],
      max_message: "",
    };
  }

  onPickImage(image) {
    this.setState({ image });
  }

  onPickImages(images) {
    this.setState({ images });
  }

  onPickImagesWithLimit(max_images) {
    this.setState({ max_images });
  }

  onPickMaxImages(last_image) {
    let image = JSON.stringify(last_image);
    let max_message = `Max images reached. ${image}`;

    this.setState({ max_message });
  }


  return (
    <div>
      <h1>React Image Picker</h1>

      <h3>Multiple Select</h3>
      <ImagePicker
        images={imageList.map((image, i) => ({ src: image, value: i }))}
        onPick={this.onPickImages.bind(this)}
        multiple
      />
      <textarea
        rows="4"
        cols="100"
        value={this.state.images && JSON.stringify(this.state.images)}
        disabled
      />
    </div>
  );
}

export default App;