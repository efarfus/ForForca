import React from "react";


export default function CounterProp(props) {
    function count() {
        props.counter(props.count + 1);
    }

//     return (
//             <p>Count com props: {props.count}</p>
//             <Button
//                 variant="contained"
//                 onClick={count}
//                 style={{ maxWidth: "130px" }}
//             >
//                 Counter
//             </Button>
//     );
}
