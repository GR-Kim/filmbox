import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
    state = {
      nowPlaying: null,
      upcoming: null,
      popular: null,
      error: null,
      loading: true,
    };
  
    // 여기에 모든 로직을 추가 할 것이다. api 가져오기, error 처리 등
    
    render() {
      const { nowPlaying, upcoming, popular, error, loading } = this.state;
      return (
        <HomePresenter
          nowPlaying={nowPlaying}
          upcoming={upcoming}
          popular={popular}
          error={error}
          loading={loading}
        />
      );
    }
  }
  

export default HomeContainer;