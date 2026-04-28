import { useState } from "react";
import data from "./data.js";
import "./style.css";


function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleSelected, setMultiSelected] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentItem) {
        if (multipleSelected.includes(getCurrentItem)) {
            let list = [...multipleSelected];
            list.pop(getCurrentItem);
            setMultiSelected(list);
            return;
        }

        setMultiSelected([...multipleSelected, getCurrentItem]);
        console.log(multipleSelected);
    }

    return (<div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} >
            Enable multi selection
        </button>
        <div className="accordian">
            {
                data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick=
                                {enableMultiSelection ? () => handleMultiSelection(dataItem) :
                                    () => handleSingleSelection(dataItem.id)
                                }
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>

                            </div>
                            {selected === dataItem.id ? <div className="content">{dataItem.answer}</div> : null}
                        </div>
                    ))
                ) : (
                    <div>No Data Found</div>
                )
            }
        </div>

    </div>);
}

export default Accordian;