import '../bill/billCard.css'


export default function BillCard(props) {
    let totalTip = parseInt(props.bill * (props.tip / 100))
    return (
        <div className="billCardContainer">
            <div className='paymentContainer'>
                <div className='TitleContainer'>
                    <h5>Total tip</h5>
                    <h6> / person</h6>
                    
                </div>
                <p>{(totalTip / props.people).toFixed(2)}$</p>
            </div>
            <div className='paymentContainer'>
            <div className='TitleContainer'>
                    <h5>Total pay</h5>
                    <h6> / person</h6>
                </div>
               
                <p>{((totalTip + parseInt(props.bill)) / props.people).toFixed(2)}$</p>
            </div>
            <div className='buttonContainer'>
                <div onClick={props.onReset} className='button'>Reset</div>
            </div>

        </div>
    )
}