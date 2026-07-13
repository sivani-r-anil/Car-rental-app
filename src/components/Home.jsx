import React from "react";
import NavigationBar from "./NavigationBar";

const Home = () => {
  return (
    <div>
      <NavigationBar />

      <div className="container mt-5">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="text-danger fw-bold">
              Welcome to Car Rental App
            </h1>

            <p className="mt-3">
              Find the perfect car for your trip. We provide safe,
              comfortable, and affordable rental cars for every journey.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
              alt="Car"
              className="img-fluid rounded"
            />
          </div>

        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row text-center">

          <div className="col-md-4">
            <h4 className="text-danger">🚗 Cars</h4>
            <p>Wide range of rental cars.</p>
          </div>

          <div className="col-md-4">
            <h4 className="text-danger">💰 Price</h4>
            <p>Affordable rental plans.</p>
          </div>

          <div className="col-md-4">
            <h4 className="text-danger">⭐ Service</h4>
            <p>Fast and reliable booking.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;