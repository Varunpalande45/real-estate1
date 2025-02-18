import SearchBar from "../searchbar/Searchbar";
import "./homePage.scss";

function HomePage(){

    return(
        <div className="homePage">
        <div className="textcontainer">
            <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <h2>A home is a place to start your story.
            The house you looked at today and wanted to think about until tomorrow may be the same 
            house someone looked at yesterday and will buy today.</h2>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>2000+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            
            </div></div>
        <div className="imgcontainer">
        <img src="/bg.png" alt="" /></div>
        </div>
    )
}
export default HomePage;