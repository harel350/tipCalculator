
import { useState } from "react"
import BillCard from "../bill/billCard"
import '../card/card.css'

export default function Card() {
    const [bill, setBill] = useState(0)
    const [people, setPeople] = useState(1)
    const [tip, setTip] = useState(0)
    const tipPrecent = [5, 10, 15, 20,50]
    const onTipPrecentHandle = (tip) => {
        setTip(tip)
    }
    function onReset() {
        setBill(0)
        setPeople(1)
        setTip(0)
    }
    function onChangeBill(e) {
        e.preventDefault()
        if (e.target.value < 0 || e.target.value==="" || e.target.value > 83000 ) {
            setBill(0)
        }
        else {
            setBill(e.target.value)
        }

    }
    function onChangePeople(e){
        e.preventDefault()
        if(e.target.value<1){
            setPeople(1)
        }
        else{
            setPeople(e.target.value)
        }
    }
    return (
        <div className="bodycontainer">
            <div className="inputBillContainer">
                <div className="container">
                    <label>bill</label>
                    <div>
                        <input name='bill' type="number" max={80000} min={1} value={bill} onChange={onChangeBill} />
                        <span>$</span>
                    </div>



                </div>

                <div className="container">
                    <label>Tip - {tip}%</label>
                    <div className="tipContainer">
                        {
                            tipPrecent.map((item, index) => {
                                return (
                                    <button className="tipButton" key={index} onClick={onTipPrecentHandle.bind(this, item)}>{item}%</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <label>how much people</label>
                    <input name="people" type="number" min={1} value={people} onChange={onChangePeople} />
                </div>

            </div>
            <div className="totalBillCard">
                <BillCard bill={bill} tip={tip} people={people} onReset={onReset} />
            </div>
        </div>
    )
}