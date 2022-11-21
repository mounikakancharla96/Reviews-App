import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewTab: 0,
  }

  onClickLeftArrow = () => {
    const {activeReviewTab} = this.state

    if (activeReviewTab > 0) {
      this.setState(prevState => ({
        activeReviewTab: prevState.activeReviewTab - 1,
      }))
    }
  }

  getActiveReviewDetails = filteredReviewDetails => {
    const {imgUrl, username, companyName, description} = filteredReviewDetails

    return (
      <div className="review-item">
        <img src={imgUrl} alt={username} className="review-image" />
        <p className="review-name">{username}</p>
        <p className="review-company-name">{companyName}</p>
        <p className="review-description">{description}</p>
      </div>
    )
  }

  onClickRightArrow = () => {
    const {activeReviewTab} = this.state
    const {reviewsList} = this.props

    if (activeReviewTab < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewTab: prevState.activeReviewTab + 1,
      }))
    }
  }

  render() {
    const {activeReviewTab} = this.state
    const {reviewsList} = this.props
    const filteredReviewDetails = reviewsList[activeReviewTab]
    return (
      <div className="app-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          {this.getActiveReviewDetails(filteredReviewDetails)}
          <button
            type="button"
            className="arrow-btn"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
