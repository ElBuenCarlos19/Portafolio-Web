import "./styles.css";

interface props {
    left: number;
    top: number;
    rotateY: number;
    rotateX: number;
    rotateZ: number;
    tamaño: number;
}

function Cubo(props: props) {
    return (
        <div className="container" style={{ left: `${props.left}%`, top: `${props.top}%` }}>
            <div className="cubo" style={{ transform: `rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg) rotateZ(${props.rotateZ}deg)` }}>
            <div className="cara caraArriba" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateY(-${props.tamaño/2}px) rotateX(90deg)`
                }}></div>
                <div className="cara caraIzquierda" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateX(-${props.tamaño/2}px) rotateY(90deg)`
                }}></div>
                <div className="cara caraDerecha" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateX(${props.tamaño/2}px) rotateY(90deg)`

                }}></div>
                <div className="cara caraFondo" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateZ(-${props.tamaño/2}px)`

                }}></div>
                <div className="cara caraFrente" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateZ(${props.tamaño/2}px)`
                }}></div>
                <div className="cara caraAbajo" style={{
                    height: `${props.tamaño}px`,
                    width: `${props.tamaño}px`,
                    transform: `translateY(${props.tamaño/2}px) rotateX(90deg)`
                }}></div>
            </div>
        </div>

    );
}

export default Cubo;
