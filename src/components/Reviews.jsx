import React from 'react'
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import '../index.css'

const reviewsData = [
    {
        "id": 1,
        "name": "Sarah Trader",
        "image": "url-to-image-2.jpg",
        "rating": 5,
        "review": "Unbelievable gains! My profits soared after using Binary Smasher Bots. I'm on my way to financial freedom!"
      },
     
      {
        "id": 2,
        "name": "AlexInvestor",
        "image": "url-to-image-3.jpg",
        "rating": 4,
        "review": "Great tool, consistent results. It could use a bit more customization, but overall, I'm impressed!"
      },
     
      {
        "id": 3,
        "name": "CryptoGuru23",
        "image": "url-to-image-4.jpg",
        "rating": 5,
        "review": "Binary Smasher Bots worked wonders for my crypto trades! My portfolio has never looked better."
      },
      
      {
        "id": 4,
        "name": "Mark Profitson",
        "image": "url-to-image-5.jpg",
        "rating": 5,
        "review": "Turned my losses into gains overnight! Binary Smasher Bots are a game-changer for anyone serious about trading."
      },
    
      {
        "id": 5,
        "name": "TradingQueen",
        "image": "url-to-image-6.jpg",
        "rating": 5,
        "review": "Binary Smasher Bots made trading so much easier. I've recommended it to all my friends!"
      },
    
      {
        "id": 6,
        "name": "FinancialWizard42",
        "image": "url-to-image-7.jpg",
        "rating": 4,
        "review": "The bots are effective, but the user interface could be more intuitive. Still, the results speak for themselves."
      },
      
      {
        "id": 7,
        "name": "JaneInvestsSmart",
        "image": "url-to-image-8.jpg",
        "rating": 5,
        "review": "Binary Smasher Bots are my secret weapon for trading success. Easy to use, and the gains are unbeatable!"
      },
       {
        "id": 8,
        "name": "ProfitPioneer",
        "image": "url-to-image-9.jpg",
        "rating": 4,
        "review": "The bots are effective, but the user interface could be more intuitive. Still, the results speak for themselves."
      },
      
      {
        "id": 9,
        "name": "RobinTrader",
        "image": "url-to-image-10.jpg",
        "rating": 5,
        "review": "Binary Smasher Bots are my secret weapon for trading success. Easy to use, and the gains are unbeatable!"
      },
    
      {
        "id": 10,
        "name": "InvestProdigy",
        "image": "url-to-image-11.jpg",
        "rating": 5,
        "review": "I've tried many trading tools, but Binary Smasher Bots outshine them all. The ROI is impressive, and I'm a customer for life!"
      }
    // Add more reviews as needed
  ];
 
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
      <Carousel breakPoints={breakPoints}>
        {reviewsData.map((review) => (
          <StyledReviewItem key={review.id}>
            <img src={review.image} alt={`Avatar of ${review.name}`} />
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <div className="rating">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index}>&#9733;</span>
              ))}
            </div>
          </StyledReviewItem>
        ))}
      </Carousel>
    );
  };
  
  
  export default Reviews;
