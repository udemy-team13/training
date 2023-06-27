import {BrowserRouter as Routes, Route, Link} from 'react-router-dom'

function Movielisting(props){
    //: moivedata 매핑하기
    const movies = props.moviedat;
    return (
    <div className="products-center"> 
    <div className="products-container"></div>
    {movies?.map((movie)=>{
    return( <div key={movie.id}>
            <Link to={"/movies/"+movies.indexOf(movie)} className="single-product">
                <img src={movie.medium_cover_image} className="single-product-img img" alt="loading error"/>
                <footer>
                    <h5 className="name">{movie.title_long}</h5>
                    <span className="price">{movie.rating}</span>
                </footer>
            </Link>
        </div>)})}
    </div>
    
    );
}

export default Movielisting;

