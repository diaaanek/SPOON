import React, { Component } from "react";
import "../layouts/SwipeContainer.css";
import Swipeable from "react-swipy";
import Card from "../components/Card";
import Button from "../components/Button";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import styled from "styled-components";
import { Like, SuperLike, Ignore } from "../components/icons";
import { CicleButton } from "../components/circle-button";
// Swipable is the library that controls the swipe actions

const wrapperStyles = { position: "relative", width: "275px", height: "400px" };

const actionsStyles = {
  justifyContent: "space-between",
  marginTop: "160px"
};

class SwipeContainer extends Component {
  swipeHandler = direction => {
    // eslint-disable-next-line eqeqeq
    if (direction == "left") {
      this.props.dislike();
    } else {
      this.props.like("7", this.props.shortlist[0]);
    }
  };
  // 7 is in place of the event - for fun?
  state = {
    currentCard: 0,
    cards: this.props.shortlist
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));
  render() {
    const { cards } = this.state;
    return (
      <div className="SwipeContainer">
        {this.props.shortlist.length > 0 ? (
          <div className="appStyles">
            <div style={wrapperStyles}>
              {this.props.shortlist.length > 0 && (
                <div style={wrapperStyles}>
                  <Swipeable
                    buttons={({ right, left }) => (
                      <div style={actionsStyles}>
                        <svg height={0} width={0}>
                          <defs>
                            <linearGradient
                              id="svg-fill-linear__nope"
                              x1="0"
                              x2="0.7071067811865475"
                              y1="0.7071067811865476"
                              y2="0"
                              spreadMethod="pad"
                            >
                              <stop offset="0%" stopColor="#ff7854" />
                              <stop offset="100%" stopColor="#fd267d" />
                            </linearGradient>
                            <linearGradient
                              id="svg-fill-linear__super-like"
                              x1="0"
                              x2="0.7071067811865475"
                              y1="0.7071067811865476"
                              y2="0"
                              spreadMethod="pad"
                            >
                              <stop offset="0%" stopColor="#08d0ff" />
                              <stop offset="100%" stopColor="#3ca4ff" />
                            </linearGradient>
                            <linearGradient
                              id="svg-fill-linear__like"
                              x1="0"
                              x2="0.7071067811865475"
                              y1="0.7071067811865476"
                              y2="0"
                              spreadMethod="pad"
                            >
                              <stop offset="0%" stopColor="#7cf4f5" />
                              <stop offset="100%" stopColor="#01df8a" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <ActionBarWrapper>
                          <ActionButtonWrapper>
                            <CicleButton small onClick={left}>
                              <Ignore />
                            </CicleButton>
                          </ActionButtonWrapper>
                          <ActionButtonWrapper>
                            <CicleButton onClick={right}>
                              <SuperLike />
                            </CicleButton>
                          </ActionButtonWrapper>
                          <ActionButtonWrapper>
                            <CicleButton small onClick={right}>
                              <Like />
                            </CicleButton>
                          </ActionButtonWrapper>
                        </ActionBarWrapper>
                      </div>
                    )}
                    onSwipe={this.swipeHandler}
                    onAfterSwipe={this.remove}
                  >
                    <Card style={{ height: "500px" }}>
                      <img
                        className="RestImage"
                        alt="restaurant"
                        src={this.props.shortlist[0].image}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          left: "16px",
                          textAlign: "left"
                        }}
                      >
                        <h1
                          style={{
                            fontWeight: "500",
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                            fontSize: "23px",
                            color: "white"
                          }}
                        >
                          {this.props.shortlist[0].name}
                        </h1>

                        <h3
                          style={{
                            fontWeight: "500",
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                            fontSize: "17px",
                            color: "white"
                          }}
                        >
                          {" "}
                          {this.props.shortlist[0].location1.display_address.join()}
                        </h3>
                        <div className="react-rater-star">
                          <b>
                            <Rater
                              total={5}
                              rating={this.props.shortlist[0].rating}
                              interactive={false}
                            />
                          </b>
                        </div>
                      </div>
                    </Card>
                  </Swipeable>

                  {this.props.shortlist.length > 1 && (
                    <Card zIndex={-1}>{cards[1]}</Card>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h1> FILLING YOUR PLATE... </h1>
            <img
              src="https://media1.giphy.com/media/3o6j8zoXO0TL2CSp7W/source.gif"
              alt="pizza-loader"
              height="500"
            />
          </div>
        )}
      </div>
    );
  }
}

export default SwipeContainer;

const ActionBarWrapper = styled.div`
  display: flex;

  width: 100%;

  @media (min-width: 768px) {
    width: 375px;
  }

  padding-top: 12px;
`;

const ActionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin: 8px;
`;
