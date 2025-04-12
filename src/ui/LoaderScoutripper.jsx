import "./loaderStyles.css"
function LoaderScoutripper() {
    return (
        <div className="preloader js-preloader ">
            <div className="preloader__wrap">
                <div className="preloader__icon">
                    <img className="logo-light"
                        src="https://scoutripper.com/uploads/0000/6/2024/04/30/scoutripper-symbol.png"
                        alt="Scoutripper"/>
                </div>
            </div>
            <div className="preloader__title">Scoutripper</div>
        </div>
    );
}

export default LoaderScoutripper;
