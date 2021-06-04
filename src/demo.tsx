import React, { Component } from "react";
import ImagePicker from "./react-image-picker";

import img1 from "./assets/images/cars/versa.jpeg";
import img2 from "./assets/images/cars/crv.jpeg";
import img3 from "./assets/images/cars/civic.jpeg";
import img4 from "./assets/images/cars/tiguan.jpg";
import img5 from "./assets/images/cars/sentra.jpeg";
import img6 from "./assets/images/cars/vento.jpeg";
import img7 from "./assets/images/cars/spark.jpeg";
import img8 from "./assets/images/cars/spark.jpeg";

const data = [
  {
    description: " change of suspension",
    make: "Nissan",
    model: "Versa",
    estimatedate: "2021/12/01",
    id: 3340,
    image: "http://3.23.108.188/cars/versa.jpg",
  },
  {
    description: " motor adjustment",
    make: " Honda ",
    model: "CR-V",
    estimatedate: "",
    id: 3341,
    image: "http://3.23.108.188/cars/CR-V.jpg",
  },
  {
    description: " engine tuning ",
    make: "Honda",
    model: "Civic",
    estimatedate: "2020/20/12",
    id: 3342,
    km: 90000,
    image: "http://3.23.108.188/cars/civic.jpg",
  },
  {
    description: " oil change ",
    make: " Volkswaguen",
    model: "Tiguan",
    km: 13500,
    id: 3343,
    image: "http://3.23.108.188/cars/tiguan.jpg",
  },
  {
    description: " change of pads ",
    make: " Nissan ",
    model: "Sentra",
    km: 6000,
    id: 3344,
    image: "http://3.23.108.188/cars/sentra.jpg",
  },
  {
    description: " change of pads ",
    make: "Volkswagen",
    model: "Vento",
    km: 80050,
    id: 3345,
    image: "http://3.23.108.188/cars/vento.jpg",
  },
  {
    description: "Change Transmission (CVT)",
    make: "Chevrolet",
    model: "Aveo NG",
    estimatedate: "2021/09/07",
    km: 33460,
    image: "http://3.23.108.188/cars/aveo.jpg",
  },
  {
    description: "Change ligths",
    make: "Chevrolet",
    model: "Spark",
    km: 16098,
    id: 3347,
    image: "http://3.23.108.188/cars/spark.jpg",
  },
];

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.onPick = this.onPick.bind(this);
  }

  onPick(images) {
    this.setState({ images });
  }

  render() {
    let mivar = null;
    if (this.state.images) mivar = JSON.stringify(this.state.images);
    return (
      <div>
        <ImagePicker
          images={imageList.map((image, i) => ({ src: image, value: i }))}
          onPick={this.onPick}
          multiple
        />
        <button
          type="button"
          onClick={() => {
            this.mantenimiento = this.state.value;
            console.log(mivar);
          }}
        >
          Mantenimento
        </button>
        {mivar}
      </div>
    );
  }
}

export default Demo;
