import Client from '../images/client-img.png';
const Donate = () => {
    return <>
        <div class="donate_section layout_padding">
            <div class="container">
                <h1 class="donate_taital">Donat pepole Says </h1>
                <div class="donate_taital_main">
                    <div id="main_slider" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="donate_left">
                                    <div class="client_img"><img src={Client} /></div>
                                </div>
                                <div class="donate_right">
                                    <h3 class="client_name_text">Mardo Merk</h3>
                                    <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="donate_left">
                                    <div class="client_img"><img src="images/client-img.png" /></div>
                                </div>
                                <div class="donate_right">
                                    <h3 class="client_name_text">Mardo Merk</h3>
                                    <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="donate_left">
                                    <div class="client_img"><img src="images/client-img.png" /></div>
                                </div>
                                <div class="donate_right">
                                    <h3 class="client_name_text">Mardo Merk</h3>
                                    <p class="dummy_text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                        <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Donate;