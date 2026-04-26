
import '../../App.css'

function Title({ text,size = "3rem",color = "#fff5e0",}) {
    return (
        <h1 className="Title" style={{ fontSize: size, color: color,  }}>
        {text}
        </h1>
    );
    }
export default Title;