import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className="banner_section layout_padding">
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h1 className="banner_taital">Help Poor Child</h1>
                                    <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going </p>
                                    <div className="read_bt"><a href="#">Read More</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-sm-12">
                                <h1 className="banner_taital">Help Poor Child</h1>
                                <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going </p>
                                <div className="read_bt"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-sm-12">
                                <h1 className="banner_taital">Help Poor Child</h1>
                                <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going </p>
                                <div className="read_bt"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-sm-12">
                                <h1 className="banner_taital">Help Poor Child</h1>
                                <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going </p>
                                <div className="read_bt"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="col-sm-12">
                                <h1 className="banner_taital">Help Poor Child</h1>
                                <p className="banner_text">Suffered alteration in some form, by injected humour, or randomised words
                                    which don't look even slightly believable. If you are going </p>
                                <div className="read_bt"><a href="#">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="donation_box">
                <h4 className="donation_taital">Contact For Donation</h4>
                <div className="mail_box">
                    <input type="" className="mail_text" placeholder="Your Name" name="Your Name" />
                    <input type="" className="mail_text" placeholder="Email" name="Email" />
                    <input type="" className="mail_text" placeholder="Phone" name="Phone" />
                </div>
                <div className="send_bt"><a href="#">Send</a></div>
            </div>
            <div className="fundraise_section">
                <div className="fundraise_section_main">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="box_main"> 
                                <div className="icon_1"><img src="images/icon-1.png" /></div>
                                <h4 className="volunteer_text">VOLUNTEERS</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"> <Link  to="/join">About</Link></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_main active">
                                <div className="icon_1"><img src="images/icon-2.png" /></div>
                                <h4 className="volunteer_text">FUNDRAISE</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"><a href="#">Join Now</a></div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="box_main">
                                <div className="icon_1"><img src="images/icon-3.png" /></div>
                                <h4 className="volunteer_text">DONATION</h4>
                                <p className="lorem_text">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                <div className="join_bt"><a href="#">Join Now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};
export default Home;