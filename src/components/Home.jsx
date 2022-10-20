import backgroundImage from '../pictures/background.png'

const Home = () => {
    return (
        <div className="home--container">
            <div className="home--heading">
                <div>
                    <h1>3D Printer Supply</h1>
                    <h3>We offer a large variety of 3d printers at competitive pricing.</h3>
                </div>
                <img src={backgroundImage} alt="" />
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Home