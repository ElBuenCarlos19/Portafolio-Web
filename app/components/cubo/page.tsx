import "./styles.css";

interface Props {
    left: number;
    top: number;
    rotateY: number;
    rotateX: number;
    rotateZ: number;
    tamano: number;
}

const Cubo: React.FC<Props> = ({ left, top, rotateY, rotateX, rotateZ, tamano }) => {
    return (
        <div className="container" style={{ left: `${left}%`, top: `${top}%` }}>
            <div className="cubo" style={{ transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)` }}>
                <div className="cara caraArriba" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateY(-${tamano / 2}px) rotateX(90deg)`
                }}></div>
                <div className="cara caraIzquierda" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateX(-${tamano / 2}px) rotateY(90deg)`
                }}></div>
                <div className="cara caraDerecha" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateX(${tamano / 2}px) rotateY(90deg)`
                }}></div>
                <div className="cara caraFondo" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateZ(-${tamano / 2}px)`
                }}></div>
                <div className="cara caraFrente" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateZ(${tamano / 2}px)`
                }}></div>
                <div className="cara caraAbajo" style={{
                    height: `${tamano}px`,
                    width: `${tamano}px`,
                    transform: `translateY(${tamano / 2}px) rotateX(90deg)`
                }}></div>
            </div>
        </div>
    );
}

export default Cubo;
