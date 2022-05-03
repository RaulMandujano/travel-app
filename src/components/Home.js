import React from "react";
import "../components/Home.css";
import Card from "../components/Card";
import Title from "../components/Title";
import OneCard from "../components/OneCard";


const Home = () => {
  return (
    <div className="home">
      <Title title="Live anywhere"/>
      <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720"
                title="Entire rental unit"
                description="Comfortable private places, with room for friends or family."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720"
                title="Entire townhouse"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720"
                title="Room in aparthotel"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720"
                title="Entire serviced apartment"
                description="Travel around the world with your Pet"
            />
      </div>

      <div className="home__section">
        <OneCard src="https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=1680"/>
      </div>

      <Title title="Experience the world" description="Activities to book with your upcoming stay." />
      <div className="home__section">
        <Card src="https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720" 
                title="Online Experiences" 
                description="Travel the world without leaving home"/>
        <Card src="https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720"
                title="Experiences" 
                description="Things to do whereever you are"/>
        <Card src="https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720"
                title="Adventures" 
                description="Multi-day trips with meals and stays."/>
      </div>
    </div>
  );
};

export default Home;