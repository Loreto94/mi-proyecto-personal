import "../scss/components/Game.scss";
import Buttons from "./Buttons";

function Game () {
    return (
        <>
            <h3>¡A jugar!</h3>
            <h4></h4>
            <form action="">
                <label htmlFor=""></label>
                <input type="checkbox" />
                <label htmlFor=""></label>
                <input type="checkbox" />
                <label htmlFor=""></label>
                <input type="checkbox" />
                <label htmlFor=""></label>
                <input type="checkbox" />
            </form>
            <div><Buttons /></div>
        </>
    )
}

export default Game;