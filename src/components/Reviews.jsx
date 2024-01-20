import React from 'react'
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import '../index.css'

import chamberlinImage from '../assets/reviewers/chamberlin.jpg';
import christyImage from '../assets/reviewers/christy.jpg';
import danielSidiImage from '../assets/reviewers/daniel-sidi.jpg';
import edwardSilaImage from '../assets/reviewers/edward-sila.jpg';
import prettyJoyImage from '../assets/reviewers/pretty-joy.jpg';
import trizaKamanuImage from '../assets/reviewers/triza-kamanu.jpg';



  const reviewsData = [
    {
      "id": 1,
      "name": "Chamberlin",
      "image": chamberlinImage,
      "rating": 5,
      "review": "Unbelievable gains! My profits soared after using Binary Smasher Bots. Hio binary smasher two imeweza"
    },
    {
      "id": 2,
      "name": "Christy",
      "image": christyImage,
      "rating": 4,
      "review": "Great tool, consistent results. It could use a bit more customization, but overall, I'm impressed!"
    },
    {
      "id": 3,
      "name": "Daniel Sidi",
      "image": danielSidiImage,
      "rating": 5,
      "review": "there was constant communacation untill i recieved every information i neede until i began making profits"
    },
    {
      "id": 4,
      "name": "Edward Sila",
      "image": edwardSilaImage,
      "rating": 5,
      "review": "Hii bot ndo nimeaminia nimetrade kama beginner kabisaa na bado nimemake profits "
    },
    {
      "id": 5,
      "name": "Pretty Joy",
      "image": prettyJoyImage,
      "rating": 5,
      "review": "Binary Smasher Bots made trading so much easier. I've recommended it to all my friends!"
    },
    {
      "id": 6,
      "name": "Triza Kamanu",
      "image": trizaKamanuImage,
      "rating": 4,
      "review": "The bots are effective, but the user interface could be more intuitive. Still, the results speak for themselves."
    },
  ];

  const StyledStar = styled.span`
  color: yellow; // Set the color to yellow or your desired color
`;
 
  const StyledReviewItem = styled.div`
  margin: 10px;
  padding: 20px;
  background-color:  #4169E1; /* Background color */
  color: white; /* Text color */
  text-align: center;
  border-radius: 10px; /* Rounded corners */

  img {
    width: 80px; /* Adjust the width of the image as needed */
    height: 80px; /* Adjust the height of the image as needed */
    border-radius: 50%; /* Make the image round */
    margin: 0 auto 10px; /* Center the image horizontally and add space at the bottom */
    display: block; /* Ensure proper centering */
  }

  h3 {
    font-size: 1.8em; /* Larger font size for the reviewer's name */
    margin-bottom: 8px; /* Add space between name and review text */
  }

  p {
    font-size: 1.4em; /* Larger font size for the review content */
  }

  .rating {
    font-size: 1.8em; /* Font size for the rating stars */
    margin-top: 10px; /* Add some space between review content and rating */
  }
`;


const Reviews = () => {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 3 },
    ];
  
    return (
      <div>
      <div className='w-full py-16 text-white px-4 flex flex-col items-center justify-center'>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Client Reviews</h1>
      <p className='text-center'>This is what our clients are saying. Firsthand accounts of remarkable results and unparalleled success achieved by trading with our cutting-edge bots</p>
    </div>
    
    <Carousel breakPoints={breakPoints}>
      {reviewsData.map((review) => (
        <StyledReviewItem key={review.id}>
          <img src={review.image} alt={`Avatar of ${review.name}`} />
          <h3>{review.name}</h3>
          <p>{review.review}</p>
          <div className="rating">
            {[...Array(review.rating)].map((_, index) => (
              <StyledStar key={index}>&#9733;</StyledStar>
            ))}
          </div>
        </StyledReviewItem>
      ))}
    </Carousel>
      </div>
    );
  };
  
  
  export default Reviews;
