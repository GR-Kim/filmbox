import React from "react";
import { moviesApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    const parsedID = Number(id);
    if (isNaN(parsedID)) {
      return push("/");
    }
    //왜 const로 받으면 안되지?
    let result = null;
    try{
      if(isMovie){
        //data를 받으면 되는데 이를 result라는 이름으로 받음.
        ({data: result} = await moviesApi.movieDetail(parsedID));
      } else{
        ({data: result} = await tvApi.showDetail(parsedID));
      }
      
    }catch{
      this.setState({error: "Can't find anything"});
    }finally{
      this.setState({loading: false, result});
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}

export default DetailContainer;
