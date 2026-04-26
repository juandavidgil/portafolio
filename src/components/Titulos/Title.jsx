
import '../../App.css'

function Title({ text,color = "#fff5e0",}) {
    return (
        <h1 className="Title" style={{ color: color  }}>
        {text}
        </h1>
    );
    }
export default Title;