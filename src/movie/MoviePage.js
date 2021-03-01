import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MoviePage.css";

const MoviePage = () => {
  const [movieData, setMovies] = useState([]);

  useEffect(async () => {
    await getMovies();
  }, []);

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=5c610e65606b746d319552972443b2fa&with_networks=213`;
    const res = await axios.get(url);

    setMovies(res);
    console.log(`res : ${JSON.stringify(res)}`);
    console.log(`movieData : ${JSON.stringify(movieData)}`);
    return res;
  };

  return (
    <div>
      <h1>MoviePage</h1>
      {/* {movieData.map((data) => (
        <p>{data.name}</p>
      ))} */}
      <div class="container">
        <div className="Row-posters">
          {/* ここ */}
          <div class="col-5">
            <div class="card">
              <img class="card-img-top" src="img1.jpg" alt="" />
              <div class="card-body">
                <h4 class="card-title">タイトル</h4>
                <p class="card-text">ここに説明が入ります。</p>
                <a href="#" class="btn btn-danger">
                  詳細
                </a>
              </div>
            </div>
          </div>

          {/* ここ */}
          <div class="col-5">
            <img class="card-img-top" src="img1.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">タイトル</h4>
              <p class="card-text">ここに説明が入ります。</p>
              <a href="#" class="btn btn-danger">
                詳細
              </a>
            </div>
          </div>

          <div class="col-5">
            <img class="card-img-top" src="img1.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">タイトル</h4>
              <p class="card-text">ここに説明が入ります。</p>
              <a href="#" class="btn btn-danger">
                詳細
              </a>
            </div>
          </div>

          <div class="col-5">
            <img class="card-img-top" src="img1.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">タイトル</h4>
              <p class="card-text">ここに説明が入ります。</p>
              <a href="#" class="btn btn-danger">
                詳細
              </a>
            </div>
          </div>

          <div class="col-5">
            <img class="card-img-top" src="img1.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">タイトル</h4>
              <p class="card-text">ここに説明が入ります。</p>
              <a href="#" class="btn btn-danger">
                詳細
              </a>
            </div>
          </div>

          <div class="col-5">
            <img class="card-img-top" src="img1.jpg" alt="" />
            <div class="card-body">
              <h4 class="card-title">タイトル</h4>
              <p class="card-text">ここに説明が入ります。</p>
              <a href="#" class="btn btn-danger">
                詳細
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MoviePage;
